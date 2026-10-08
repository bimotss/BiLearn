"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { PartQuizRecord } from "@/lib/flashcard-types";

export type FlashcardCardStatus = "unstudied" | "not-memorized" | "memorized";

export interface FlashcardProgressData {
  version: 1;
  cards: Record<string, "not-memorized" | "memorized">;
  quizScores?: Record<string, PartQuizRecord>;
}

const STORAGE_KEY = "bilearn-flashcards-v1";
const EMPTY_DATA: FlashcardProgressData = {
  version: 1,
  cards: {},
  quizScores: {},
};

let cacheRaw: string | null = null;
let cache: FlashcardProgressData = EMPTY_DATA;
let memoryWarning: string | null = null;

function sanitizeData(parsed: unknown): FlashcardProgressData {
  if (!parsed || typeof parsed !== "object") {
    return { version: 1, cards: {}, quizScores: {} };
  }

  const obj = parsed as Record<string, unknown>;
  const rawCards = obj.cards && typeof obj.cards === "object" ? (obj.cards as Record<string, unknown>) : {};
  const cleanCards: Record<string, "not-memorized" | "memorized"> = {};

  for (const [key, val] of Object.entries(rawCards)) {
    if (typeof key === "string" && (val === "memorized" || val === "not-memorized")) {
      cleanCards[key] = val;
    }
  }

  const rawQuiz =
    obj.quizScores && typeof obj.quizScores === "object"
      ? (obj.quizScores as Record<string, unknown>)
      : {};
  const cleanQuiz: Record<string, PartQuizRecord> = {};

  for (const [slug, val] of Object.entries(rawQuiz)) {
    if (typeof slug === "string" && val && typeof val === "object") {
      const q = val as Record<string, unknown>;
      if (typeof q.bestScore === "number" && typeof q.totalQuestions === "number") {
        cleanQuiz[slug] = {
          bestScore: q.bestScore,
          totalQuestions: q.totalQuestions,
          lastScore: typeof q.lastScore === "number" ? q.lastScore : q.bestScore,
          updatedAt: typeof q.updatedAt === "string" ? q.updatedAt : new Date().toISOString(),
        };
      }
    }
  }

  return {
    version: 1,
    cards: cleanCards,
    quizScores: cleanQuiz,
  };
}

function getSnapshot(): FlashcardProgressData {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw !== cacheRaw) {
    cacheRaw = raw;
    if (raw) {
      try {
        cache = sanitizeData(JSON.parse(raw));
      } catch {
        cache = EMPTY_DATA;
      }
    } else {
      cache = EMPTY_DATA;
    }
  }

  return cache;
}

function getServerSnapshot(): FlashcardProgressData {
  return EMPTY_DATA;
}

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) {
      cb();
    }
  };

  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function notifyListeners() {
  listeners.forEach((l) => l());
}

function write(next: FlashcardProgressData) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    cacheRaw = JSON.stringify(next);
    memoryWarning = null;
  } catch {
    // Storage gagal (penuh atau diblokir)
    memoryWarning = "Penyimpanan browser tidak tersedia atau penuh. Progress sesi aktif di memori, tetapi tidak akan tersimpan setelah halaman ditutup.";
  }
  notifyListeners();
}

export function useFlashcardProgress() {
  const data = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const getStatus = useCallback(
    (cardId: string): FlashcardCardStatus => {
      const val = data.cards[cardId];
      if (val === "memorized") return "memorized";
      if (val === "not-memorized") return "not-memorized";
      return "unstudied";
    },
    [data]
  );

  const markCard = useCallback(
    (cardId: string, status: "memorized" | "not-memorized") => {
      const current = getSnapshot();
      if (current.cards[cardId] === status) return;

      const next: FlashcardProgressData = {
        version: 1,
        cards: {
          ...current.cards,
          [cardId]: status,
        },
      };

      write(next);
    },
    []
  );

  const getPartMemorizedCount = useCallback(
    (itemIds: string[]): number => {
      let count = 0;
      for (const id of itemIds) {
        if (data.cards[id] === "memorized") {
          count++;
        }
      }
      return count;
    },
    [data]
  );

  const getTotalMemorizedCount = useCallback(
    (allItemIds: string[]): number => {
      let count = 0;
      for (const id of allItemIds) {
        if (data.cards[id] === "memorized") {
          count++;
        }
      }
      return count;
    },
    [data]
  );

  const getPartQuizScore = useCallback(
    (partSlug: string): PartQuizRecord | undefined => {
      return data.quizScores?.[partSlug];
    },
    [data]
  );

  const savePartQuizScore = useCallback(
    (partSlug: string, score: number, total: number) => {
      const current = getSnapshot();
      const existing = current.quizScores?.[partSlug];
      const bestScore = existing ? Math.max(existing.bestScore, score) : score;
      const next: FlashcardProgressData = {
        ...current,
        quizScores: {
          ...current.quizScores,
          [partSlug]: {
            bestScore,
            totalQuestions: total,
            lastScore: score,
            updatedAt: new Date().toISOString(),
          },
        },
      };
      write(next);
    },
    []
  );

  return {
    ready,
    data,
    storageWarning: memoryWarning,
    getStatus,
    markCard,
    getPartMemorizedCount,
    getTotalMemorizedCount,
    getPartQuizScore,
    savePartQuizScore,
  };
}

