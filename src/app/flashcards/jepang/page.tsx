import type { Metadata } from "next";
import { JapaneseDeckOverview } from "./JapaneseDeckOverview";

export const metadata: Metadata = {
  title: "Flashcard Jepang — JLPT N5 Vol. 1 | BiLearn",
  description:
    "Hafalkan 100 kosakata bahasa Jepang JLPT N5 Vol. 1 lewat kartu interaktif, lengkap dengan cara baca, arti, dan contoh kalimat.",
};

export default function FlashcardsJepangPage() {
  return <JapaneseDeckOverview />;
}
