"use client";
import styles from "./theme-icon.module.css";
import {
  sunIn,
  moonIn,
  sunOut,
  moonOut,
  star1,
  star2,
  star3,
  star4,
  star5,
  star6,
  star7,
  star8,
  ray1,
  ray2,
  ray3,
  ray4,
  ray5,
  ray6,
  ray7,
  ray8,
} from "./theme-icon-paths";
import { MorphingPath } from "@/components/morphing-path";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ThemeIconProps {
  classNames: {
    path: string;
    "path--negative": string;
  };
}

export const ThemeIcon = ({ classNames }: ThemeIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles["svg-container"]}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <MorphingPath
          paths={[sunOut, moonOut]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[sunIn, moonIn]}
          classNames={classNames["path--negative"]}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray1, star1]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray2, star2]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray3, star3]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray4, star4]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray5, star5]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray6, star6]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray7, star7]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
        <MorphingPath
          paths={[ray8, star8]}
          classNames={classNames.path}
          result={theme === "light" ? 0 : 1}
        />
      </svg>
    </div>
  );
};
