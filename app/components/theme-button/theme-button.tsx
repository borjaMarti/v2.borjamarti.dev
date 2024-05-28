"use client";
import styles from "./theme-button.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Tooltip } from "../tooltip";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p>Eyoooo</p>;
  }

  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <Tooltip
      content={theme === "light" ? "Activate dark mode" : "Activate light mode"}
      theme={theme === "light" ? "dark" : "light"}
    >
      <button onClick={handleClick} className={styles.ayo}>
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </Tooltip>
  );
};
