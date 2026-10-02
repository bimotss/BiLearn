import type { Metadata } from "next";
import { KanaStudyView } from "@/components/japanese/KanaStudyView";
import {
  hiraganaGojuuon,
  hiraganaConfusionPairs,
  hiraganaQuizQuestions,
} from "@/data/japanese/kana-data";

export const metadata: Metadata = {
  title: "Belajar Huruf Hiragana — Modul & Latihan Interaktif | BiLearn",
  description:
    "Pelajari 46 huruf dasar Hiragana, aturan urutan goresan (stroke order), tabel romaji, dan latihan kuis interaktif di BiLearn.",
};

export default function HiraganaPage() {
  return (
    <KanaStudyView
      title="Hiragana (ひらがな)"
      kanaType="hiragana"
      subtitle="Huruf Asli Jepang"
      description="Pondasi utama bahasa Jepang untuk menulis kata asli, partikel tata bahasa, dan akhiran kata kerja. Pelajari bagan huruf, kaidah penulisan goresan, lalu uji ingatanmu lewat kuis interaktif."
      items={hiraganaGojuuon}
      confusionPairs={hiraganaConfusionPairs}
      quizQuestions={hiraganaQuizQuestions}
      accentColor="emerald"
    />
  );
}
