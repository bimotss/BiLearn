import type { Track } from "@/lib/types";

export const typescriptTrack: Track = {
  slug: "typescript",
  title: "TypeScript",
  description:
    "Requirement standar lowongan modern. Dari tipe dasar sampai generics.",
  hours: 40,
  recommendedPrereqs: ["javascript"],
  color: "bg-sky-600",
  icon: "🔷",
  order: 5,
  modules: [
    {
      slug: "tipe-dasar",
      title: "Tipe Dasar & Inference",
      description:
        "TS = JS + anotasi tipe. Mulai dari yang paling sering dipakai sehari-hari.",
      topics: [
        "Kenapa TypeScript ada: bug yang tertangkap sebelum jalan",
        "Anotasi dasar: string, number, boolean, array",
        "Type inference: kapan TIDAK perlu menulis tipe",
        "any vs unknown — dan kenapa any adalah menyerah",
        "null, undefined, dan strictNullChecks",
        "Function: tipe parameter & return",
        "Setup: tsconfig penting (strict: true selalu)",
      ],
      items: [],
    },
    {
      slug: "object-types",
      title: "Object Types & Interface",
      description:
        "Memodelkan data aplikasi nyata: user, produk, respons API.",
      topics: [
        "type alias vs interface (dan jawaban pragmatisnya)",
        "Optional property (?) & readonly",
        "Nested object & array of object",
        "Index signature untuk object dinamis",
        "Extending interface & intersection (&)",
        "Memodelkan respons API nyata dari dokumentasi",
      ],
      items: [],
    },
    {
      slug: "union-narrowing",
      title: "Union, Literal & Narrowing",
      description:
        "Bagian paling 'TypeScript' dari TypeScript — memodelkan kemungkinan.",
      topics: [
        "Union type (A | B) & literal type ('loading' | 'success')",
        "Narrowing: typeof, in, instanceof",
        "Discriminated union — pola state yang mustahil salah",
        "Type guard function (is)",
        "enum vs union literal (dan kenapa banyak tim pilih union)",
        "as const & satisfies",
      ],
      items: [],
    },
    {
      slug: "generics",
      title: "Generics",
      description:
        "Kode yang fleksibel TAPI tetap aman tipe — dari useState sampai fetch wrapper.",
      topics: [
        "Masalah yang generics selesaikan",
        "Generic function & generic constraint (extends)",
        "Generic interface & type",
        "Default type parameter",
        "Membaca signature generic di library (React, fetch)",
        "Menulis fetch wrapper ber-tipe",
      ],
      items: [],
    },
    {
      slug: "utility-types",
      title: "Utility Types",
      description:
        "Perkakas bawaan yang dipakai di hampir setiap codebase TS.",
      topics: [
        "Partial, Required, Readonly",
        "Pick & Omit — memotong tipe",
        "Record untuk object map",
        "ReturnType, Parameters, Awaited",
        "keyof & typeof di level tipe",
        "Mapped type dasar & template literal type (pengenalan)",
      ],
      items: [],
    },
    {
      slug: "ts-proyek-nyata",
      title: "TypeScript di Proyek Nyata",
      description:
        "Skill yang membedakan 'tahu TS' dan 'kerja dengan TS'.",
      topics: [
        "Membaca error TS panjang tanpa panik (dari bawah, cari 'is not assignable')",
        "Migrasi file JS ke TS bertahap",
        "Tipe untuk event handler & DOM",
        "Deklarasi tipe pihak ketiga (@types/*)",
        "Kapan boleh as (assertion) dan kenapa itu bau kode",
        "Zod: validasi runtime + tipe statis untuk data eksternal",
      ],
      items: [],
    },
  ],
};
