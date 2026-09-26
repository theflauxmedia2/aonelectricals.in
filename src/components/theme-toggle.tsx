"use client";

import { CableCores } from "@/components/cable-cores";

const STORAGE_KEY = "aone-theme";

export function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between live and neutral"
      title="Live is dark (red on black). Neutral is light (red on white)."
      className="pressable inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground"
    >
      <span className="flex size-6 items-center justify-center rounded-full border border-border bg-muted">
        <CableCores />
      </span>
    </button>
  );
}
