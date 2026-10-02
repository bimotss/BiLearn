"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PenunjukMode } from "@/components/ModeBelajarBar";
import { ThemeToggle } from "@/components/ThemeToggle";

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const navRef = useRef<HTMLDivElement>(null);

  // Tutup menu otomatis setiap kali rute berpindah (render-time state adjustment)
  const [prevRouteKey, setPrevRouteKey] = useState("");
  const currentRouteKey = `${pathname}?${searchParams.toString()}`;
  if (prevRouteKey !== currentRouteKey) {
    setPrevRouteKey(currentRouteKey);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  // Tutup menu jika klik di luar atau tekan Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isBahasaActive =
    searchParams.get("kategori") === "bahasa" ||
    pathname.startsWith("/bahasa") ||
    pathname.startsWith("/flashcards") ||
    pathname.startsWith("/tracks/business-english");

  const isPathsActive =
    pathname === "/paths" || pathname.startsWith("/paths/");

  const isCodeActive = !isBahasaActive && !isPathsActive;

  return (
    <div ref={navRef} className="flex items-center gap-2 sm:gap-3">
      {/* Navigasi Desktop (Layar Sedang & Lebar) */}
      <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
        <Link
          href="/"
          className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
            isCodeActive
              ? "bg-slate-200/80 text-slate-900 dark:bg-white/[0.08] dark:text-white font-semibold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
          }`}
        >
          Belajar Code
        </Link>
        <Link
          href="/?kategori=bahasa"
          className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
            isBahasaActive
              ? "bg-slate-200/80 text-slate-900 dark:bg-white/[0.08] dark:text-white font-semibold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
          }`}
        >
          Bahasa
        </Link>
        <Link
          href="/paths"
          className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
            isPathsActive
              ? "bg-slate-200/80 text-slate-900 dark:bg-white/[0.08] dark:text-white font-semibold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
          }`}
        >
          Learning Path
        </Link>
      </nav>

      {/* Mode Belajar Indicator Toggle (Tampil di Desktop & Mobile) */}
      <Suspense fallback={null}>
        <PenunjukMode />
      </Suspense>

      {/* Theme Toggle Button (Desktop & Mobile) */}
      <ThemeToggle />

      {/* Tombol Hamburger Menu Mobile */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden cursor-pointer flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300/80 bg-white/90 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white shadow-sm transition focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-px border-b border-slate-200 bg-white/98 text-slate-900 dark:border-white/[0.08] dark:bg-[#030712]/95 dark:text-slate-100 px-4 py-3 shadow-2xl backdrop-blur-2xl md:hidden animate-fade-in z-50 transition-colors">
          <nav className="flex flex-col gap-1.5 max-w-6xl mx-auto">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                isCodeActive
                  ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              }`}
            >
              <span className="text-base">⌘</span>
              <span>Belajar Code (Web & Rekayasa Software)</span>
            </Link>

            <Link
              href="/?kategori=bahasa"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                isBahasaActive
                  ? "bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              }`}
            >
              <span className="text-base">文</span>
              <span>Bahasa (Business English & Bahasa Jepang)</span>
            </Link>

            <Link
              href="/paths"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                isPathsActive
                  ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              }`}
            >
              <span className="text-base">🎯</span>
              <span>Learning Path (Roadmap Karier Industri)</span>
            </Link>

            <div className="mt-2 pt-2 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between px-3.5 py-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Pilihan Tema
              </span>
              <ThemeToggle showLabel />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
