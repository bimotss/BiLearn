"use client";

import { useState } from "react";
import type { Quiz, QuizQuestion } from "@/lib/types";

interface Props {
  quiz: Quiz;
  onPassed: () => void;
}

/**
 * Kuis dengan kunci jawaban: setelah user menjawab, tampilkan benar/salah
 * + penjelasan KENAPA. Salah boleh dicoba lagi tanpa penalti.
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

  return (
    <div className="space-y-8">
      <p className="text-neutral-600">
        Jawab semua pertanyaan. Setelah menjawab, kunci jawaban dan
        penjelasannya langsung ditampilkan — salah pun tidak apa-apa, bisa
        dicoba lagi.
      </p>
      {quiz.questions.map((q, i) => (
        <QuestionCard
          key={q.id}
          index={i}
          question={q}
          onResult={(correct) => handleResult(q.id, correct)}
        />
      ))}
      <div
        className={`rounded-lg p-4 font-medium ${
          allCorrect ? "bg-green-100 text-green-900" : "bg-neutral-100 text-neutral-600"
        }`}
      >
        {allCorrect
          ? "🎉 Semua benar! Kuis selesai."
          : `Benar ${correctCount} dari ${total} pertanyaan.`}
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

  return (
    <div className="rounded-xl border border-neutral-200 p-5">
      <p className="font-medium text-neutral-900">
        {index + 1}. {question.question}
      </p>
      {question.code && (
        <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100">
          {question.code}
        </pre>
      )}

      {question.type === "pilihan-ganda" ? (
        <div className="mt-4 space-y-2">
          {question.choices.map((c, i) => (
            <button
              key={i}
              disabled={submitted && correct}
              onClick={() => submitChoice(i)}
              className={`block w-full rounded-lg border px-4 py-2.5 text-left transition ${
                submitted && i === question.answerIndex
                  ? "border-green-500 bg-green-50"
                  : submitted && i === selected
                    ? "border-red-400 bg-red-50"
                    : "border-neutral-200 hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitText()}
            disabled={submitted && correct}
            placeholder="Ketik jawabanmu…"
            className="flex-1 rounded-lg border border-neutral-300 px-4 py-2.5 outline-none focus:border-blue-500"
            aria-label="Jawaban isian"
          />
          <button
            onClick={submitText}
            disabled={submitted && correct}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Jawab
          </button>
        </div>
      )}

      {/* Kunci jawaban + penjelasan — selalu tampil setelah menjawab */}
      {submitted && (
        <div
          className={`mt-4 rounded-lg p-4 ${
            correct ? "bg-green-50" : "bg-amber-50"
          }`}
        >
          <p className={`font-medium ${correct ? "text-green-900" : "text-amber-900"}`}>
            {correct ? "✅ Benar!" : "❌ Belum tepat."}
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            <span className="font-medium">Kunci jawaban: </span>
            {question.type === "pilihan-ganda"
              ? question.choices[question.answerIndex]
              : question.acceptedAnswers[0]}
          </p>
          <p className="mt-1 text-sm text-neutral-700">
            <span className="font-medium">Penjelasan: </span>
            {question.explanation}
          </p>
          {!correct && (
            <button
              onClick={retry}
              className="mt-3 rounded-md border border-amber-300 px-4 py-1.5 text-sm text-amber-900 hover:bg-amber-100"
            >
              Coba lagi
            </button>
          )}
        </div>
      )}
    </div>
  );
}
