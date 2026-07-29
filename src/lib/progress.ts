"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { ModeBelajar, Progress } from "./types";
import {
  getTrack,
  getTrackItems,
  getTrackItemsForMode,
  itemLintasMode,
} from "@/data/tracks";

const KEY = "bilearn-progress-v1";
const empty: Progress = { completed: {} };

/**
 * Mode belajar = dua dunia yang terpisah penuh.
 *
 * Progress mode koding dan mode pilihan ganda disimpan di ember yang berbeda,
 * dan tidak pernah saling menambah. Menyelesaikan step lewat pilihan ganda
 * TIDAK membuktikan user bisa mengetik kodenya, jadi menggabungkan keduanya
 * jadi satu angka akan membuat user salah menilai dirinya sendiri.
 *
 * Materi dan kuis adalah pengecualian: isinya sama persis di dua mode, jadi
 * sekali selesai ia dicatat di kedua dunia.
 */

// ---- store kecil di atas localStorage (aman untuk SSR/hydration) ----

let cacheRaw: string | null = null;
let cache: Progress = empty;

/**
 * Memisahkan progress lama (satu ember + label `doneMode`) menjadi dua dunia.
 *
 * Murni: tidak menyentuh localStorage. Hasilnya baru ikut tersimpan saat ada
 * penulisan berikutnya, sehingga tidak ada efek samping saat render.
 */
function pisahkanDuaDunia(p: Progress): Progress {
  if (p.duaDuniaSiap) return p;

  const koding: Record<string, string[]> = {};
  const pilihanGanda: Record<string, string[]> = {};

  // salin dulu ember pilihan ganda yang mungkin sudah ada
  for (const [slug, ids] of Object.entries(p.completedPilihanGanda ?? {})) {
    pilihanGanda[slug] = [...ids];
  }

  for (const [slug, ids] of Object.entries(p.completed ?? {})) {
    const label = p.doneMode?.[slug] ?? {};
    const track = getTrack(slug);
    const jenis = new Map(
      (track ? getTrackItems(track) : []).map((i) => [i.id, i])
    );

    const sisaKoding: string[] = [];
    const tambahPg = (id: string) => {
      const daftar = pilihanGanda[slug] ?? [];
      if (!daftar.includes(id)) daftar.push(id);
      pilihanGanda[slug] = daftar;
    };

    for (const id of ids) {
      const item = jenis.get(id);

      // Materi & kuis berlaku di dua dunia — sekali selesai, selesai di mana pun.
      if (item && itemLintasMode(item)) {
        sisaKoding.push(id);
        tambahPg(id);
        continue;
      }

      // Step: ikut label lamanya. Tanpa label = sebelum fitur ini ada, dan
      // saat itu satu-satunya cara menyelesaikan step adalah mengetik kode.
      if (label[id] === "pilihan-ganda") tambahPg(id);
      else sisaKoding.push(id);
    }

    koding[slug] = sisaKoding;
  }

  return {
    ...p,
    completed: koding,
    completedPilihanGanda: pilihanGanda,
    duaDuniaSiap: true,
  };
}

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
      cache = pisahkanDuaDunia(raw ? (JSON.parse(raw) as Progress) : empty);
    } catch {
      cache = pisahkanDuaDunia(empty);
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

/** Ember penyimpanan untuk sebuah mode. */
function emberDari(p: Progress, mode: ModeBelajar): Record<string, string[]> {
  return mode === "koding" ? p.completed ?? {} : p.completedPilihanGanda ?? {};
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

  const mode: ModeBelajar = progress.mode ?? "koding";

  /**
   * Menandai satu item selesai.
   *
   * `mode` opsional supaya pemanggilan lama tetap jalan (default "koding").
   * Pakai "keduanya" untuk materi & kuis yang isinya tidak berbeda antar mode.
   */
  const markDone = useCallback(
    (
      trackSlug: string,
      itemId: string,
      modeSelesai: ModeBelajar | "keduanya" = "koding"
    ) => {
      const current = getSnapshot();
      const target: ModeBelajar[] =
        modeSelesai === "keduanya" ? ["koding", "pilihan-ganda"] : [modeSelesai];

      let berubah = false;
      const kodingBaru = { ...(current.completed ?? {}) };
      const pgBaru = { ...(current.completedPilihanGanda ?? {}) };

      for (const m of target) {
        const ember = m === "koding" ? kodingBaru : pgBaru;
        const daftar = ember[trackSlug] ?? [];
        if (daftar.includes(itemId)) continue;
        ember[trackSlug] = [...daftar, itemId];
        berubah = true;
      }

      if (!berubah) return;

      write({
        ...current,
        completed: kodingBaru,
        completedPilihanGanda: pgBaru,
      });
    },
    []
  );

  /** Menyimpan pilihan mode sekaligus menutup layar pemilihan. */
  const setMode = useCallback((modeBaru: ModeBelajar) => {
    write({ ...getSnapshot(), mode: modeBaru, modeDipilih: true });
  }, []);

  /** Melewati layar pemilihan: tetap di mode koding, dan jangan tanya lagi. */
  const lewatiPemilihanMode = useCallback(() => {
    const current = getSnapshot();
    write({ ...current, mode: current.mode ?? "koding", modeDipilih: true });
  }, []);

  const setActivePath = useCallback((pathSlug: string | undefined) => {
    write({ ...getSnapshot(), activePath: pathSlug });
  }, []);

  /** Selesai di dunia yang sedang aktif. */
  const isDone = useCallback(
    (trackSlug: string, itemId: string) =>
      (emberDari(progress, mode)[trackSlug] ?? []).includes(itemId),
    [progress, mode]
  );

  /** Selesai di dunia tertentu, tanpa peduli mode yang sedang aktif. */
  const isDoneDi = useCallback(
    (trackSlug: string, itemId: string, modeDicek: ModeBelajar) =>
      (emberDari(progress, modeDicek)[trackSlug] ?? []).includes(itemId),
    [progress]
  );

  /**
   * Jumlah item selesai di dunia aktif, dihitung hanya dari item yang memang
   * menjadi target mode itu. Tanpa penyaringan ini, varian pilihan ganda yang
   * suatu saat dicabut akan meninggalkan angka yang tidak bisa dijelaskan.
   */
  const doneCount = useCallback(
    (trackSlug: string, modeDicek: ModeBelajar = mode) => {
      const track = getTrack(trackSlug);
      if (!track) return 0;
      const target = new Set(
        getTrackItemsForMode(track, modeDicek).map((i) => i.id)
      );
      return (emberDari(progress, modeDicek)[trackSlug] ?? []).filter((id) =>
        target.has(id)
      ).length;
    },
    [progress, mode]
  );

  /** Jumlah item yang menjadi target di dunia aktif. */
  const totalCount = useCallback(
    (trackSlug: string, modeDicek: ModeBelajar = mode) => {
      const track = getTrack(trackSlug);
      if (!track) return 0;
      return getTrackItemsForMode(track, modeDicek).length;
    },
    [mode]
  );

  return {
    progress,
    ready,
    mode,
    modeDipilih: Boolean(progress.modeDipilih),
    setMode,
    lewatiPemilihanMode,
    markDone,
    setActivePath,
    isDone,
    isDoneDi,
    doneCount,
    totalCount,
  };
}
