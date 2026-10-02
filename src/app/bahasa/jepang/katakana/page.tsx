import type { Metadata } from "next";
import { KanaStudyView } from "@/components/japanese/KanaStudyView";
import {
  katakanaGojuuon,
  katakanaConfusionPairs,
  katakanaQuizQuestions,
} from "@/data/japanese/kana-data";

export const metadata: Metadata = {
  title: "Belajar Huruf Katakana — Modul & Latihan Interaktif | BiLearn",
  description:
    "Pelajari 46 karakter Katakana, kata serapan asing (gairaigo), tips membedakan huruf mirip (シ vs ツ, ソ vs ン), dan latihan kuis di BiLearn.",
};

export default function KatakanaPage() {
  return (
    <KanaStudyView
      title="Katakana (カタカナ)"
      kanaType="katakana"
      subtitle="Kata Serapan & Asing"
      description="Sistem huruf bersudut tegas yang digunakan untuk menulis kata serapan dari bahasa asing (gairaigo), nama luar negeri, dan penekanan khusus. Kuasai bentuk huruf, aturan garis lurus, dan jebakan huruf mirip."
      items={katakanaGojuuon}
      confusionPairs={katakanaConfusionPairs}
      quizQuestions={katakanaQuizQuestions}
      accentColor="blue"
    />
  );
}
