"use client";

import { useState } from "react";
import type { Quiz, QuizQuestion } from "@/lib/types";

interface Props {
  quiz: Quiz;
  onPassed: () => void;
}

/**
 * Kuis dengan kunci jawaban dan penjelasan mendalam: setelah user menjawab,
 * sistem memberikan feedback benar/salah secara langsung beserta penalaran teknis.
 */
export default function QuizView({ quiz, onPassed }: Props) {
  const [answered, setAnswered] = useState<Record<string, boolean>>({});
  const total = quiz.questions.length;
  const correctCount = Object.values(answered).filter(Boolean).length;
  const allCorrect = correctCount === total;

  function handleResult(qid: string, correct: boolean) {
    const next = { ...answered, [qid]: correct };
    setAnswered(next);
    if (Object.values(next).filter(Boolean).length === total) {
      onPassed();
    }
  }

  const pct = Math.round((correctCount / total) * 100);

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xs">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Kuis Pemahaman Modul
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Jawab semua pertanyaan untuk menguji daya serap konsep. Kunci jawaban dan penjelasan langsung terlihat setelah menjawab.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Skor Kuis</div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {correctCount} / {total}
            </div>
          </div>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Daftar Pertanyaan */}
      <div className="space-y-6">
        {quiz.questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            index={i}
            question={q}
            onResult={(correct) => handleResult(q.id, correct)}
          />
        ))}
      </div>

      {/* Completion Banner */}
      <div
        className={`rounded-2xl border p-5 font-semibold transition-all ${
          allCorrect
            ? "border-emerald-400/60 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 shadow-lg shadow-emerald-500/10 text-center text-base"
            : "border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 text-sm"
        }`}
      >
        {allCorrect
          ? "🎉 Luar biasa! Semua pertanyaan kuis berhasil dijawab dengan benar."
          : `Telah dijawab benar ${correctCount} dari ${total} pertanyaan.`}
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  onResult,
}: {
  question: QuizQuestion;
  index: number;
  onResult: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  function submitChoice(i: number) {
    if (question.type !== "pilihan-ganda") return;
    setSelected(i);
    const ok = i === question.answerIndex;
    setCorrect(ok);
    setSubmitted(true);
    onResult(ok);
  }

  function submitText() {
    if (question.type === "pilihan-ganda" || !text.trim()) return;
    const ok = question.acceptedAnswers.some(
      (a) => a.toLowerCase() === text.trim().toLowerCase()
    );
    setCorrect(ok);
    setSubmitted(true);
    onResult(ok);
  }

  function retry() {
    setSubmitted(false);
    setSelected(null);
    setText("");
  }

  const optionLetters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm space-y-4 shadow-xs">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.06] text-xs font-mono font-bold text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {question.question}
        </p>
      </div>

      {question.code && (
        <pre className="overflow-x-auto rounded-xl border border-slate-300 dark:border-white/[0.06] bg-slate-950 dark:bg-[#090d16] p-4 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
          {question.code}
        </pre>
      )}

      {question.type === "pilihan-ganda" ? (
        <div className="space-y-2.5 pt-2">
          {question.choices.map((c, i) => {
            const isTargetAnswer = submitted && i === question.answerIndex;
            const isUserWrong = submitted && i === selected && !correct;

            return (
              <button
                key={i}
                type="button"
                disabled={submitted && correct}
                onClick={() => submitChoice(i)}
                className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                  isTargetAnswer
                    ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/50"
                    : isUserWrong
                    ? "border-rose-500/60 bg-rose-500/15 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500/50"
                    : "border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-amber-400/50 hover:bg-amber-50/50 dark:hover:bg-slate-800/80 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold transition-colors ${
                    isTargetAnswer
                      ? "bg-emerald-500 text-slate-950"
                      : isUserWrong
                      ? "bg-rose-500 text-white"
                      : "bg-slate-200 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 group-hover:bg-amber-500/20 group-hover:text-amber-700 dark:group-hover:text-amber-300"
                  }`}
                >
                  {optionLetters[i] ?? i + 1}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed">{c}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex gap-2 pt-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitText()}
            disabled={submitted && correct}
            placeholder="Ketik jawabanmu..."
            className="flex-1 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#090d16] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-amber-500"
            aria-label="Jawaban isian"
          />
          <button
            type="button"
            onClick={submitText}
            disabled={submitted && correct}
            className="cursor-pointer rounded-xl bg-amber-500 px-5 py-2.5 font-bold text-slate-950 transition hover:bg-amber-400 disabled:opacity-50"
          >
            Jawab
          </button>
        </div>
      )}

      {/* Kunci Jawaban & Penjelasan Mendalam */}
      {submitted && (
        <div
          className={`mt-4 space-y-2 rounded-xl border p-4.5 text-xs sm:text-sm ${
            correct
              ? "border-emerald-400/60 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200"
              : "border-amber-400/60 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm sm:text-base">
              {correct ? "✅ Jawabanmu Tepat!" : "❌ Belum Tepat"}
            </p>
            {!correct && (
              <button
                type="button"
                onClick={retry}
                className="cursor-pointer rounded-lg border border-amber-400/60 bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-900 dark:text-amber-200 transition hover:bg-amber-500/30"
              >
                Coba Lagi
              </button>
            )}
          </div>

          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">Kunci Jawaban: </span>
            {question.type === "pilihan-ganda"
              ? question.choices[question.answerIndex]
              : question.acceptedAnswers[0]}
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">Penjelasan: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
