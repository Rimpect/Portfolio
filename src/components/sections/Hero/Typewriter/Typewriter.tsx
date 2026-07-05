"use client";

import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

interface TypewriterProps {
  words: string[];
}

// Скорости в миллисекундах
const TYPE_SPEED = 90; // печать одного символа
const DELETE_SPEED = 45; // удаление одного символа
const PAUSE_END = 1400; // пауза, когда слово допечатано
const PAUSE_START = 300; // пауза перед новым словом

export function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    let delay = deleting ? DELETE_SPEED : TYPE_SPEED;
    if (!deleting && text === current) delay = PAUSE_END;
    if (deleting && text === "") delay = PAUSE_START;
    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <>
      {text}
      <span className={styles.cursor} aria-hidden="true" />
    </>
  );
}
