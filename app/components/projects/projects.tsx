import { Project, ProjectProps } from "./project";
import styles from "./projects.module.css";

const projectData: ProjectProps[] = [
  {
    imgSrc: "/project-screenshots/educard.png",
    title: "EduCard",
    summary:
      "EduCard is a web application that helps teachers develop their students' active recall and spaced repetition habits by using flashcards.",
    repoLink: "https://github.com/borjamarti/educard",
    demoLink: "https://educard.es",
    backgroundColor: styles["project-background--peach"],
  },
  {
    imgSrc: "/project-screenshots/despiensa.png",
    title: "Despiensa",
    summary:
      "A smart shopping list app that learns its users' buying habits to remind them what they need to restock on their next trip to the store.",
    repoLink: "https://github.com/the-collab-lab/tcl-71-smart-shopping-list",
    demoLink: "https://despiensa.site",
    backgroundColor: styles["project-background--lilac"],
  },
  {
    imgSrc: "/project-screenshots/pokelist.png",
    title: "PokéList",
    summary:
      "Technical assignment showcasing API consumption and local and async state management; built with TypeScript, React, React Query, Zustand, and GraphQL.",
    repoLink: "https://github.com/borjamarti/poke-list",
    demoLink: "https://poke-list-beta.vercel.app/",
    backgroundColor: styles["project-background--pale"],
  },
  {
    imgSrc: "/project-screenshots/baloo.png",
    title: "Baloo Animación",
    summary:
      "CMS-based client website for event planning business designed and built prioritizing performance, accessibility, and SEO optimization.",
    demoLink: "https://balooanimacion.es",
    backgroundColor: styles["project-background--blue"],
  },
];

export const Projects = () => {
  return (
    <section className={styles["projects-container"]} id="work">
      <div className={styles.projects}>
        <h2 className={styles.title}>Work</h2>
        {projectData.map((project) => (
          <Project
            imgSrc={project.imgSrc}
            title={project.title}
            summary={project.summary}
            repoLink={project?.repoLink}
            demoLink={project.demoLink}
            backgroundColor={project.backgroundColor}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
};
