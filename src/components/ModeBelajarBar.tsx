"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useProgress } from "@/lib/progress";

/**
 * Dua bagian yang mengurus mode belajar dari luar halaman:
 *
 * 1. `PemilihModeAwal` — layar yang muncul sekali di kunjungan pertama.
 * 2. `PenunjukMode`    — penunjuk + pengganti mode di header, terlihat dari
 *                        halaman mana pun (termasuk halaman depan).
 */

function useIsAreaBahasa(): boolean {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (pathname?.startsWith("/flashcards")) return true;
  if (pathname?.startsWith("/tracks/business-english")) return true;
  if (pathname?.startsWith("/bahasa")) return true;
  if (searchParams.get("kategori") === "bahasa") return true;

  return false;
}

export function PenunjukMode() {
  const { ready, mode, setMode } = useProgress();
  const isAreaBahasa = useIsAreaBahasa();

  // Pintasan keyboard Ctrl+M untuk toggle mode secara global
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m") {
        e.preventDefault();
        setMode(mode === "koding" ? "pilihan-ganda" : "koding");
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode, setMode]);

  // Sebelum localStorage terbaca atau jika berada di area Bahasa, jangan tampilkan
  if (!ready || isAreaBahasa) return null;

  const isKoding = mode === "koding";
  const labelMode = isKoding ? "Mode Ngetik" : "Susun Kode";
  const lawan = isKoding ? "pilihan-ganda" : "koding";
  const labelLawan = lawan === "koding" ? "Mode Ngetik" : "Susun Kode";

  return (
    <button
      type="button"
      onClick={() => setMode(lawan)}
      title={`Sedang ${labelMode}. Klik (atau Ctrl+M) untuk beralih ke ${labelLawan}.`}
      className="group flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-xl border border-slate-300/80 bg-white/90 text-slate-700 hover:border-amber-400 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/90 px-2.5 py-1.5 sm:px-3 text-xs font-medium dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-200 dark:hover:border-amber-400/50 dark:hover:bg-slate-800/90 dark:hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0"
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full transition-all ${
          isKoding
            ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
            : "bg-purple-400 shadow-[0_0_8px_#c084fc]"
        }`}
        aria-hidden="true"
      />
      <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Mode:</span>
      <span className="font-semibold text-slate-900 dark:text-white whitespace-nowrap">{labelMode}</span>
      <span
        className="hidden md:inline-block rounded bg-slate-100 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400 transition group-hover:bg-amber-500/20 group-hover:text-amber-700 dark:group-hover:text-amber-300"
        aria-hidden="true"
      >
        Ctrl+M
      </span>
      <span className="sr-only">. Klik untuk pindah ke {labelLawan}.</span>
    </button>
  );
}

export function PemilihModeAwal() {
  const { ready, modeDipilih, setMode, lewatiPemilihanMode } = useProgress();
  const isAreaBahasa = useIsAreaBahasa();
  const kotak = useRef<HTMLDivElement>(null);
  const tombolPertama = useRef<HTMLButtonElement>(null);
  const perluTampil = ready && !modeDipilih && !isAreaBahasa;

  // Fokus dipindahkan ke dalam dialog supaya pengguna keyboard tidak
  // ditinggal di belakang overlay.
  useEffect(() => {
    if (perluTampil) tombolPertama.current?.focus();
  }, [perluTampil]);

  // Esc = lewati. Tab dikurung di dalam dialog selama ia terbuka.
  useEffect(() => {
    if (!perluTampil) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        lewatiPemilihanMode();
        return;
      }
      if (e.key !== "Tab" || !kotak.current) return;

      const bisaFokus = kotak.current.querySelectorAll<HTMLElement>("button");
      if (bisaFokus.length === 0) return;
      const pertama = bisaFokus[0];
      const terakhir = bisaFokus[bisaFokus.length - 1];

      if (e.shiftKey && document.activeElement === pertama) {
        e.preventDefault();
        terakhir.focus();
      } else if (!e.shiftKey && document.activeElement === terakhir) {
        e.preventDefault();
        pertama.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [perluTampil, lewatiPemilihanMode]);

  if (!perluTampil) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md animate-fade-in">
      <div
        ref={kotak}
        role="dialog"
        aria-modal="true"
        aria-labelledby="judul-pemilih-mode"
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700/80 dark:bg-slate-900/95 dark:text-slate-100 p-6 backdrop-blur-xl sm:p-8"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <span>✦ Personalisasi Pembelajaran</span>
        </div>
        <h2
          id="judul-pemilih-mode"
          className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Pilih Cara Belajar Ternyamanmu
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          BiLearn mendukung dua cara menyelesaikan latihan. Pilihan ini bisa kamu
          ganti kapan saja lewat tombol mode di header (atau pintasan{" "}
          <kbd className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-300 border border-slate-300 dark:border-slate-700">
            Ctrl+M
          </kbd>
          ). Progres keduanya dihitung terpisah secara akurat.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Opsi 1: Mode Koding */}
          <button
            ref={tombolPertama}
            type="button"
            onClick={() => setMode("koding")}
            className="group cursor-pointer rounded-xl border border-slate-200 bg-slate-50 p-5 text-left transition-all duration-200 hover:border-amber-400 hover:bg-white dark:border-slate-700/80 dark:bg-slate-800/60 dark:hover:border-amber-400/80 dark:hover:bg-slate-850 dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-xl text-amber-500 dark:text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
              ⌨️
            </div>
            <span className="mt-3 block font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              Mengetik Kode Langsung
            </span>
            <span className="mt-1.5 block text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Menulis kode sendiri di editor dengan feedback dan evaluasi tes
              otomatis. Sangat cocok untuk mengasah refleks keyboard dan simulasi
              dunia kerja asli.
            </span>
          </button>

          {/* Opsi 2: Mode Susun Kode */}
          <button
            type="button"
            onClick={() => setMode("pilihan-ganda")}
            className="group cursor-pointer rounded-xl border border-slate-200 bg-slate-50 p-5 text-left transition-all duration-200 hover:border-purple-400 hover:bg-white dark:border-slate-700/80 dark:bg-slate-800/60 dark:hover:border-purple-400/80 dark:hover:bg-slate-850 dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-xl text-purple-500 dark:text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
              🧩
            </div>
            <span className="mt-3 block font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Menyusun Potongan Kode
            </span>
            <span className="mt-1.5 block text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Merangkai blok kepingan kode/instruksi secara visual tanpa
              mengetik. Sangat nyaman untuk pengguna ponsel, tablet, atau saat
              ingin fokus pada alur logika.
            </span>
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800 pt-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Step tanpa varian susun kode tetap dapat diselesaikan lewat mode
            mengetik, dan akan ditandai dengan transparan.
          </p>
          <button
            type="button"
            onClick={lewatiPemilihanMode}
            className="cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 transition hover:text-slate-900 dark:hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Nanti Saja (Pilih Default)
          </button>
        </div>
      </div>
    </div>
  );
}
