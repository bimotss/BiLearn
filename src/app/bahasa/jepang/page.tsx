import type { Metadata } from "next";
import { JapaneseHubView } from "./JapaneseHubView";

export const metadata: Metadata = {
  title: "Belajar Bahasa Jepang — Hiragana, Katakana, dan Kosakata N5 | BiLearn",
  description:
    "Mulai belajar bahasa Jepang dari nol di BiLearn: kuasai huruf Hiragana, Katakana, aturan penulisan goresan, dan 100 kosakata JLPT N5 lewat flashcard interaktif.",
};

export default function JapanesePage() {
  return <JapaneseHubView />;
}
