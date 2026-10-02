import type { Metadata } from "next";
import { EnglishHubView } from "./EnglishHubView";

export const metadata: Metadata = {
  title: "Belajar Bahasa Inggris — Komunikasi & Business English | BiLearn",
  description:
    "Pelajari bahasa Inggris terapan untuk karier dan komunikasi bisnis profesional di BiLearn.",
};

export default function EnglishPage() {
  return <EnglishHubView />;
}
