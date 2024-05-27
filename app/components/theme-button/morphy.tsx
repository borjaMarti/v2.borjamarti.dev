"use client";
import { interpolate } from "flubber";
import { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

interface SVGMorphProps {
  paths: string[];
  classNames: string;
  theme: string | undefined;
}

export default function SVGMorph({ paths, classNames, theme }: SVGMorphProps) {
  const [pathIndex, setPathIndex] = useState(theme === "light" ? 0 : 1);
  const progress = useMotionValue(pathIndex);

  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    if (theme === "light") setPathIndex(0);
    if (theme === "dark") setPathIndex(1);

    const animation = animate(progress, pathIndex, {
      duration: 0.4,
      ease: "easeInOut",
    });

    return () => {
      animation.stop();
    };
  }, [pathIndex, progress, theme]);

  return <motion.path className={classNames} d={path} />;
}
