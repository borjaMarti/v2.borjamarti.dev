"use client";
import { useState, useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useFlubber } from "@/hooks/use-flubber";

interface MorphingPathProps {
  paths: string[];
  classNames: string;
  result: number;
}

export const MorphingPath = ({
  paths,
  classNames,
  result,
}: MorphingPathProps) => {
  const [pathIndex, setPathIndex] = useState(result);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths, 1);

  useEffect(() => {
    setPathIndex(result);

    const animation = animate(progress, pathIndex, {
      duration: 0.6,
      ease: "easeInOut",
    });

    return () => animation.stop();
  }, [pathIndex, progress, result]);

  return <motion.path className={classNames} d={path} />;
};
