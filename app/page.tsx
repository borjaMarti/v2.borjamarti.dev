import styles from "./page.module.css";
import SwitchTheme from "./components/switch-theme";
import Soon from "./components/theme-button/soon";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.eyo}>Yoooooooooo.</h1>
      <SwitchTheme />
      <div className={styles.container}>
        <Soon />
      </div>
    </main>
  );
}
