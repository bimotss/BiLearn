"use client";

import { useCallback, useSyncExternalStore } from "react";

export type FlashcardCardStatus = "unstudied" | "not-memorized" | "memorized";

export interface FlashcardProgressData {
  version: 1;
  cards: Record<string, "not-memorized" | "memorized">;
}

const STORAGE_KEY = "bilearn-flashcards-v1";
const EMPTY_DATA: FlashcardProgressData = {
  version: 1,
  cards: {},
};

let cacheRaw: string | null = null;
let cache: FlashcardProgressData = EMPTY_DATA;
let memoryWarning: string | null = null;

function sanitizeData(parsed: unknown): FlashcardProgressData {
  if (!parsed || typeof parsed !== "object") {
    return { version: 1, cards: {} };
  }

  const obj = parsed as Record<string, unknown>;
  const rawCards = obj.cards && typeof obj.cards === "object" ? (obj.cards as Record<string, unknown>) : {};
  const cleanCards: Record<string, "not-memorized" | "memorized"> = {};

  for (const [key, val] of Object.entries(rawCards)) {
    if (typeof key === "string" && (val === "memorized" || val === "not-memorized")) {
      cleanCards[key] = val;
    }
  }

  return {
    version: 1,
    cards: cleanCards,
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
    } else if (Object.keys(cache.cards).length === 0) {
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

  return {
    ready,
    data,
    storageWarning: memoryWarning,
    getStatus,
    markCard,
    getPartMemorizedCount,
    getTotalMemorizedCount,
  };
}
