"use client";
import styles from "./theme-button.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Tooltip } from "../tooltip";
import { ThemeIcon } from "./theme-icon";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles["theme-button__skeleton"]}></div>;
  }

  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <Tooltip
      content={theme === "light" ? "Activate dark mode" : "Activate light mode"}
    >
      <button
        onClick={handleClick}
        className={styles["theme-button"]}
        aria-label={`Switch to ${theme === "light" ? "dark mode." : "light mode"}`}
      >
        <ThemeIcon
          classNames={{
            path: styles.path,
            "path--negative": styles["path--negative"],
          }}
        />
      </button>
    </Tooltip>
  );
};
