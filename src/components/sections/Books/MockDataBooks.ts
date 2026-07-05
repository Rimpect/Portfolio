export type BookStatus = "done" | "reading" | "planned";

export interface Book {
  id: number;
  title: string;
  category: string;
  status: BookStatus;
  note: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Фулстек JavaScript: секреты, которые должен знать каждый мидл",
    category: "JavaScript",
    status: "reading",
    note: "Прокачиваю full-stack картину и то, что ждут от разработчика уровня мидл.",
  },
  {
    id: 2,
    title: "Разработка фронтенд-приложений",
    category: "фронтенд",
    status: "done",
    note: "Системный взгляд на архитектуру и организацию фронтенд-приложений.",
  },
  {
    id: 3,
    title: "Грокаем безопасность веб-приложений",
    category: "безопасность",
    status: "done",
    note: "Разобрал типичные уязвимости и способы защиты — XSS, CSRF, аутентификация.",
  },
  {
    id: 4,
    title: "Грокаем алгоритмы (2-е издание)",
    category: "алгоритмы",
    status: "done",
    note: "База по алгоритмам и структурам данных — наглядно и по делу.",
  },
  {
    id: 5,
    title: "Эффективный TypeScript: 83 способа улучшить код",
    category: "TypeScript",
    status: "reading",
    note: "Учусь писать более строгий и надёжный код на TypeScript.",
  },
];
