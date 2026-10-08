import type {
  JapaneseFlashcardItem,
  PartQuizQuestion,
  PartQuizQuestionType,
} from "@/lib/flashcard-types";

export type QuizQuestionFilter = "all" | PartQuizQuestionType;

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Menghasilkan soal kuis objektif untuk 1 bagian flashcard (10 kata):
 * - 10 soal Tipe 1: Kanji / Kata Jepang -> Pilih Arti Indonesia (Recognition)
 * - 10 soal Tipe 2: Arti Indonesia -> Pilih Kanji / Kata Jepang (Recall)
 * - 10 soal Tipe 3: Diberi Kanji -> Pilih Hiragana (Cara Baca) + Arti (Reading & Meaning)
 * Seluruh soal dan opsi pilihan ganda diacak (shuffled) secara dinamis.
 */
export function generatePartQuizQuestions(
  partCards: JapaneseFlashcardItem[],
  fallbackDeckCards: JapaneseFlashcardItem[] = [],
  filter: QuizQuestionFilter = "all"
): PartQuizQuestion[] {
  if (partCards.length === 0) return [];

  const pool = partCards.length >= 4 ? partCards : [...partCards, ...fallbackDeckCards];
  const type1Questions: PartQuizQuestion[] = [];
  const type2Questions: PartQuizQuestion[] = [];
  const type3Questions: PartQuizQuestion[] = [];

  // 1. Buat soal Tipe 1: Kanji -> Arti
  if (filter === "all" || filter === "kanji-to-meaning") {
    for (const card of partCards) {
      const distractorsPool = pool.filter(
        (c) => c.meaning.toLowerCase() !== card.meaning.toLowerCase() && c.id !== card.id
      );
      const shuffledDistractors = shuffle(distractorsPool);
      const chosenDistractors: string[] = [];
      const seen = new Set<string>([card.meaning]);
      for (const c of shuffledDistractors) {
        if (!seen.has(c.meaning)) {
          seen.add(c.meaning);
          chosenDistractors.push(c.meaning);
          if (chosenDistractors.length === 3) break;
        }
      }

      if (chosenDistractors.length < 3 && fallbackDeckCards.length > 0) {
        const fallbackDistractors = shuffle(
          fallbackDeckCards.filter(
            (c) => c.meaning.toLowerCase() !== card.meaning.toLowerCase() && c.id !== card.id
          )
        );
        for (const c of fallbackDistractors) {
          if (!seen.has(c.meaning)) {
            seen.add(c.meaning);
            chosenDistractors.push(c.meaning);
            if (chosenDistractors.length === 3) break;
          }
        }
      }

      const options = shuffle([card.meaning, ...chosenDistractors]);

      type1Questions.push({
        id: `q-k2m-${card.id}`,
        cardId: card.id,
        type: "kanji-to-meaning",
        prompt: card.term,
        promptSub: `${card.hiragana} (${card.romaji})`,
        options,
        correctAnswer: card.meaning,
        card,
      });
    }
  }

  // 2. Buat soal Tipe 2: Arti -> Kanji
  if (filter === "all" || filter === "meaning-to-kanji") {
    for (const card of partCards) {
      const distractorsPool = pool.filter(
        (c) => c.term !== card.term && c.id !== card.id
      );
      const shuffledDistractors = shuffle(distractorsPool);
      const chosenDistractors: string[] = [];
      const seen = new Set<string>([card.term]);
      for (const c of shuffledDistractors) {
        if (!seen.has(c.term)) {
          seen.add(c.term);
          chosenDistractors.push(c.term);
          if (chosenDistractors.length === 3) break;
        }
      }

      if (chosenDistractors.length < 3 && fallbackDeckCards.length > 0) {
        const fallbackDistractors = shuffle(
          fallbackDeckCards.filter(
            (c) => c.term !== card.term && c.id !== card.id
          )
        );
        for (const c of fallbackDistractors) {
          if (!seen.has(c.term)) {
            seen.add(c.term);
            chosenDistractors.push(c.term);
            if (chosenDistractors.length === 3) break;
          }
        }
      }

      const options = shuffle([card.term, ...chosenDistractors]);

      type2Questions.push({
        id: `q-m2k-${card.id}`,
        cardId: card.id,
        type: "meaning-to-kanji",
        prompt: card.meaning,
        options,
        correctAnswer: card.term,
        card,
      });
    }
  }

  // 3. Buat soal Tipe 3: Dikasih Kanji -> Cari Hiragana + Arti
  if (filter === "all" || filter === "kanji-to-hiragana-meaning") {
    for (const card of partCards) {
      const formatOption = (c: JapaneseFlashcardItem) => `${c.hiragana} · ${c.meaning}`;
      const cardOption = formatOption(card);

      const distractorsPool = pool.filter(
        (c) =>
          c.id !== card.id &&
          c.term !== card.term &&
          c.hiragana !== card.hiragana &&
          c.meaning.toLowerCase() !== card.meaning.toLowerCase()
      );
      const shuffledDistractors = shuffle(distractorsPool);
      const chosenDistractors: string[] = [];
      const seen = new Set<string>([cardOption]);

      for (const c of shuffledDistractors) {
        const opt = formatOption(c);
        if (!seen.has(opt)) {
          seen.add(opt);
          chosenDistractors.push(opt);
          if (chosenDistractors.length === 3) break;
        }
      }

      if (chosenDistractors.length < 3 && fallbackDeckCards.length > 0) {
        const fallbackDistractors = shuffle(
          fallbackDeckCards.filter(
            (c) =>
              c.id !== card.id &&
              c.term !== card.term &&
              c.hiragana !== card.hiragana &&
              c.meaning.toLowerCase() !== card.meaning.toLowerCase()
          )
        );
        for (const c of fallbackDistractors) {
          const opt = formatOption(c);
          if (!seen.has(opt)) {
            seen.add(opt);
            chosenDistractors.push(opt);
            if (chosenDistractors.length === 3) break;
          }
        }
      }

      const options = shuffle([cardOption, ...chosenDistractors]);

      type3Questions.push({
        id: `q-k2hm-${card.id}`,
        cardId: card.id,
        type: "kanji-to-hiragana-meaning",
        prompt: card.term,
        options,
        correctAnswer: cardOption,
        card,
      });
    }
  }

  if (filter === "kanji-to-meaning") return shuffle(type1Questions);
  if (filter === "meaning-to-kanji") return shuffle(type2Questions);
  if (filter === "kanji-to-hiragana-meaning") return shuffle(type3Questions);

  // Default: Acak ketiga tipe (total 30 soal untuk 1 bagian berisi 10 kata)
  return shuffle([...type1Questions, ...type2Questions, ...type3Questions]);
}
