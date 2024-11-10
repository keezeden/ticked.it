"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const onClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button onClick={onClick} variant="outline" size="icon">
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
};
