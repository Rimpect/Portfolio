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
    "Junior-разработчик из Москвы. Верстаю адаптивные интерфейсы на React + TypeScript, слежу за чистотой кода и деталями. Готов расти в сильной команде.",
  stats: [
    { value: "1.5 года", label: "пишу на JavaScript" },
    { value: "12+", label: "пет-проектов на GitHub" },
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
    value: "Москва / удалёнка",
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
    title: "TaskFlow",
    description:
      "Канбан-менеджер задач с drag & drop, тёмной темой и сохранением в localStorage.",
    stacks: ["React", "TypeScript", "DnD"],
    demoHref: "#",
    githubHref: "#",
    screenshotLabel: "скриншот · TaskFlow",
  },
  {
    id: 2,
    title: "Погода сейчас",
    description:
      "Приложение для отображения текущей погоды в выбранном городе.",
    stacks: ["React", "TypeScript", "OpenWeather API"],
    demoHref: "#",
    githubHref: "#",
    screenshotLabel: "скриншот · Погода сейчас",
  },
  {
    id: 3,
    title: "Магазин-лендинг",
    description:
      "Лендинг для интернет-магазина с адаптивным дизайном и интеграцией платежных систем.",
    stacks: ["React", "TypeScript", "Stripe API"],
    demoHref: "#",
    githubHref: "#",
    screenshotLabel: "скриншот · Магазин-лендинг",
  },
];

export const experience = [
  {
    id: 1,
    startYear: 2019,
    title: "Обучение в университете",
    description:
      "Изучал основы программирования, алгоритмы и структуры данных, участвовал в проектах по разработке ПО.",
  },
  {
    id: 2,
    startYear: 2021,
    endYear: 2023,
    title: "Курс «Frontend-разработчик",
    description:
      "Участвовал в разработке веб-приложений, изучал современные технологии фронтенда.",
  },
  {
    id: 3,
    startYear: 2023,
    title: "Фриланс, вёрстка и мелкие SPA",
    description:
      "Работаю над проектами на React и TypeScript, создаю интерфейсы и взаимодействую с REST API.",
  },
];
