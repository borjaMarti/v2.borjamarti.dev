"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { Tooltip } from "../tooltip";
import { ThemeButton } from "../theme-button";
import { BMLogo } from "../bm-logo";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const headerVariants = {
  open: {
    height: 120,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

export const Header = () => {
  const [reached, setReached] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setReached(latest > 60);
  });

  return (
    <motion.header
      className={styles.header}
      initial="open"
      animate={reached ? "collapsed" : "open"}
      variants={headerVariants}
    >
      <div className={styles["header__container"]}>
        <Tooltip content="Home">
          <Link href="/" aria-label="Navigate to Home">
            <BMLogo />
          </Link>
        </Tooltip>
        <ThemeButton />
      </div>
    </motion.header>
  );
};
