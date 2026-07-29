"use client";

import { useEffect, useRef } from "react";
import { useProgress } from "@/lib/progress";

/**
 * Dua bagian yang mengurus mode belajar dari luar halaman:
 *
 * 1. `PemilihModeAwal` — layar yang muncul sekali di kunjungan pertama.
 * 2. `PenunjukMode`    — penunjuk + pengganti mode di header, terlihat dari
 *                        halaman mana pun (termasuk halaman depan).
 *
 * Keduanya sengaja tidak dipasang di halaman step saja: sebelum ini tombolnya
 * hanya ada di sana, sehingga dari halaman depan mode pilihan ganda terlihat
 * seperti tidak ada.
 */

const LABEL: Record<"koding" | "pilihan-ganda", string> = {
  koding: "⌨️ Mode ngetik",
  "pilihan-ganda": "🔘 Mode pilihan ganda",
};

export function PenunjukMode() {
  const { ready, mode, setMode } = useProgress();

  // Sebelum localStorage terbaca, jangan tampilkan apa pun — kalau tidak,
  // render server dan client berbeda dan React melaporkan hydration mismatch.
  if (!ready) return null;

  const lawan = mode === "koding" ? "pilihan-ganda" : "koding";

  return (
    <button
      type="button"
      onClick={() => setMode(lawan)}
      title={`Sedang ${LABEL[mode]}. Klik untuk pindah ke ${LABEL[lawan]}.`}
      className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-gold-400 hover:bg-gold-50"
    >
      <span className="text-neutral-500">Mode:</span>{" "}
      <span className="font-semibold text-neutral-900">{LABEL[mode]}</span>
      <span className="ml-1.5 text-neutral-400" aria-hidden="true">
        ⇄
      </span>
      <span className="sr-only">. Klik untuk pindah ke {LABEL[lawan]}.</span>
    </button>
  );
}

export function PemilihModeAwal() {
  const { ready, modeDipilih, setMode, lewatiPemilihanMode } = useProgress();
  const kotak = useRef<HTMLDivElement>(null);
  const tombolPertama = useRef<HTMLButtonElement>(null);
  const perluTampil = ready && !modeDipilih;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/60 p-4">
      <div
        ref={kotak}
        role="dialog"
        aria-modal="true"
        aria-labelledby="judul-pemilih-mode"
        className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
      >
        <h2 id="judul-pemilih-mode" className="text-2xl font-bold">
          Mau belajar dengan cara yang mana?
        </h2>
        <p className="mt-2 text-neutral-600">
          Pilihannya bisa kamu ganti kapan saja lewat tombol di header. Progress
          kedua mode dihitung terpisah, jadi kamu selalu tahu mana yang benar-benar
          sudah kamu ketik sendiri.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            ref={tombolPertama}
            type="button"
            onClick={() => setMode("koding")}
            className="rounded-xl border border-neutral-200 p-5 text-left transition hover:border-gold-400 hover:bg-gold-50 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <span className="text-2xl" aria-hidden="true">
              ⌨️
            </span>
            <span className="mt-2 block font-bold">Mengetik kode</span>
            <span className="mt-1 block text-sm text-neutral-600">
              Kamu menulis kodenya sendiri di editor, lalu dinilai otomatis. Cara
              belajar yang paling dekat dengan pekerjaan aslinya.
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("pilihan-ganda")}
            className="rounded-xl border border-neutral-200 p-5 text-left transition hover:border-gold-400 hover:bg-gold-50 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <span className="text-2xl" aria-hidden="true">
              🔘
            </span>
            <span className="mt-2 block font-bold">Pilihan ganda</span>
            <span className="mt-1 block text-sm text-neutral-600">
              Kamu memilih jawaban yang benar, tanpa mengetik. Cocok kalau kamu
              belajar dari ponsel atau belum nyaman mengetik kode.
            </span>
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            Belum semua step punya soal pilihan ganda. Yang belum ada tetap bisa
            dibuka, dan akan ditandai apa adanya.
          </p>
          <button
            type="button"
            onClick={lewatiPemilihanMode}
            className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            Nanti saja
          </button>
        </div>
      </div>
    </div>
  );
}
