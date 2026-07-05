import { heroSection } from "@/data/resume";
import styles from "./Hero.module.css";
import { Typewriter } from "./Typewriter/Typewriter";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.badge}>открыт к предложениям</p>

        <h1 className={styles.title}>
          {heroSection.name} — <br />
          {heroSection.role}
        </h1>

        <p className={styles.subtitle}>
          Люблю{" "}
          <span className={styles.accent}>
            <Typewriter words={heroSection.loves} />
          </span>
        </p>

        <p className={styles.description}>{heroSection.description}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            Смотреть проекты →
          </a>
          <a href="/cv.pdf" download className={styles.btnSecondary}>
            Скачать CV
          </a>
        </div>

        <ul className={styles.stats}>
          {heroSection.stats.map(({ value, label }) => (
            <li key={label} className={styles.stat}>
              <p className={styles.statValue}>{value}</p>
              <p className={styles.statLabel}>{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
