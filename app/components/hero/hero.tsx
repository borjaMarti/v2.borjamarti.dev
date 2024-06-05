import styles from "./hero.module.css";
import Image from "next/image";
import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Tooltip } from "../tooltip";
import { DownloadButton } from "../download-button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <section className={styles["social-card"]}>
        <Image
          className={styles.portrait}
          src="/self-portrait.jpg"
          alt="Borja's portrait."
          width={130}
          height={130}
          priority
        />
        <ul className={styles["social-links"]}>
          <li>
            <Tooltip content={"GitHub Profile"}>
              <a
                href="https://github.com/borjaMarti"
                className={styles.link}
                target="_blank"
                aria-label="Go to my GitHub profile"
              >
                <GitHubLogoIcon className={styles.icon} />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip content={"Send Email"}>
              <a
                href="mailto:borjamarti@outlook.com"
                className={styles.link}
                aria-label="Send an email to my address"
              >
                <EnvelopeClosedIcon className={styles.icon} />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip content={"LinkedIn Profile"}>
              <a
                href="https://www.linkedin.com/in/borjamarticalvo/"
                className={styles.link}
                target="_blank"
                aria-label="Go to my LinkedIn profile"
              >
                <LinkedInLogoIcon className={styles.icon} />
              </a>
            </Tooltip>
          </li>
        </ul>
      </section>

      <section className={styles.info}>
        <h1 className={styles.hey}>Hello! 👋</h1>
        <p>
          I&apos;m <span className={styles["my-name"]}>Borja</span>, a
          Full-Stack Developer from Spain 🇪🇸.
        </p>
        <p className={styles.info__paragraph}>
          Formerly a psychologist and teacher. I learned software development to
          build a study application for my students and got captivated by
          programming! ⚡
        </p>
        <DownloadButton
          link={"/borja-marti-cv.pdf"}
          tag={"Resume.pdf"}
          label={"Download my CV"}
        />
      </section>
    </section>
  );
};
