"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)] opacity-50">
        <div className="w-5 h-5" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--muted)] transition-all duration-300 group shadow-sm"
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all text-amber-500",
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all text-blue-500",
          isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
