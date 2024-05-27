"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./switch-theme.module.css";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <button onClick={handleClick} className={styles.ayo}>
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
};

export default SwitchTheme;
