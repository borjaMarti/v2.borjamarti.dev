import styles from "./page.module.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Projects />
    </main>
  );
}
