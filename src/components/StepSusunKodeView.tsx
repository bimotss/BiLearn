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
  const [diseret, setDiseret] = useState<number | null>(null);
  const [sasaran, setSasaran] = useState<number | null>(null);
  const refKeping = useRef<(HTMLButtonElement | null)[]>([]);
  /**
   * Indeks yang harus difokuskan ulang setelah keping dipindah. Disimpan di
   * ref, bukan state: ini urusan DOM, dan menyimpannya sebagai state memicu
   * render berantai.
   */
  const fokusKe = useRef<number | null>(null);

  // Setelah keping berpindah, fokus keyboard ikut pindah bersamanya. Tanpa ini
  // fokus melompat ke awal halaman dan pemindahan berturut-turut jadi mustahil.
  useEffect(() => {
    if (fokusKe.current === null) return;
    refKeping.current[fokusKe.current]?.focus();
    fokusKe.current = null;
  }, [tersusun]);

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

  /**
   * Didefinisikan sebelum `if (!data)` di bawah karena pintasan keyboard-nya
   * adalah hook — hook tidak boleh dilewati oleh early return.
   */
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

  // Ctrl+Enter memeriksa susunan. Setelah lulus pintasannya dilepas, supaya
  // penekanan berikutnya dipakai halaman untuk pindah materi.
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

  /**
   * Memindahkan keping dari satu posisi ke posisi lain.
   *
   * Ini yang membuat kesalahan di urutan kedua tidak memaksa user membongkar
   * delapan keping berikutnya — cukup geser keping itu saja.
   */
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
        <p className="mt-5 text-sm font-semibold text-neutral-700">Susunanmu</p>
        <p className="text-xs text-neutral-500">
          Urutannya bisa diperbaiki tanpa membongkar semuanya: seret kepingnya,
          atau fokuskan dengan Tab lalu tekan panah kiri/kanan. Delete
          mengeluarkan keping itu saja.
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
              className={`flex items-center rounded-md ${
                sasaran === i && diseret !== null && diseret !== i
                  ? "ring-2 ring-gold-500"
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
                aria-label={`${k.teks} — urutan ${i + 1} dari ${tersusun.length}. Panah kiri dan kanan memindahkan, Delete mengeluarkannya.`}
                className="cursor-grab rounded-l-md border border-r-0 border-gold-400 bg-gold-50 px-2.5 py-1.5 font-mono text-sm text-neutral-900 transition focus:outline-none focus:ring-2 focus:ring-gold-400 active:cursor-grabbing disabled:cursor-default disabled:opacity-70"
              >
                {k.teks}
              </button>
              {!lulus && (
                <button
                  type="button"
                  onClick={() => hapus(i)}
                  aria-label={`Keluarkan ${k.teks} dari susunan, urutan ${i + 1}`}
                  className="rounded-r-md border border-gold-400 bg-gold-50 px-2 py-1.5 text-sm text-neutral-400 transition hover:border-red-400 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  ×
                </button>
              )}
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
            Periksa susunan{" "}
            <span className="text-neutral-900/60">(Ctrl + Enter)</span>
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
              <>
                <p className="text-sm leading-relaxed text-neutral-800">
                  <InlineMarkdown text={data.explanation} />
                </p>
                <p className="text-sm text-green-900">
                  Tekan <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts> sekali lagi untuk
                  lanjut ke materi berikutnya.
                </p>
              </>
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
