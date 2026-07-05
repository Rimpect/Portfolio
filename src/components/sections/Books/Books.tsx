import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { BookCard } from "./BookCard/BookCard";
import styles from "./Books.module.css";
import { books } from "./MockDataBooks";

export function Books() {
  return (
    <section id="books" aria-labelledby="books-title" className={styles.books}>
      <SectionHeading
        eyebrow="// книжная полка"
        title="Книги, которые меня прокачали"
        id="books-title"
      />

      <p className={styles.description}>
        Читаю по фронтенду, архитектуре и безопасности. Отфильтруйте по статусу.
      </p>

      <div className={styles.filters}>
        <button type="button" className={`${styles.filter} ${styles.filterActive}`}>
          Все
        </button>
        <button type="button" className={styles.filter}>
          Изучено
        </button>
        <button type="button" className={styles.filter}>
          Изучаю
        </button>
        <button type="button" className={styles.filter}>
          В планах
        </button>
      </div>

      <div className={styles.grid}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            category={book.category}
            title={book.title}
            status={book.status}
            description={book.note}
          />
        ))}
      </div>
    </section>
  );
}
