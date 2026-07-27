import type { LearningPath } from "@/lib/types";

export const learningPaths: LearningPath[] = [
  {
    slug: "frontend",
    title: "Frontend Developer",
    description:
      "Bangun antarmuka web modern — jalur dengan lowongan terbanyak untuk junior.",
    icon: "🖥️",
    trackSlugs: [
      "html",
      "css",
      "javascript",
      "git",
      "typescript",
      "react",
      "nextjs",
      "ai-dev",
    ],
  },
  {
    slug: "backend-laravel",
    title: "Backend Developer (Laravel)",
    description:
      "Jalur tercepat ke pekerjaan backend di pasar lokal Indonesia.",
    icon: "🐘",
    trackSlugs: ["html", "css", "javascript", "git", "sql", "laravel", "deployment", "ai-dev"],
  },
  {
    slug: "backend-node",
    title: "Backend Developer (Node)",
    description: "Jalur startup & kerja remote dengan JavaScript di server.",
    icon: "🟢",
    trackSlugs: [
      "html",
      "javascript",
      "git",
      "typescript",
      "sql",
      "node-express",
      "nosql",
      "deployment",
      "ai-dev",
    ],
  },
  {
    slug: "fullstack-js",
    title: "Full-Stack JavaScript",
    description: "Frontend + backend dalam satu bahasa, dari UI sampai database.",
    icon: "🚀",
    trackSlugs: [
      "html",
      "css",
      "javascript",
      "git",
      "typescript",
      "react",
      "nextjs",
      "sql",
      "node-express",
      "deployment",
      "ai-dev",
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    description:
      "Jalur tersingkat (~255 jam): Excel, SQL, Python, sampai data storytelling.",
    icon: "📈",
    trackSlugs: ["spreadsheet", "sql", "python", "data-analysis", "ai-dev"],
  },
];

export function getPath(slug: string): LearningPath | undefined {
  return learningPaths.find((p) => p.slug === slug);
}
