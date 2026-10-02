import React from "react";

/**
 * Renderer Markdown berstandar tinggi yang dipakai bersama oleh MateriView (halaman baca)
 * dan StepView (penjelasan step). Mendukung table, code blocks, blockquotes, lists,
 * serta format inline (code dan bold).
 */
export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLang = "";
  let codeBuffer: string[] = [];

  const barisTabel: number[] = [];
  let dalamKode = false;
  lines.forEach((line, i) => {
    if (line.trim().startsWith("```")) dalamKode = !dalamKode;
    else if (!dalamKode && /^\s*\|.*\|\s*$/.test(line)) barisTabel.push(i);
  });
  const awalTabel = new Map<number, number>();
  for (let i = 0; i < barisTabel.length; ) {
    let j = i;
    while (j + 1 < barisTabel.length && barisTabel[j + 1] === barisTabel[j] + 1) j++;
    if (j > i) awalTabel.set(barisTabel[i], barisTabel[j]);
    i = j + 1;
  }
  const lewati = new Set<number>();
  for (const [mulai, akhir] of awalTabel) {
    for (let i = mulai; i <= akhir; i++) lewati.add(i);
  }

  function sel(line: string): string[] {
    return line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((s) => s.trim());
  }

  lines.forEach((line, index) => {
    // Tabel: Render dengan gaya modern dark UI
    if (awalTabel.has(index)) {
      const akhir = awalTabel.get(index)!;
      const semua = lines.slice(index, akhir + 1);
      const pemisah = /^\s*\|[\s:|-]+\|\s*$/;
      const kepala = pemisah.test(semua[1] ?? "") ? sel(semua[0]) : null;
      const isi = semua
        .filter((l, i) => !(kepala && i <= 1) && !pemisah.test(l))
        .map(sel);
      elements.push(
        <div key={`tabel-${index}`} className="my-5 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#090d16] shadow-xs">
          <table className="w-full border-collapse text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            {kepala && (
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-slate-800/80">
                  {kepala.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white tracking-wide border-r border-slate-200 dark:border-white/[0.06] last:border-r-0"
                    >
                      {formatInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {isi.map((baris, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-200/70 dark:border-white/[0.04] last:border-b-0 odd:bg-slate-50/50 odd:dark:bg-slate-900/30 even:bg-white even:dark:bg-slate-800/20 hover:bg-slate-100/60 dark:hover:bg-white/[0.04] transition-colors"
                >
                  {baris.map((k, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 align-top text-slate-700 dark:text-slate-300 border-r border-slate-200/70 dark:border-white/[0.06] last:border-r-0 leading-relaxed"
                    >
                      {formatInline(k)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      return;
    }
    if (lewati.has(index)) return;

    // Code block toggle
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <div
            key={`code-${index}`}
            className="my-5 overflow-hidden rounded-xl border border-slate-800 dark:border-white/[0.08] bg-[#090d16] shadow-xl"
          >
            {codeLang && (
              <div className="flex items-center justify-between border-b border-slate-800 dark:border-white/[0.08] bg-slate-900/90 px-4 py-1.5 font-mono text-[11px] font-semibold text-slate-400">
                <span>{codeLang}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Syntax</span>
              </div>
            )}
            <pre className="overflow-x-auto p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
              <code>{codeBuffer.join("\n")}</code>
            </pre>
          </div>
        );
        codeBuffer = [];
        inCodeBlock = false;
        codeLang = "";
      } else {
        inCodeBlock = true;
        codeLang = line.trim().slice(3);
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h4 key={index} className="mt-6 mb-2 text-base sm:text-lg font-bold text-amber-700 dark:text-amber-300 tracking-tight">
          {formatInline(line.slice(4))}
        </h4>
      );
      return;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h3
          key={index}
          className="mt-8 mb-3 border-b border-slate-200 dark:border-white/[0.08] pb-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight"
        >
          {formatInline(line.slice(3))}
        </h3>
      );
      return;
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h2
          key={index}
          className="mt-8 mb-4 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          {formatInline(line.slice(2))}
        </h2>
      );
      return;
    }

    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={index}
          className="my-4 rounded-xl border-l-4 border-amber-500 bg-amber-500/10 p-4 text-slate-800 dark:text-amber-200 text-sm leading-relaxed"
        >
          {formatInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    const bernomor = line.trim().match(/^(\d+)\.\s+(.*)$/);
    if (bernomor) {
      elements.push(
        <li
          key={index}
          value={Number(bernomor[1])}
          className="my-1.5 ml-6 list-decimal text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          {formatInline(bernomor[2])}
        </li>
      );
      return;
    }

    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      elements.push(
        <li key={index} className="my-1.5 ml-6 list-disc text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {formatInline(line.trim().slice(2))}
        </li>
      );
      return;
    }

    if (!line.trim()) return;

    elements.push(
      <p key={index} className="my-3 leading-relaxed text-slate-700 dark:text-slate-300 text-sm sm:text-base">
        {formatInline(line)}
      </p>
    );
  });

  return <>{elements}</>;
}

/** Markdown inline saja (`code` dan **tebal**) untuk teks satu paragraf. */
export function InlineMarkdown({ text }: { text: string }) {
  return <>{formatInline(text)}</>;
}

function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded border border-amber-400/30 bg-amber-500/10 px-1.5 py-0.5 font-mono text-xs text-amber-800 dark:text-amber-300 dark:border-white/15 dark:bg-white/[0.08]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default MarkdownRenderer;
