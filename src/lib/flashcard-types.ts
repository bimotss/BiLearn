export interface JapaneseFlashcardItem {
  id: string;
  sourceNo: number;
  term: string;
  hiragana: string;
  katakana: string;
  romaji: string;
  meaning: string;
  exampleJapanese: string;
  exampleKana: string;
  exampleRomaji: string;
  exampleMeaning: string;
}

export interface FlashcardPart {
  slug: string;
  partNumber: number;
  title: string;
  startNo: number;
  endNo: number;
  itemIds: string[];
}

export interface FlashcardDeck {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: "N5";
  volume: 1;
  totalCards: number;
  totalParts: number;
  parts: FlashcardPart[];
  items: JapaneseFlashcardItem[];
}

export type PartQuizQuestionType =
  | "kanji-to-meaning"
  | "meaning-to-kanji"
  | "kanji-to-hiragana-meaning";

export interface PartQuizQuestion {
  id: string;
  cardId: string;
  type: PartQuizQuestionType;
  prompt: string;
  promptSub?: string;
  options: string[];
  correctAnswer: string;
  card: JapaneseFlashcardItem;
}

export interface PartQuizRecord {
  bestScore: number;
  totalQuestions: number;
  lastScore: number;
  updatedAt: string;
}

