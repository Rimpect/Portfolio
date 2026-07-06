"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0 },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={ref} aria-hidden="true" />
      <a href="#top" className={styles.toTop} data-visible={isVisible}>
        <span className="visually-hidden">Наверх</span>
        <span aria-hidden="true">↑</span>
      </a>
    </div>
  );
}
