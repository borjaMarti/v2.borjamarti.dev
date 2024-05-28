import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

export const useFlubber = (
  progress: MotionValue<number>,
  paths: string[],
  maxSegmentLength: number,
) => {
  return useTransform(
    progress,
    paths.map((_, i) => i),
    paths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength }),
    },
  );
};
