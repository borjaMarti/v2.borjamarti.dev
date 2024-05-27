"use client";
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
} from "./paths";
import styles from "./style.module.css";
import SVGMorph from "./morphy";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Soon() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles.svgContainer}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <SVGMorph
          paths={[sunOut, moonOut]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[sunIn, moonIn]}
          classNames={styles["path--negative"]}
          theme={theme}
        />
        <SVGMorph
          paths={[ray1, star1]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray2, star2]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray3, star3]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray4, star4]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray5, star5]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray6, star6]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray7, star7]}
          classNames={styles.path}
          theme={theme}
        />
        <SVGMorph
          paths={[ray8, star8]}
          classNames={styles.path}
          theme={theme}
        />
      </svg>
    </div>
  );
}
