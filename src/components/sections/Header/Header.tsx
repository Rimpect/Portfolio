import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true">
          {"</>"}
        </span>
        М. Воронов
      </a>
      <nav aria-label="Основная навигация" className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a href="#about">Обо мне</a>
          </li>
          <li>
            <a href="#skills">Навыки</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#experience">Опыт</a>
          </li>
          <li>
            <a href="#books">Книги</a>
          </li>
        </ul>
      </nav>
      <a href="#contact" className={styles.cta}>
        Связаться
      </a>
    </header>
  );
}
