import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Tag } from "@/components/ui/Tag/Tag";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  stacks: string[];
  demoHref: string;
  githubHref: string;
  screenshot: StaticImageData;
}

export function ProjectCard({
  title,
  description,
  stacks,
  demoHref,
  githubHref,
  screenshot,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.screenshot}>
        <Image
          src={screenshot}
          alt={`Скриншот проекта ${title}`}
          fill
          sizes="(max-width: 900px) 100vw, 380px"
        />
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
