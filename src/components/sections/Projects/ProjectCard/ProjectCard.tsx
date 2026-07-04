import { Tag } from "@/components/ui/Tag/Tag";

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
    <article>
      <div aria-hidden="true">{screenshotLabel}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {stacks.map((stack) => (
          <li key={stack}>
            <Tag>{stack}</Tag>
          </li>
        ))}
      </ul>
      <a
        href={demoHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Демо проекта ${title}`}
      >
        Демо →
      </a>
      <a
        href={githubHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub проекта ${title}`}
      >
        GitHub
      </a>
    </article>
  );
}
