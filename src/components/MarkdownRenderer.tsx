import React from "react";

/**
 * Renderer Markdown minimal yang dipakai bersama oleh MateriView (halaman baca)
 * dan StepView (penjelasan step). Sengaja tidak memakai library eksternal:
 * konten BiLearn hanya butuh heading, list, blockquote, code block, serta
 * penekanan inline `code` dan **tebal**.
 *
 * Sebelum komponen ini ada, StepView menampilkan explanation sebagai teks polos
 * sehingga backtick dan tanda bintang bocor mentah ke layar pemula.
 */
export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLang = "";
  let codeBuffer: string[] = [];

  // Tabel markdown ditangani sebelum loop utama karena satu tabel terdiri dari
  // beberapa baris sekaligus. Tanpa ini, baris "| a | b |" bocor ke layar
  // sebagai paragraf berisi pipa — masalah nyata di halaman materi.
  const barisTabel: number[] = [];
  let dalamKode = false;
  lines.forEach((line, i) => {
    if (line.trim().startsWith("```")) dalamKode = !dalamKode;
    else if (!dalamKode && /^\s*\|.*\|\s*$/.test(line)) barisTabel.push(i);
  });
  const awalTabel = new Map<number, number>(); // baris awal → baris akhir
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
    // Tabel: render sebagai <table> sungguhan saat baris pembukanya ditemui
    if (awalTabel.has(index)) {
      const akhir = awalTabel.get(index)!;
      const semua = lines.slice(index, akhir + 1);
      const pemisah = /^\s*\|[\s:|-]+\|\s*$/;
      const kepala = pemisah.test(semua[1] ?? "") ? sel(semua[0]) : null;
      const isi = semua
        .filter((l, i) => !(kepala && i <= 1) && !pemisah.test(l))
        .map(sel);
      elements.push(
        <div key={`tabel-${index}`} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {kepala && (
              <thead>
                <tr>
                  {kepala.map((h, i) => (
                    <th
                      key={i}
                      className="border border-neutral-200 bg-neutral-100 px-3 py-2 text-left font-semibold text-neutral-900"
                    >
                      {formatInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {isi.map((baris, i) => (
                <tr key={i}>
                  {baris.map((k, j) => (
                    <td
                      key={j}
                      className="border border-neutral-200 px-3 py-2 align-top text-neutral-700"
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
            className="my-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
          >
            {codeLang && (
              <div className="border-b border-neutral-700 bg-neutral-800 px-4 py-1 font-mono text-xs text-neutral-400">
                {codeLang}
              </div>
            )}
            <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-neutral-100">
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
        <h4 key={index} className="mt-6 mb-2 text-lg font-bold text-neutral-900">
          {formatInline(line.slice(4))}
        </h4>
      );
      return;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h3
          key={index}
          className="mt-8 mb-3 border-b border-neutral-100 pb-2 text-xl font-bold text-neutral-900"
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
          className="mt-8 mb-4 text-2xl font-extrabold text-neutral-900"
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
          className="my-4 rounded-r-lg border-l-4 border-gold-400 bg-gold-50 p-4 text-neutral-800 italic"
        >
          {formatInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    // Daftar bernomor: "1. isi" — sebelumnya jatuh ke paragraf biasa
    const bernomor = line.trim().match(/^(\d+)\.\s+(.*)$/);
    if (bernomor) {
      elements.push(
        <li
          key={index}
          value={Number(bernomor[1])}
          className="my-1 ml-6 list-decimal text-neutral-700"
        >
          {formatInline(bernomor[2])}
        </li>
      );
      return;
    }

    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      elements.push(
        <li key={index} className="my-1 ml-6 list-disc text-neutral-700">
          {formatInline(line.trim().slice(2))}
        </li>
      );
      return;
    }

    if (!line.trim()) return;

    elements.push(
      <p key={index} className="my-3 leading-relaxed text-neutral-700">
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
        <strong key={i} className="font-semibold text-neutral-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-900"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default MarkdownRenderer;
