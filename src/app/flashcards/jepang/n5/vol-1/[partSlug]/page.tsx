import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  japaneseN5Parts,
  japaneseN5Vol1Deck,
  getDeckPart,
  getPartCards,
} from "@/data/flashcards";
import { FlashcardSessionView } from "./FlashcardSessionView";

export function generateStaticParams() {
  return japaneseN5Parts.map((part) => ({
    partSlug: part.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ partSlug: string }>;
}): Promise<Metadata> {
  const { partSlug } = await params;
  const part = getDeckPart(japaneseN5Vol1Deck, partSlug);
  if (!part) {
    return {
      title: "Bagian Tidak Ditemukan | BiLearn",
    };
  }

  return {
    title: `${part.title} — Flashcard Jepang JLPT N5 Vol. 1 | BiLearn`,
    description: `Latihan flashcard kosakata bahasa Jepang ${part.title} (kosakata nomor ${part.startNo}–${part.endNo}) JLPT N5 Vol. 1.`,
  };
}

export default async function FlashcardPartPage({
  params,
}: {
  params: Promise<{ partSlug: string }>;
}) {
  const { partSlug } = await params;
  const part = getDeckPart(japaneseN5Vol1Deck, partSlug);

  if (!part) {
    notFound();
  }

  const cards = getPartCards(japaneseN5Vol1Deck, part);

  return <FlashcardSessionView part={part} initialCards={cards} />;
}
