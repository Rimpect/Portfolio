import { BookCard } from "./BookCard/BookCard";
import { books } from "./MockDataBooks";

export function Books() {
  return (
    <section id="books" aria-labelledby="books-title">
      <p>{"// книжная полка"}</p>
      <h2 id="books-title">Книги, которые меня прокачали</h2>
      <p>Читаю по фронтенду, архитектуре и безопасности. Отфильтруйте по статусу.</p>
      <button type="button">Все</button>
      <button type="button">Изучено</button>
      <button type="button">Изучаю</button>
      <button type="button">В планах</button>

      {books.map((book) => (
        <BookCard
          key={book.id}
          category={book.category}
          title={book.title}
          status={book.status}
          description={book.note}
        />
      ))}
    </section>
  );
}
