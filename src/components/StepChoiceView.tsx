"use client";

import { useState } from "react";
import type { Step } from "@/lib/types";
import { InlineMarkdown } from "./MarkdownRenderer";

interface Props {
  step: Step;
  onPassed: () => void;
}

export default function StepChoiceView({ step, onPassed }: Props) {
  const choiceData = step.pilihanGanda;

  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  if (!choiceData) {
    return null;
  }

  const questionText = choiceData.question ?? step.instruction;

  function handleSubmit() {
    if (selected === null || !choiceData) return;
    const ok = selected === choiceData.answerIndex;
    setCorrect(ok);
    setSubmitted(true);
    if (ok) {
      onPassed();
    }
  }

  function handleRetry() {
    setSubmitted(false);
    setSelected(null);
    setCorrect(false);
  }

  return (
    <div className="space-y-6">
      {/* Penjelasan step */}
      <p className="text-neutral-700 leading-relaxed">
        <InlineMarkdown text={step.explanation} />
      </p>

      {/* Contoh kerja WAJIB */}
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm font-semibold text-neutral-700">
          👀 Contoh dulu
        </p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-neutral-100 font-mono">
          {step.example.code}
        </pre>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">Hasilnya: </span>
          {step.example.output}
        </p>
        {step.example.note && (
          <p className="mt-1.5 text-sm text-neutral-500">
            💡 {step.example.note}
          </p>
        )}
      </div>

      {/* Radio Group Soal Pilihan Ganda */}
      <fieldset className="rounded-xl border border-neutral-200 bg-white p-5 space-y-4">
        <legend className="px-2 font-semibold text-neutral-900 text-base">
          ❓ Pertanyaan Pilihan Ganda
        </legend>

        <p className="text-neutral-800 font-medium">
          <InlineMarkdown text={questionText} />
        </p>

        <div className="space-y-2.5">
          {choiceData.choices.map((choice, i) => {
            const radioId = `choice-${step.id}-${i}`;
            const isSelected = selected === i;
            let containerCls =
              "flex items-start gap-3 rounded-lg border p-3.5 transition cursor-pointer hover:bg-gold-50 hover:border-gold-300";

            if (submitted) {
              if (i === choiceData.answerIndex) {
                containerCls = "flex items-start gap-3 rounded-lg border border-green-500 bg-green-50 p-3.5";
              } else if (isSelected && !correct) {
                containerCls = "flex items-start gap-3 rounded-lg border border-red-400 bg-red-50 p-3.5";
              }
            } else if (isSelected) {
              containerCls = "flex items-start gap-3 rounded-lg border border-gold-500 bg-gold-50 p-3.5 ring-2 ring-gold-400";
            }

            return (
              <label key={i} htmlFor={radioId} className={containerCls}>
                <input
                  type="radio"
                  id={radioId}
                  name={`choice-${step.id}`}
                  value={i}
                  checked={isSelected}
                  onChange={() => !submitted && setSelected(i)}
                  disabled={submitted && correct}
                  className="mt-1 h-4 w-4 shrink-0 text-gold-600 focus:ring-2 focus:ring-gold-400 focus:outline-none"
                />
                <span className="text-sm leading-relaxed text-neutral-800 font-normal">
                  {choice}
                </span>
              </label>
            );
          })}
        </div>

        {!submitted && (
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={selected === null}
              className="rounded-lg bg-gold-500 px-5 py-2.5 font-medium text-neutral-900 hover:bg-gold-400 disabled:opacity-50 transition"
            >
              Jawab
            </button>
          </div>
        )}

        {/* Umpan Balik Jawaban */}
        {submitted && (
          <div
            className={`rounded-lg p-4 space-y-2 ${
              correct ? "bg-green-50 border border-green-200 text-green-900" : "bg-amber-50 border border-amber-200 text-amber-900"
            }`}
          >
            <p className="font-semibold text-base">
              {correct ? "🎉 Jawabanmu Benar!" : "❌ Belum Tepat"}
            </p>
            {correct ? (
              <div className="text-sm text-neutral-800 space-y-1">
                <p className="font-medium text-green-950">Penjelasan:</p>
                <p className="leading-relaxed">{choiceData.explanation}</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-amber-900">
                  Pilihan yang kamu pilih belum tepat. Coba baca kembali contoh dan penjelasannya.
                </p>
                <button
                  type="button"
                  onClick={handleRetry}
                  className="mt-3 rounded-md border border-amber-400 bg-white px-4 py-1.5 text-sm font-medium text-amber-900 hover:bg-amber-100 transition"
                >
                  Coba Lagi
                </button>
              </div>
            )}
          </div>
        )}
      </fieldset>

      {/* Tombol Lihat Kode Solusi */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => setShowSolution((s) => !s)}
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition"
        >
          {showSolution ? "Sembunyikan kode jawabannya" : "Lihat kode jawabannya"}
        </button>
      </div>

      {showSolution && (
        <div className="rounded-lg bg-neutral-900 p-4">
          <p className="text-xs text-neutral-400 mb-2 font-mono">
            {"// Solusi kode asli untuk step ini:"}
          </p>
          <pre className="overflow-x-auto text-sm text-green-300 font-mono">
            {step.solution}
          </pre>
        </div>
      )}
    </div>
  );
}
