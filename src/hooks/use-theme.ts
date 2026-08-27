"use client";

import { useCallback } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

export function useThemeToggle() {
  return useCallback(() => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }, []);
}
