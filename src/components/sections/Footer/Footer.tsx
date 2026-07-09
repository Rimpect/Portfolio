import styles from "./Footer.module.css";
import { links } from "@/data/resume";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.mark} aria-hidden="true">
          {"</>"}
        </span>
        <small className={styles.copyright}>© 2026 Максим Воронов</small>
      </div>

      <div className={styles.right}>
        <ul className={styles.socials}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
