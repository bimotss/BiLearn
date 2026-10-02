"use client";

import { useTheme } from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Sebelum mounted di client, tampilkan tombol netral tanpa perbedaan icon agar tidak mismatch
  const currentIsDark = mounted ? isDark : true;
  const labelTeks = currentIsDark ? "Mode Terang" : "Mode Gelap";
  const titleAksi = currentIsDark
    ? "Beralih ke Mode Terang (Light Mode)"
    : "Beralih ke Mode Gelap (Dark Mode)";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={titleAksi}
      title={titleAksi}
      className={`group relative flex items-center justify-center gap-2 rounded-xl border transition-all duration-200 cursor-pointer shrink-0 border-slate-300/80 bg-white/90 text-slate-700 hover:border-amber-400 hover:bg-slate-100 hover:text-amber-600 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:border-amber-400/50 dark:hover:bg-slate-800/90 dark:hover:text-amber-300 shadow-sm backdrop-blur-md focus-visible:ring-2 focus-visible:ring-amber-400 ${
        showLabel ? "px-3 py-1.5 text-xs font-medium" : "h-8 w-8 sm:h-9 sm:w-9"
      } ${className}`}
    >
      {/* Icon Sun (muncul saat Dark Mode untuk beralih ke Light) */}
      <svg
        className={`h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-300 ${
          currentIsDark
            ? "rotate-0 scale-100 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] block"
            : "-rotate-90 scale-0 hidden"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>

      {/* Icon Moon (muncul saat Light Mode untuk beralih ke Dark) */}
      <svg
        className={`h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-300 ${
          !currentIsDark
            ? "rotate-0 scale-100 text-slate-700 group-hover:text-amber-600 block"
            : "rotate-90 scale-0 hidden"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>

      {showLabel && (
        <span className="font-medium whitespace-nowrap">{labelTeks}</span>
      )}

      <span className="sr-only">{titleAksi}</span>
    </button>
  );
}
