import type { Track } from "@/lib/types";

export const nextjsTrack: Track = {
  slug: "nextjs",
  title: "Next.js",
  description: "App Router, server components, sampai deploy production.",
  hours: 60,
  recommendedPrereqs: ["react"],
  color: "bg-neutral-800",
  icon: "▲",
  order: 7,
  modules: [
    {
      slug: "app-router",
      title: "App Router: Halaman & Layout",
      description:
        "Routing berbasis file — fondasi semua aplikasi Next.js modern.",
      topics: [
        "Kenapa Next.js: masalah yang diselesaikan di atas React",
        "Struktur app/: page, layout, folder = route",
        "Dynamic route [slug] & catch-all",
        "Nested layout & template",
        "loading.tsx, error.tsx, not-found.tsx",
        "Link & navigasi client-side",
        "Route group & private folder",
      ],
      items: [],
    },
    {
      slug: "server-client",
      title: "Server vs Client Components",
      description:
        "Konsep pembeda Next.js modern — salah paham di sini, salah arsitektur semuanya.",
      topics: [
        "Server component: default, kenapa, dan batasannya",
        "'use client': kapan benar-benar dibutuhkan",
        "Boundary: server membungkus client, bukan sebaliknya",
        "Mengoper data & children menembus boundary",
        "Pola komposisi: interaktif di daun, data di akar",
        "Kesalahan umum: 'use client' di root, import server code ke client",
      ],
      items: [],
    },
    {
      slug: "data-caching",
      title: "Data Fetching & Caching",
      description:
        "Fetch di server, cache yang bisa diprediksi, dan revalidasi.",
      topics: [
        "async server component: fetch langsung di komponen",
        "Static vs dynamic rendering",
        "revalidate: ISR & on-demand revalidation",
        "cache() dan deduplication",
        "Streaming & Suspense untuk UI bertahap",
        "generateStaticParams untuk halaman dinamis",
      ],
      items: [],
    },
    {
      slug: "route-handlers",
      title: "Route Handlers (API)",
      description:
        "Backend ringan di dalam Next.js: REST endpoint untuk kebutuhan nyata.",
      topics: [
        "route.ts: GET, POST, PUT, DELETE",
        "Request & Response: body, header, status",
        "Query param & dynamic segment di handler",
        "Validasi input dengan Zod",
        "Error response yang konsisten",
        "Kapan route handler vs server action",
      ],
      items: [],
    },
    {
      slug: "server-actions",
      title: "Form & Server Actions",
      description:
        "Mutasi data tanpa boilerplate API — pola form modern Next.js.",
      topics: [
        "'use server' & action di form",
        "useActionState untuk pending & error",
        "Validasi server-side + pesan error ke UI",
        "revalidatePath & revalidateTag setelah mutasi",
        "Optimistic UI dengan useOptimistic",
        "Keamanan: server action tetap endpoint publik",
      ],
      items: [],
    },
    {
      slug: "auth",
      title: "Autentikasi",
      description:
        "Login yang benar: session, proteksi route, dan middleware.",
      topics: [
        "Konsep session vs token",
        "Auth.js (NextAuth): setup & provider",
        "Proteksi halaman di server component",
        "Middleware untuk guard route",
        "Role & otorisasi sederhana",
        "Menyimpan user di database",
      ],
      items: [],
    },
    {
      slug: "optimasi-seo",
      title: "Optimasi & SEO",
      description:
        "Fitur yang membuat Next.js dipilih perusahaan: cepat dan terindeks.",
      topics: [
        "next/image: kenapa dan cara pakainya",
        "next/font & layout shift",
        "Metadata API: title, description, Open Graph",
        "sitemap.ts & robots.ts",
        "Lighthouse & Core Web Vitals",
        "Bundle analysis & dynamic import",
      ],
      items: [],
    },
    {
      slug: "deploy",
      title: "Database & Deploy",
      description:
        "Dari localhost ke URL publik: Prisma, Postgres, dan Vercel.",
      topics: [
        "Prisma + PostgreSQL di Next.js",
        "Environment variable: lokal vs production",
        "Deploy ke Vercel: preview & production",
        "Custom domain & HTTPS",
        "Logging & error monitoring dasar",
        "Checklist pre-launch",
      ],
      items: [],
    },
  ],
};
