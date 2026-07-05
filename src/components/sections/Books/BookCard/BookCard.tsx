import { Tag } from "@/components/ui/Tag/Tag";
import type { BookStatus } from "../MockDataBooks";
import styles from "./BookCard.module.css";

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
    <article className={styles.card}>
      <div className={styles.top}>
        <Tag variant={status}>{STATUS_LABEL[status]}</Tag>
        <span className={styles.category}>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.note}>{description}</p>
    </article>
  );
}
