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

  // Tutup menu otomatis setiap kali rute berpindah
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

  // Mode Bahasa aktif jika berada di direktori bahasa atau kartu flashcard
  const isBahasaMode =
    pathname.startsWith("/bahasa") ||
    pathname.startsWith("/flashcards") ||
    pathname.startsWith("/tracks/business-english") ||
    searchParams.get("kategori") === "bahasa";

  const isPathsActive =
    pathname === "/paths" || pathname.startsWith("/paths/");

  const isCodeActive =
    !isBahasaMode &&
    !isPathsActive &&
    (pathname.startsWith("/tracks") || pathname === "/belajar");

  // =========================================================================
  // 1. HEADER KHUSUS MODE BAHASA (TANPA LECTURE CODE)
  // =========================================================================
  if (isBahasaMode) {
    const isHubActive = pathname === "/bahasa";
    const isEnglishActive =
      pathname.startsWith("/bahasa/inggris") ||
      pathname.startsWith("/tracks/business-english");
    const isJapaneseActive = pathname.startsWith("/bahasa/jepang");
    const isFlashcardsActive = pathname.startsWith("/flashcards");

    return (
      <div ref={navRef} className="flex items-center gap-2 sm:gap-3">
        {/* Navigasi Desktop Bahasa */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link
            href="/bahasa"
            className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
              isHubActive
                ? "bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            }`}
          >
            Pusat Bahasa
          </Link>
          <Link
            href="/bahasa/inggris"
            className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
              isEnglishActive
                ? "bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            }`}
          >
            English
          </Link>
          <Link
            href="/bahasa/jepang"
            className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
              isJapaneseActive
                ? "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            }`}
          >
            Jepang
          </Link>
          <Link
            href="/flashcards/jepang"
            className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
              isFlashcardsActive
                ? "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            }`}
          >
            Flashcard N5
          </Link>
        </nav>

        {/* Tombol Switcher Beralih ke Belajar Code */}
        <Link
          href="/tracks/"
          className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition cursor-pointer"
          title="Beralih dari Mode Bahasa ke Mode Belajar Code"
        >
          <span aria-hidden="true">←</span>
          <span>Belajar Code</span>
        </Link>

        <ThemeToggle />

        {/* Tombol Hamburger Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden cursor-pointer flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300/80 bg-white/90 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white shadow-sm transition"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Dropdown Mobile Bahasa */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-px border-b border-slate-200 bg-white/98 text-slate-900 dark:border-white/[0.08] dark:bg-[#030712]/95 dark:text-slate-100 px-4 py-3 shadow-2xl backdrop-blur-2xl lg:hidden z-50">
            <nav className="flex flex-col gap-1.5 max-w-6xl mx-auto">
              <Link
                href="/tracks/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-3.5 py-2.5 text-xs font-bold text-amber-700 dark:text-amber-300 transition"
              >
                <span>← Beralih ke Belajar Code (16 Track)</span>
              </Link>
              <Link
                href="/bahasa"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                  isHubActive
                    ? "bg-blue-500/15 text-blue-700 dark:text-blue-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }`}
              >
                <span>🌐</span>
                <span>Pusat Pembelajaran Bahasa</span>
              </Link>
              <Link
                href="/bahasa/inggris"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                  isEnglishActive
                    ? "bg-blue-500/15 text-blue-700 dark:text-blue-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }`}
              >
                <span>🇬🇧</span>
                <span>Bahasa Inggris Bisnis & Kerja</span>
              </Link>
              <Link
                href="/bahasa/jepang"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                  isJapaneseActive
                    ? "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }`}
              >
                <span>🇯🇵</span>
                <span>Bahasa Jepang (Hiragana & Katakana)</span>
              </Link>
              <Link
                href="/flashcards/jepang"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                  isFlashcardsActive
                    ? "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }`}
              >
                <span>🎴</span>
                <span>Kartu Kosakata JLPT N5</span>
              </Link>
              <div className="mt-2 pt-2 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between px-3.5 py-1">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Pilihan Tema</span>
                <ThemeToggle showLabel />
              </div>
            </nav>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // 2. HEADER KHUSUS LANDING PAGE ("/")
  // =========================================================================
  if (pathname === "/") {
    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/tracks/"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all duration-150 hover:scale-[1.02] hover:shadow-amber-500/35 cursor-pointer"
        >
          <span>Mulai Belajar</span>
          <span aria-hidden="true" className="text-slate-950 text-xs sm:text-sm">→</span>
        </Link>

        <ThemeToggle />
      </div>
    );
  }

  // =========================================================================
  // 3. HEADER KHUSUS MODE BELAJAR CODE (EKSLUSIF KODING & TANPA BAHASA)
  // =========================================================================
  return (
    <div ref={navRef} className="flex items-center gap-2 sm:gap-3">
      {/* Navigasi Desktop Koding */}
      <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
        <Link
          href="/tracks/"
          className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
            isCodeActive
              ? "bg-slate-200/80 text-slate-900 dark:bg-white/[0.08] dark:text-white font-semibold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
          }`}
        >
          Belajar Code
        </Link>
        <Link
          href="/paths/"
          className={`cursor-pointer rounded-xl px-3 py-1.5 transition-all duration-200 ${
            isPathsActive
              ? "bg-slate-200/80 text-slate-900 dark:bg-white/[0.08] dark:text-white font-semibold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
          }`}
        >
          Career Paths
        </Link>
      </nav>

      {/* Mode Belajar Indicator Toggle (Ngetik vs Susun Kode) */}
      <Suspense fallback={null}>
        <PenunjukMode />
      </Suspense>

      {/* Tombol Switcher Beralih ke Mode Bahasa */}
      <Link
        href="/bahasa"
        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 transition cursor-pointer"
        title="Beralih dari Belajar Code ke Mode Bahasa"
      >
        <span>Mode Bahasa</span>
        <span aria-hidden="true">→</span>
      </Link>

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Tombol Hamburger Menu Mobile */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden cursor-pointer flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300/80 bg-white/90 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white shadow-sm transition focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu Mobile Koding */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-px border-b border-slate-200 bg-white/98 text-slate-900 dark:border-white/[0.08] dark:bg-[#030712]/95 dark:text-slate-100 px-4 py-3 shadow-2xl backdrop-blur-2xl md:hidden z-50">
          <nav className="flex flex-col gap-1.5 max-w-6xl mx-auto">
            <Link
              href="/tracks/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                isCodeActive
                  ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              }`}
            >
              <span className="text-base">⌘</span>
              <span>Belajar Code (16 Track Spesialisasi)</span>
            </Link>

            <Link
              href="/paths/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                isPathsActive
                  ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              }`}
            >
              <span className="text-base">🎯</span>
              <span>Career Paths (Roadmap Karier Industri)</span>
            </Link>

            <Link
              href="/bahasa"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/30 px-3.5 py-2.5 text-xs font-bold text-blue-700 dark:text-blue-300 transition"
            >
              <span>文</span>
              <span>Beralih ke Mode Bahasa (English & Jepang) →</span>
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
