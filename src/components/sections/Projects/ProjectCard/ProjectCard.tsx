import { Tag } from "@/components/ui/Tag/Tag";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  stacks: string[];
  demoHref: string;
  githubHref: string;
  screenshotLabel: string;
}

export function ProjectCard({
  title,
  description,
  stacks,
  demoHref,
  githubHref,
  screenshotLabel,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.screenshot} aria-hidden="true">
        {screenshotLabel}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.stack}>
          {stacks.map((stack) => (
            <li key={stack}>
              <Tag>{stack}</Tag>
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a
            href={demoHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Демо проекта ${title}`}
            className={styles.demo}
          >
            Демо →
          </a>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub проекта ${title}`}
            className={styles.github}
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
