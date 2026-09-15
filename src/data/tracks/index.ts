import type { ModeBelajar, ModuleItem, Track } from "@/lib/types";
import { htmlTrack } from "./html";
import { cssTrack } from "./css";
import { javascriptTrack } from "./javascript";
import { gitTrack } from "./git";
import { typescriptTrack } from "./typescript";
import { reactTrack } from "./react";
import { nextjsTrack } from "./nextjs";
import { laravelTrack } from "./laravel";
import { nodeExpressTrack } from "./node-express";
import { sqlTrack } from "./sql";
import { nosqlTrack } from "./nosql";
import { deploymentTrack } from "./deployment";
import { aiDevTrack } from "./ai-dev";
import { spreadsheetTrack } from "./spreadsheet";
import { pythonTrack } from "./python";
import { dataAnalysisTrack } from "./data-analysis";
import { businessEnglishTrack } from "./business-english";

export const tracks: Track[] = [
  htmlTrack,
  cssTrack,
  javascriptTrack,
  gitTrack,
  typescriptTrack,
  reactTrack,
  nextjsTrack,
  laravelTrack,
  nodeExpressTrack,
  sqlTrack,
  nosqlTrack,
  deploymentTrack,
  aiDevTrack,
  spreadsheetTrack,
  pythonTrack,
  dataAnalysisTrack,
  businessEnglishTrack,
].sort((a, b) => a.order - b.order);

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

/** Semua item (step+kuis) sebuah track, urut */
export function getTrackItems(track: Track) {
  return track.modules.flatMap((m) => m.items);
}

/**
 * Apakah satu item bisa dikerjakan di mode tertentu.
 *
 * Materi dan kuis tidak terpengaruh mode — isinya sama persis di dua-duanya.
 * Step hanya masuk mode "pilihan-ganda" kalau varian soalnya sudah ditulis;
 * step yang belum punya varian tetap DITAMPILKAN di daftar (aturan: jangan
 * menyembunyikan step), hanya saja tidak ikut dihitung sebagai target mode itu.
 */
export function itemTersediaDiMode(
  item: ModuleItem,
  mode: ModeBelajar
): boolean {
  if (item.kind !== "step") return true;
  if (mode === "koding") return true;
  return Boolean(item.susunKode);
}

/** Item yang menjadi target progress untuk sebuah mode. */
export function getTrackItemsForMode(track: Track, mode: ModeBelajar) {
  return getTrackItems(track).filter((i) => itemTersediaDiMode(i, mode));
}

/** Item yang penyelesaiannya berlaku di KEDUA dunia (materi & kuis). */
export function itemLintasMode(item: ModuleItem): boolean {
  return item.kind !== "step";
}

/**
 * Peta kompatibilitas untuk ID item lama yang telah dikonsolidasikan.
 * Memastikan URL lama tidak 404 dan progres pengguna lama tetap terjaga.
 */
export const LEGACY_ITEM_ALIASES: Record<
  string,
  { targetId: string; slug: string }
> = {
  "beng-1-k2": { targetId: "beng-1-k1", slug: "business-english" },
  "beng-2-k2": { targetId: "beng-2-k1", slug: "business-english" },
  "beng-3-k2": { targetId: "beng-3-k1", slug: "business-english" },
  "beng-4-k2": { targetId: "beng-4-k1", slug: "business-english" },
  "beng-5-k2": { targetId: "beng-5-k1", slug: "business-english" },
  "beng-6-k2": { targetId: "beng-6-k1", slug: "business-english" },
  "beng-7-k2": { targetId: "beng-7-k1", slug: "business-english" },
  "beng-8-k2": { targetId: "beng-8-k1", slug: "business-english" },
};

export function resolveItemAlias(stepId: string): string {
  return LEGACY_ITEM_ALIASES[stepId]?.targetId ?? stepId;
}
