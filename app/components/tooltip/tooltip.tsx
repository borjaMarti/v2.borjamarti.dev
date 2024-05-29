"use client";
import styles from "./tooltip.module.css";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface TooltipInterface {
  children: React.ReactNode;
  content: string;
}

export const Tooltip = ({ children, content }: TooltipInterface) => {
  return (
    <TooltipPrimitive.Provider delayDuration={400}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="bottom"
            className={styles["tooltip-content"]}
            sideOffset={10}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
