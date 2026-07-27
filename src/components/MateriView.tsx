"use client";

import { useState } from "react";
import type { Materi } from "@/lib/types";

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
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
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
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
          }`}
        >
          {marked ? "✓ Selesai" : "Tandai selesai & lanjut →"}
        </button>
      </div>
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLang = "";
  let codeBuffer: string[] = [];

  lines.forEach((line, index) => {
    // Code block toggle
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End code block
        elements.push(
          <div key={`code-${index}`} className="my-4 overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
            {codeLang && (
              <div className="bg-neutral-800 px-4 py-1 text-xs font-mono text-neutral-400 border-b border-neutral-700">
                {codeLang}
              </div>
            )}
            <pre className="overflow-x-auto p-4 font-mono text-sm text-neutral-100 leading-relaxed">
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

    // Heading
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
        <h3 key={index} className="mt-8 mb-3 text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-2">
          {formatInline(line.slice(3))}
        </h3>
      );
      return;
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h2 key={index} className="mt-8 mb-4 text-2xl font-extrabold text-neutral-900">
          {formatInline(line.slice(2))}
        </h2>
      );
      return;
    }

    // Callout / Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={index}
          className="my-4 border-l-4 border-blue-500 bg-blue-50/60 p-4 text-neutral-800 rounded-r-lg italic"
        >
          {formatInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    // Unordered list
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const itemText = line.trim().slice(2);
      elements.push(
        <li key={index} className="ml-6 list-disc my-1 text-neutral-700">
          {formatInline(itemText)}
        </li>
      );
      return;
    }

    // Empty line
    if (!line.trim()) {
      return;
    }

    // Normal paragraph
    elements.push(
      <p key={index} className="my-3 text-neutral-700 leading-relaxed">
        {formatInline(line)}
      </p>
    );
  });

  return <>{elements}</>;
}

function formatInline(text: string): React.ReactNode {
  // Simple inline parser for **bold** and `code`
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
          className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-900 border border-neutral-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
