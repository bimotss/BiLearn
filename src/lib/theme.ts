"use client";

import { useSyncExternalStore, useCallback } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "bilearn_theme";

/**
 * Membaca tema yang tersimpan di localStorage.
 * Default ke 'dark' (sesuai tema default BiLearn) jika belum ada pilihan tersimpan.
 */
export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Abaikan jika localStorage terkunci
  }

  return "dark";
}

/**
 * Menerapkan tema ke elemen <html> dan style colorScheme
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";
  }
}

/**
 * Menyimpan preferensi tema ke localStorage dan memancarkan event
 */
export function setGlobalTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Abaikan error kuota / storage terkunci
  }

  applyTheme(theme);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("bilearn-theme-change", { detail: theme }));
  }
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  function handleStorage(e: StorageEvent) {
    if (e.key === THEME_STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
      applyTheme(e.newValue);
      callback();
    }
  }

  window.addEventListener("bilearn-theme-change", callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("bilearn-theme-change", callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * React hook untuk membaca dan mereaksikan perubahan tema via useSyncExternalStore
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  const changeTheme = useCallback((newTheme: Theme) => {
    setGlobalTheme(newTheme);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setGlobalTheme(next);
    return next;
  }, [theme]);

  return {
    theme,
    isDark: theme === "dark",
    setTheme: changeTheme,
    toggleTheme: toggle,
    mounted: true,
  };
}
