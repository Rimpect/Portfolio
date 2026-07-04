import { Tag } from "@/components/ui/Tag/Tag";
import type { BookStatus } from "../MockDataBooks";

const STATUS_LABEL: Record<BookStatus, string> = {
  done: "Изучено",
  reading: "Изучаю",
  planned: "В планах",
};

interface BookCardProps {
  category: string;
  title: string;
  status: BookStatus;
  description: string;
}

export function BookCard({ category, title, description, status }: BookCardProps) {
  return (
    <article>
      <Tag variant={status}>{STATUS_LABEL[status]}</Tag>
      <Tag>{category}</Tag>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
