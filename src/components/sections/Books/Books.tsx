import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { BookShelf } from "./BookShelf/BookShelf";
import styles from "./Books.module.css";

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
      <BookShelf />
    </section>
  );
}
