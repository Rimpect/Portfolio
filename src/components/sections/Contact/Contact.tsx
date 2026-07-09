import styles from "./Contact.module.css";
import { links } from "@/data/resume";
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={styles.contact}
    >
      <div className={styles.card}>
        <p className={styles.eyebrow}>{"// давайте работать вместе"}</p>
        <h2 id="contact-title" className={styles.title}>
          Ищу первую работу в дружной команде
        </h2>
        <p className={styles.description}>
          Открыт к стажировкам и junior-позициям. Напишите — отвечу в течение
          дня.
        </p>
        <ul className={styles.links}>
          {links.map(({ label, href, primary }) => (
            <li key={label}>
              <a
                href={href}
                className={primary ? styles.primary : styles.secondary}
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
