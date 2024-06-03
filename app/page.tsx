import styles from "./page.module.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  );
};

export default Home;
