import QuizPlatform from "./screenshots/QuizPlatform.png";
import snippet from "./screenshots/snippet.png";

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

export const heroSection = {
  name: "Максим Воронов",
  role: "Frontend-разработчик",
  description:
    "Junior-разработчик из Костромы. Верстаю адаптивные интерфейсы на React + TypeScript / React + JavaScript, слежу за чистотой кода и деталями. Готов расти в сильной команде.",
  stats: [
    { value: "полгода", label: "пишу на TypeScript" },
    { value: "6+", label: "пет-проектов на GitHub" },
    { value: "React·TS", label: "основной стек" },
  ],
  loves: [
    "React + TypeScript",
    "безопасность веб-приложений",
    "адаптивную вёрстку",
    "чистый код",
    "удобные интерфейсы",
  ],
};

export const facts = [
  {
    label: "Локация",
    value: "Кострома / удалёнка",
  },
  {
    label: "Формат",
    value: "Full-time, стажировка",
  },
  {
    label: "Английский",
    value: "B1 — читаю доки",
  },
  {
    label: "Фокус",
    value: "Безопасность · UX/UI",
  },
];

export const stack = [
  {
    category: "Языки",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Вёрстка и стили",
    items: ["HTML5", "CSS3", "SCSS / Sass", "CSS Modules", "Tailwind"],
  },
  {
    category: "Фреймворки",
    items: ["React", "Vue", "Angular"],
  },
  {
    category: "Инструменты",
    items: ["Git / GitHub", "Vite", "Figma", "REST API"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Платформа для проведения квизов",
    description:
      "Платформа для проведения квизов с реализованной системой античитинга",
    stacks: ["React", "JavaScript", "Vite", "Python", "PostgreSQL"],
    demoHref: "https://rimpect.github.io/The-Quiz-Platform/",
    githubHref: "https://github.com/Rimpect/The-Quiz-Platform",
    screenshot: QuizPlatform,
  },
  {
    id: 2,
    title: "Менеджер сниппетов",
    description:
      "Приложение для сохранения и редактирования сниппетов (часто переиспользуемых частей кода).",
    stacks: ["React", "JavaScript", "Vite", "localStorage"],
    demoHref: "https://rimpect.github.io/CodeSnippetManager/",
    githubHref: "https://github.com/Rimpect/CodeSnippetManager",
    screenshot: snippet,
  },
];

export const experience = [
  {
    id: 1,
    startYear: 2021,
    endYear: 2022,
    title: "Обучение в школе",
    description: "Изучал основы веб разработки",
  },
  {
    id: 2,
    startYear: 2022,
    endYear: 2026,
    title: "Обучение в вузе КГУ",
    description:
      "Участвовал в разработке веб-приложений в том числе и в интенсивах, изучал современные технологии фронтенда.",
  },
  {
    id: 3,
    startYear: 2026,
    title: "Изучаю Fullstack разработку",
    description:
      "Работаю над проектами на React и TypeScript, создаю интерфейсы и взаимодействую с REST API.",
  },
];

export const header = [
  {
    reference: "#about",
    label: "Обо мне",
  },
  {
    reference: "#skills",
    label: "Навыки",
  },
  {
    reference: "#projects",
    label: "Проекты",
  },
  {
    reference: "#experience",
    label: "Опыт",
  },
  {
    reference: "#books",
    label: "Книги",
  },
];

export const links = [
  // { label: "Email", href: "mailto:maksimvoronov789@gmail.com", primary: true }, лучше но если нет почтового сервиса, то ничего не происходит
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=maksimvoronov789@gmail.com",
    primary: true,
  },
  { label: "GitHub", href: "https://github.com/Rimpect" },
  { label: "Telegram", href: "https://t.me/Maxim_just_du_it" },
  {
    label: "hh.ru",
    href: "https://kostroma.hh.ru/resume/94482447ff0cfb53f30039ed1f777179534947",
  },
];
