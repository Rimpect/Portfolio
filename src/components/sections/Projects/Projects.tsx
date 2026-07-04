import { ProjectCard } from "./ProjectCard/ProjectCard";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <p>{"// проекты"}</p>
      <h2 id="projects-title">Что я собрал сам</h2>
      <ProjectCard
        title="TaskFlow"
        description="Описание проекта 1"
        stacks={["React", "TypeScript"]}
        demoHref="#"
        githubHref="#"
        screenshotLabel="#"
      />
      <ProjectCard
        title="TaskFlow"
        description="Описание проекта 2"
        stacks={["React", "TypeScript"]}
        demoHref="#"
        githubHref="#"
        screenshotLabel="#"
      />
      <ProjectCard
        title="TaskFlow"
        description="Описание проекта 3"
        stacks={["React", "TypeScript"]}
        demoHref="#"
        githubHref="#"
        screenshotLabel="#"
      />
    </section>
  );
}
