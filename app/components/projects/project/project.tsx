import { Tooltip } from "@/components/tooltip";
import styles from "./project.module.css";
import Image from "next/image";
import { LinkButton } from "@/components/link-button";
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
              <LinkButton
                link={repoLink}
                tag="Project Repo"
                label={`Link to ${title}'s repository.`}
                target="_blank"
                icon={GitHubLogoIcon}
                type="gray"
              />
            </li>
          ) : (
            ""
          )}
          <li>
            <LinkButton
              link={demoLink}
              tag="Live Site"
              label={`Link to ${title}'s live site.`}
              target="_blank"
              icon={ExternalLinkIcon}
              type="gray"
            />
          </li>
        </ul>
      </div>
    </article>
  );
};
