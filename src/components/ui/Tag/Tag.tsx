import styles from "./Tag.module.css";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "done" | "reading" | "planned";
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span className={styles.tag} data-variant={variant}>
      {children}
    </span>
  );
}
