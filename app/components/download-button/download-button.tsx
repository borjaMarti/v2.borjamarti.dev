import styles from "./download-button.module.css";
import { DownloadIcon } from "@radix-ui/react-icons";

interface DownloadButtonProps {
  link: string;
  tag: string;
  label: string;
}

export const DownloadButton = ({ link, tag, label }: DownloadButtonProps) => {
  return (
    <a
      href={link}
      className={styles["download-link"]}
      aria-label={label}
      target="_blank"
    >
      <button className={styles["download-button"]}>
        {tag}
        <DownloadIcon className={styles["download-icon"]} />
      </button>
    </a>
  );
};
