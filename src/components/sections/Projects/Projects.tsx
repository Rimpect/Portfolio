import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className={styles.projects}>
      <SectionHeading eyebrow="// проекты" title="Что я собрал сам" id="projects-title" />

      <div className={styles.grid}>
        <ProjectCard
          title="TaskFlow"
          description="Канбан-менеджер задач с drag & drop, тёмной темой и сохранением в localStorage."
          stacks={["React", "TypeScript", "DnD"]}
          demoHref="#"
          githubHref="#"
          screenshotLabel="скриншот · TaskFlow"
        />
        <ProjectCard
          title="Погода сейчас"
          description="Приложение погоды с поиском по городам и прогнозом на 5 дней через открытый API."
          stacks={["React", "API"]}
          demoHref="#"
          githubHref="#"
          screenshotLabel="скриншот · Погода"
        />
        <ProjectCard
          title="Магазин-лендинг"
          description="Адаптивный лендинг с корзиной, фильтрами и pixel-perfect вёрсткой по макету Figma."
          stacks={["HTML", "CSS", "JS"]}
          demoHref="#"
          githubHref="#"
          screenshotLabel="скриншот · Shop"
        />
      </div>
    </section>
  );
}
