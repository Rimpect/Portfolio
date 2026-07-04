interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "done" | "reading" | "planned";
}

export function Tag({ children, variant = "default" }: TagProps) {
  return <span data-variant={variant}>{children}</span>;
}
