import type { FlashcardDeck, FlashcardPart, JapaneseFlashcardItem } from "@/lib/flashcard-types";
import rawCards from "./japanese-n5-vol-1.json";

export const japaneseCards: JapaneseFlashcardItem[] = rawCards as JapaneseFlashcardItem[];

export const japaneseN5Parts: FlashcardPart[] = Array.from({ length: 10 }, (_, index) => {
  const partNumber = index + 1;
  const startNo = index * 10 + 1;
  const endNo = partNumber * 10;
  const itemsInPart = japaneseCards.filter(
    (card) => card.sourceNo >= startNo && card.sourceNo <= endNo
  );

  return {
    slug: `bagian-${partNumber}`,
    partNumber,
    title: `Bagian ${partNumber}`,
    startNo,
    endNo,
    itemIds: itemsInPart.map((card) => card.id),
  };
});

export const japaneseN5Vol1Deck: FlashcardDeck = {
  id: "japanese-n5-vol-1",
  slug: "jepang",
  title: "Flashcard Jepang",
  subtitle: "JLPT N5 — Vol. 1",
  description:
    "Hafalkan kosakata bahasa Jepang lewat kartu interaktif, lengkap dengan cara baca, arti, dan contoh kalimat.",
  level: "N5",
  volume: 1,
  totalCards: japaneseCards.length,
  totalParts: japaneseN5Parts.length,
  parts: japaneseN5Parts,
  items: japaneseCards,
};

export const flashcardDecks: FlashcardDeck[] = [japaneseN5Vol1Deck];

export function getFlashcardDeck(slug: string): FlashcardDeck | undefined {
  return flashcardDecks.find((deck) => deck.slug === slug);
}

export function getDeckPart(deck: FlashcardDeck, partSlug: string): FlashcardPart | undefined {
  return deck.parts.find((part) => part.slug === partSlug);
}

export function getPartCards(deck: FlashcardDeck, part: FlashcardPart): JapaneseFlashcardItem[] {
  const idMap = new Map(deck.items.map((item) => [item.id, item]));
  return part.itemIds
    .map((id) => idMap.get(id))
    .filter((item): item is JapaneseFlashcardItem => Boolean(item));
}

export function getCardById(cardId: string): JapaneseFlashcardItem | undefined {
  return japaneseCards.find((card) => card.id === cardId);
}
