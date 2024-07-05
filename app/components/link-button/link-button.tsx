import styles from "./link-button.module.css";

interface LinkButtonProps {
  link: string;
  tag: string;
}

export const LinkButton = ({ link, tag }: LinkButtonProps) => {
  return (
    <a href={link} className={styles.link}>
      <button className={styles["link-button"]}>{tag}</button>
    </a>
  );
};
