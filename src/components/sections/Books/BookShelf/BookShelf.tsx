"use client";
import { useState } from "react";
import { books } from "@/data/resume";
import { BookCard } from "../BookCard/BookCard";
import styles from "./BookShelf.module.css";

export function BookShelf() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredBooks = books.filter(
    ({ status }) => activeFilter === "all" || status === activeFilter,
  );

  const buttonArray = [
    { key: "all", value: "Все" },
    { key: "done", value: "Изучено" },
    { key: "reading", value: "Изучаю" },
    { key: "planned", value: "В планах" },
  ];

  return (
    <div>
      <div className={styles.filters}>
        {buttonArray.map(({ key, value }) => (
          <button
            type="button"
            key={key}
            aria-pressed={activeFilter === key}
            className={`${styles.filter} ${activeFilter === key ? styles.filterActive : ""}`}
            onClick={() => setActiveFilter(key)}
          >
            {value}
          </button>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <div className={styles.empty}>
          <p>Нет книг с таким статусом.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredBooks.map(({ id, category, title, status, note }) => (
            <BookCard
              key={id}
              category={category}
              title={title}
              status={status}
              description={note}
            />
          ))}
        </div>
      )}
    </div>
  );
}
