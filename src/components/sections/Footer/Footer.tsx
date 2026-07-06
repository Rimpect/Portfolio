import styles from "./Footer.module.css";

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
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/username"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/username"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
