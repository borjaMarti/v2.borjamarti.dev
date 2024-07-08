import styles from "./link-button.module.css";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface LinkButtonProps {
  link: string;
  tag: string;
  label?: string;
  target?: string;
  Icon?: React.ComponentType<IconProps>;
  type: "bold" | "subtle" | "gray";
}

export const LinkButton = ({
  link,
  tag,
  label,
  target,
  Icon,
  type,
}: LinkButtonProps) => {
  return (
    <a
      href={link}
      className={`${styles.link} ${styles[`link--${type}`]}`}
      aria-label={label}
      target={target}
    >
      {tag}
      {Icon && <Icon className={styles.icon} />}
    </a>
  );
};
