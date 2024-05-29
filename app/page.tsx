import styles from "./page.module.css";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.eyo}>Yoooooooooo.</h1>
    </main>
  );
}
