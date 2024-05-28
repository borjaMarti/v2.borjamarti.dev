import styles from "./page.module.css";
import { ThemeButton } from "./components/theme-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.eyo}>Yoooooooooo.</h1>
      <ThemeButton />
    </main>
  );
}
