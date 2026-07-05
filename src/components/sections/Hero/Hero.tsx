import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <p className={styles.badge}>открыт к предложениям</p>

      <h1 className={styles.title}>
        Максим Воронов — <br />
        Frontend-разработчик
      </h1>

      <p className={styles.subtitle}>
        Люблю <span className={styles.accent}>React + TypeScript</span>
      </p>

      <p className={styles.description}>
        Junior-разработчик из Москвы. Верстаю адаптивные интерфейсы на React + TypeScript, слежу за
        чистотой кода и деталями. Готов расти в сильной команде.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>
          Смотреть проекты →
        </a>
        <a href="/cv.pdf" download className={styles.btnSecondary}>
          Скачать CV
        </a>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.statValue}>1.5 года</span>
          <span className={styles.statLabel}>пишу на JavaScript</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statValue}>12+</span>
          <span className={styles.statLabel}>пет-проектов на GitHub</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statValue}>React·TS</span>
          <span className={styles.statLabel}>основной стек</span>
        </li>
      </ul>
    </section>
  );
}
