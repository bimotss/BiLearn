"use client";

import { useMemo, useState } from "react";
import type { Step } from "@/lib/types";
import { gabungPotongan, jalankanTes, type HasilTes } from "@/lib/tes";
import { InlineMarkdown } from "./MarkdownRenderer";

interface Props {
  step: Step;
  onPassed: () => void;
}

/** Kepingan di kolam, dengan penanda asal supaya urutannya tetap acak-tetap. */
interface Keping {
  key: string;
  teks: string;
}

/**
 * Mode susun kode: user merangkai kode dari kepingan yang tersedia, bukan
 * mengetiknya. Hasil rangkaian dinilai dengan `tests` step yang sama persis
 * dengan mode ngetik (lihat `@/lib/tes`).
 */
export default function StepSusunKodeView({ step, onPassed }: Props) {
  const data = step.susunKode;

  const [tersusun, setTersusun] = useState<Keping[]>([]);
  const [hasil, setHasil] = useState<HasilTes[] | null>(null);
  const [lulus, setLulus] = useState(false);
  const [lihatSolusi, setLihatSolusi] = useState(false);

  /**
   * Kolam kepingan diacak sekali dengan urutan yang TETAP (bukan Math.random),
   * supaya susunannya tidak berubah setiap render dan hasil render di server
   * sama dengan di client.
   */
  const kolam = useMemo<Keping[]>(() => {
    if (!data) return [];
    const semua: Keping[] = [
      ...data.potongan.map((teks, i) => ({ key: `b${i}`, teks })),
      ...data.pengecoh.map((teks, i) => ({ key: `p${i}`, teks })),
    ];
    // pengacak deterministik sederhana: urutkan berdasarkan sidik jari teks
    return [...semua].sort((a, b) => sidik(a.teks) - sidik(b.teks));
  }, [data]);

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

  function periksa() {
    if (!step.tests.length || tersusun.length === 0) return;
    const res = jalankanTes(step.tests, kodeTersusun);
    setHasil(res);
    if (res.every((r) => r.pass)) {
      setLulus(true);
      onPassed();
    }
  }

  const gagal = hasil?.filter((r) => !r.pass) ?? [];

  return (
    <div className="space-y-6">
      <p className="text-neutral-700 leading-relaxed">
        <InlineMarkdown text={step.explanation} />
      </p>

      {/* Contoh kerja WAJIB — sama seperti mode ngetik */}
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm font-semibold text-neutral-700">👀 Contoh dulu</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
          {step.example.code}
        </pre>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">Hasilnya: </span>
          {step.example.output}
        </p>
        {step.example.note && (
          <p className="mt-1.5 text-sm text-neutral-500">💡 {step.example.note}</p>
        )}
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <p className="font-medium text-neutral-800">
          <InlineMarkdown text={pertanyaan} />
        </p>
        <p className="mt-1 text-sm text-neutral-500">
          Rangkai kodenya dari kepingan di bawah. Ada kepingan yang sengaja
          salah — tidak semuanya perlu dipakai.
        </p>

        {/* Papan susunan */}
        <p className="mt-5 text-sm font-semibold text-neutral-700">
          Susunanmu
        </p>
        <ol
          aria-label="Susunan kode yang sudah kamu rangkai"
          className="mt-2 flex min-h-[3.5rem] flex-wrap items-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-3"
        >
          {tersusun.length === 0 && (
            <li className="text-sm text-neutral-400">
              Belum ada kepingan. Ketuk salah satu di bawah.
            </li>
          )}
          {tersusun.map((k, i) => (
            <li key={`${k.key}-${i}`}>
              <button
                type="button"
                onClick={() => hapus(i)}
                disabled={lulus}
                aria-label={`Keluarkan ${k.teks} dari susunan, urutan ${i + 1}`}
                className="rounded-md border border-gold-400 bg-gold-50 px-2.5 py-1.5 font-mono text-sm text-neutral-900 transition hover:border-red-400 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-gold-400 disabled:opacity-70"
              >
                {k.teks}
                {!lulus && (
                  <span className="ml-1.5 text-neutral-400" aria-hidden="true">
                    ×
                  </span>
                )}
              </button>
            </li>
          ))}
        </ol>

        {/* Kolam kepingan */}
        <p className="mt-4 text-sm font-semibold text-neutral-700">
          Kepingan yang tersedia
        </p>
        <ul
          aria-label="Kepingan kode yang bisa dipakai"
          className="mt-2 flex flex-wrap gap-2"
        >
          {sisa.length === 0 && (
            <li className="text-sm text-neutral-400">
              Semua kepingan sudah kamu pakai.
            </li>
          )}
          {sisa.map((k) => (
            <li key={k.key}>
              <button
                type="button"
                onClick={() => tambah(k)}
                disabled={lulus}
                aria-label={`Tambahkan ${k.teks} ke susunan`}
                className="rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 font-mono text-sm text-neutral-800 transition hover:border-gold-400 hover:bg-gold-50 focus:outline-none focus:ring-2 focus:ring-gold-400 disabled:opacity-50"
              >
                {k.teks}
              </button>
            </li>
          ))}
        </ul>

        {/* Pratinjau kode hasil rangkaian */}
        {tersusun.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-700">
              Kode yang terbentuk
            </p>
            <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
              {kodeTersusun}
            </pre>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={periksa}
            disabled={lulus || tersusun.length === 0}
            className="rounded-lg bg-gold-500 px-5 py-2.5 font-medium text-neutral-900 transition hover:bg-gold-400 disabled:opacity-50"
          >
            Periksa susunan
          </button>
          {tersusun.length > 0 && !lulus && (
            <button
              type="button"
              onClick={() => {
                setTersusun([]);
                setHasil(null);
              }}
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
            >
              Bongkar semua
            </button>
          )}
        </div>

        {/* Umpan balik */}
        {hasil && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-4 space-y-2 rounded-lg border p-4 ${
              lulus
                ? "border-green-200 bg-green-50"
                : "border-amber-200 bg-amber-50"
            }`}
          >
            <p
              className={`font-semibold ${
                lulus ? "text-green-900" : "text-amber-900"
              }`}
            >
              {lulus ? "🎉 Susunanmu benar!" : "❌ Belum tepat"}
            </p>
            {lulus ? (
              <p className="text-sm leading-relaxed text-neutral-800">
                <InlineMarkdown text={data.explanation} />
              </p>
            ) : (
              <ul className="space-y-1.5 text-sm text-amber-900">
                {gagal.map((r, i) => (
                  <li key={i}>• {r.message}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={() => setLihatSolusi((s) => !s)}
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          {lihatSolusi ? "Sembunyikan kode jawabannya" : "Lihat kode jawabannya"}
        </button>
        {lihatSolusi && (
          <div className="mt-3 rounded-lg bg-neutral-900 p-4">
            <p className="mb-2 font-mono text-xs text-neutral-400">
              {"// Bentuk kode aslinya saat diketik sendiri:"}
            </p>
            <pre className="overflow-x-auto font-mono text-sm text-green-300">
              {step.solution}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

/** Sidik jari teks — dipakai untuk mengacak kolam secara tetap. */
function sidik(teks: string): number {
  let n = 0;
  for (let i = 0; i < teks.length; i++) {
    n = (n * 31 + teks.charCodeAt(i)) % 100003;
  }
  return n;
}
