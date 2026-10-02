import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PemilihModeAwal } from "@/components/ModeBelajarBar";
import { HeaderNav } from "@/components/HeaderNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiLearn — Belajar Coding & Skill Kerja yang Nyata Kepake",
  description:
    "Platform belajar coding interaktif kurikulum berbasis lowongan kerja nyata Indonesia. Mode ngetik langsung dan susun logika kode dengan feedback otomatis.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bilearn_theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-slate-100 selection:bg-amber-500/30 selection:text-amber-900 dark:selection:text-amber-200 transition-colors duration-150">
        {/* Subtle Ambient Tech Glow at top */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[500px] overflow-hidden opacity-30 dark:opacity-60"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[900px] rounded-full bg-gradient-to-b from-amber-500/20 via-orange-500/10 to-transparent blur-[120px]" />
          <div className="absolute right-10 top-20 h-[300px] w-[450px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        {/* Glassmorphic Sticky Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 dark:border-white/[0.08] dark:bg-[#030712]/80 backdrop-blur-xl transition-colors">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3">
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-bold tracking-tight cursor-pointer shrink-0"
            >
              <div className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_16px_rgba(245,158,11,0.35)] transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="BiLearn logo"
                  width={22}
                  height={22}
                  priority
                  className="rounded-lg sm:w-6 sm:h-6"
                />
              </div>
              <span className="text-slate-900 dark:text-white transition-colors">
                Bi
                <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Learn
                </span>
              </span>
            </Link>

            <Suspense fallback={null}>
              <HeaderNav />
            </Suspense>
          </nav>
        </header>

        {/* Main Content Viewport */}
        <main className="mx-auto w-full max-w-6xl min-w-0 flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>

        <Suspense fallback={null}>
          <PemilihModeAwal />
        </Suspense>

        {/* Polished Modern Footer */}
        <footer className="mt-16 border-t border-slate-200 bg-slate-100/80 py-8 text-sm text-slate-600 dark:border-white/[0.08] dark:bg-[#020617]/70 dark:text-slate-400 transition-colors">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Sistem Pembelajaran Interaktif Aktif · 100% Akses Terbuka
              </span>
            </div>
            <p className="text-xs text-slate-500">
              BiLearn — Kurikulum berbasis kebutuhan kerja industri riil. Belajar tanpa batas paywall.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
