import type { Track } from "@/lib/types";
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
].sort((a, b) => a.order - b.order);

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

/** Semua item (step+kuis) sebuah track, urut */
export function getTrackItems(track: Track) {
  return track.modules.flatMap((m) => m.items);
}
