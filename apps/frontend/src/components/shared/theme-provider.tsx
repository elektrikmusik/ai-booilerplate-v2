import { createContext, useContext, useEffect, useMemo, useState } from "react";

const prefersDarkQuery = "(prefers-color-scheme: dark)";

const ThemeContext = createContext<{
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}>({
  theme: "system",
  setTheme: () => undefined,
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    const storedTheme = localStorage.getItem(storageKey) as "light" | "dark" | "system" | null;
    return storedTheme || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    const mediaQuery = window.matchMedia(prefersDarkQuery);
    const systemTheme = mediaQuery.matches ? "dark" : "light";
    const resolved = theme === "system" ? systemTheme : theme;
    root.classList.add(resolved);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

