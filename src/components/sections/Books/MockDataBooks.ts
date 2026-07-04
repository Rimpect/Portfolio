export type BookStatus = "done" | "reading" | "planned";

export interface Book {
  id: number;
  title: string;
  category: string;
  status: BookStatus;
  note: string;
}

export const books: Book[] = [
  { id: 1, title: "…", category: "JavaScript", status: "reading", note: "…" },
  { id: 2, title: "…", category: "JavaScript", status: "done", note: "…" },
  { id: 3, title: "…", category: "JavaScript", status: "reading", note: "…" },
  { id: 4, title: "…", category: "JavaScript", status: "planned", note: "…" },
];
