import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styles from "./tooltip.module.css";

interface TooltipInterface {
  children: React.ReactNode;
  content: string;
  theme: "light" | "dark";
}

const Tooltip = ({ children, content, theme }: TooltipInterface) => {
  return (
    <TooltipPrimitive.Provider delayDuration={400}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="bottom"
            className={`${styles["tooltip-content"]} ${theme}`}
            sideOffset={10}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
