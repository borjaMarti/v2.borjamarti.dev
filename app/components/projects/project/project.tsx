import { Tooltip } from "@/components/tooltip";
import styles from "./project.module.css";
import Image from "next/image";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export interface ProjectProps {
  imgSrc: string;
  title: string;
  summary: string;
  repoLink?: string;
  demoLink: string;
  backgroundColor: string;
}

export const Project = ({
  imgSrc,
  title,
  summary,
  repoLink,
  demoLink,
  backgroundColor,
}: ProjectProps) => {
  return (
    <article className={styles.project}>
      <div className={`${styles["image-container"]} ${backgroundColor}`}>
        <Image
          src={imgSrc}
          alt={`${title} `}
          className={styles.image}
          width={880}
          height={500}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <ul className={styles["project-links"]}>
          {repoLink ? (
            <li>
              <Tooltip content={"Project Repo"}>
                <a
                  href={repoLink}
                  className={styles.link}
                  target="_blank"
                  aria-label="Go to my GitHub profile"
                >
                  <GitHubLogoIcon className={styles.icon} />
                </a>
              </Tooltip>
            </li>
          ) : (
            ""
          )}
          <li>
            <Tooltip content={"Live Site"}>
              <a
                href={demoLink}
                className={styles.link}
                target="_blank"
                aria-label="Go to my GitHub profile"
              >
                <ExternalLinkIcon className={styles.icon} />
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </article>
  );
};
