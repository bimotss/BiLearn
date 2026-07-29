"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Progress } from "./types";

const KEY = "bilearn-progress-v1";
const empty: Progress = { completed: {} };

// ---- store kecil di atas localStorage (aman untuk SSR/hydration) ----

let cacheRaw: string | null = null;
let cache: Progress = empty;

function getSnapshot(): Progress {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    raw = null;
  }
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      cache = raw ? (JSON.parse(raw) as Progress) : empty;
    } catch {
      cache = empty;
    }
  }
  return cache;
}

function getServerSnapshot(): Progress {
  return empty;
}

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function write(next: Progress) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage penuh/dinonaktifkan — progress hanya tidak tersimpan
  }
  listeners.forEach((l) => l());
}

// ---- hook publik ----

/** Progress belajar berbasis localStorage (MVP tanpa login). */
export function useProgress() {
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false saat render server/hydration pertama, true setelah di client
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const markDone = useCallback(
    (
      trackSlug: string,
      itemId: string,
      mode?: "koding" | "pilihan-ganda"
    ) => {
      const current = getSnapshot();
      const done = new Set(current.completed[trackSlug] ?? []);
      const usedMode = mode ?? "koding";
      const currentDoneMode = current.doneMode ?? {};
      const trackDoneMode = currentDoneMode[trackSlug] ?? {};

      if (done.has(itemId) && trackDoneMode[itemId] === usedMode) return;

      done.add(itemId);
      write({
        ...current,
        completed: { ...current.completed, [trackSlug]: [...done] },
        doneMode: {
          ...currentDoneMode,
          [trackSlug]: {
            ...trackDoneMode,
            [itemId]: usedMode,
          },
        },
      });
    },
    []
  );

  const setMode = useCallback((mode: "koding" | "pilihan-ganda") => {
    write({ ...getSnapshot(), mode });
  }, []);

  const setActivePath = useCallback((pathSlug: string | undefined) => {
    write({ ...getSnapshot(), activePath: pathSlug });
  }, []);

  const isDone = useCallback(
    (trackSlug: string, itemId: string) =>
      (progress.completed[trackSlug] ?? []).includes(itemId),
    [progress]
  );

  const doneCount = useCallback(
    (trackSlug: string) => (progress.completed[trackSlug] ?? []).length,
    [progress]
  );

  const mode = progress.mode ?? "koding";
  const doneMode = progress.doneMode ?? {};

  return {
    progress,
    ready,
    mode,
    doneMode,
    setMode,
    markDone,
    setActivePath,
    isDone,
    doneCount,
  };
}
