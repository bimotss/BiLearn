"use client";

import { useState } from "react";
import type { Materi } from "@/lib/types";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface Props {
  materi: Materi;
  onPassed: () => void;
}

export default function MateriView({ materi, onPassed }: Props) {
  const [marked, setMarked] = useState(false);

  function handleComplete() {
    setMarked(true);
    onPassed();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-10 backdrop-blur-md shadow-xl dark:shadow-2xl">
      {/* Header Info */}
      <div className="border-b border-slate-200 dark:border-white/[0.08] pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <span>📖 Panduan Teori & Konsep</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {materi.title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Pahami konsep kunci, tabel perbandingan, dan skenario dunia kerja di bawah sebelum melangkah ke tantangan latihan.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 leading-relaxed">
        <MarkdownRenderer content={materi.body} />
      </div>

      {/* Completion & Next Step Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-white/[0.08] pt-6">
        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
          {marked ? (
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>✅</span>
              <span>Materi telah selesai dipelajari & dicatat dalam progresmu.</span>
            </span>
          ) : (
            "Selesai membaca? Tandai selesai untuk memperbarui progres belajarmu."
          )}
        </div>
        <button
          type="button"
          onClick={handleComplete}
          className={`cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-sm transition-all duration-200 ${
            marked
              ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400"
              : "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02]"
          }`}
        >
          {marked ? "✓ Sudah Selesai" : "Tandai Selesai & Lanjut →"}
        </button>
      </div>
    </div>
  );
}
