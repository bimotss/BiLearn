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
    <div className="mx-auto max-w-4xl space-y-8 rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-700">
          <span>📖 Halaman Materi</span>
        </div>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">
          {materi.title}
        </h2>
      </div>

      <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed">
        <MarkdownRenderer content={materi.body} />
      </div>

      <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
        <div className="text-sm text-neutral-500">
          {marked ? "✅ Sudah ditandai selesai" : "Baca seksama sebelum lanjut ke latihan."}
        </div>
        <button
          onClick={handleComplete}
          className={`rounded-lg px-6 py-3 font-semibold transition ${
            marked
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gold-500 text-neutral-900 hover:bg-gold-400 shadow-sm"
          }`}
        >
          {marked ? "✓ Selesai" : "Tandai selesai & lanjut →"}
        </button>
      </div>
    </div>
  );
}
