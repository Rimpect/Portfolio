import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className={styles.projects}
    >
      <SectionHeading
        eyebrow="// проекты"
        title="Что я собрал сам"
        id="projects-title"
      />

      <div className={styles.grid}>
        {projects.map(
          ({
            id,
            title,
            description,
            stacks,
            demoHref,
            githubHref,
            screenshotLabel,
          }) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              stacks={stacks}
              demoHref={demoHref}
              githubHref={githubHref}
              screenshotLabel={screenshotLabel}
            />
          ),
        )}
      </div>
    </section>
  );
}
