"use client";
import { useState } from "react";
import { header } from "@/data/resume";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true">
          {"</>"}
        </span>
        М. Воронов
      </a>
      <nav aria-label="Основная навигация" className={styles.nav} data-open={isOpen}>
        <ul className={styles.list}>
          {header.map(({ reference, label }) => (
            <li key={reference}>
              <a href={reference} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact" className={styles.cta}>
        Связаться
      </a>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Меню"
        aria-expanded={isOpen}
        className={styles.burger}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
