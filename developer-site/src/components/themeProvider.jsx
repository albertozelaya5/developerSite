import { useEffect } from "react";
import { useTheme } from "@/hooks";

export const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return <div className="duration-300">{children}</div>;
};