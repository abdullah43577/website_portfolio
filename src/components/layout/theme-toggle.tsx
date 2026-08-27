"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/use-theme";

export function ThemeToggle() {
  const toggle = useThemeToggle();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:text-fg"
    >
      <Moon className="h-[18px] w-[18px] dark:hidden" strokeWidth={1.6} />
      <Sun className="hidden h-[18px] w-[18px] dark:block" strokeWidth={1.6} />
    </button>
  );
}
