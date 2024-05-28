import styles from "./page.module.css";
import { ThemeButton } from "./components/theme-button";
import { ThemeIcon } from "./components/theme-button/theme-icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.eyo}>Yoooooooooo.</h1>
      <ThemeButton />
      <ThemeIcon />
    </main>
  );
}
