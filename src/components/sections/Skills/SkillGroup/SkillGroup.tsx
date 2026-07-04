import { Tag } from "@/components/ui/Tag/Tag";

interface SkillGroupProps {
  title: string;
  items: string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
