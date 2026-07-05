import styles from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  startYear: number;
  endYear?: number;
  title: string;
  description: string;
}

export function ExperienceItem({ startYear, endYear, title, description }: ExperienceItemProps) {
  return (
    <li className={styles.item}>
      <p className={styles.date}>
        <time dateTime={startYear.toString()}>{startYear}</time>
        {" — "}
        {endYear ? <time dateTime={endYear.toString()}>{endYear}</time> : "н.в."}
      </p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.note}>{description}</p>
    </li>
  );
}
