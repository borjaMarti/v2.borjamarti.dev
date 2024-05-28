"use client";
import styles from "./theme-button.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Tooltip } from "../tooltip";
import { ThemeIcon } from "./theme-icon";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
      <div className={styles.div}>
        <button onClick={handleClick} className={styles["theme-button"]}>
          <ThemeIcon
            classNames={{
              path: styles.path,
              "path--negative": styles["path--negative"],
            }}
          />
          <VisuallyHidden>{`Switch to ${theme === "light" ? "dark mode." : "light mode"}`}</VisuallyHidden>
        </button>
      </div>
    </Tooltip>
  );
};
