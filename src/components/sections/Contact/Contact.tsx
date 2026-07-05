import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className={styles.contact}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>{"// давайте работать вместе"}</p>
        <h2 id="contact-title" className={styles.title}>
          Ищу первую работу в дружной команде
        </h2>
        <p className={styles.description}>
          Открыт к стажировкам и junior-позициям. Напишите — отвечу в течение дня.
        </p>
        <ul className={styles.links}>
          <li>
            <a className={styles.primary} href="mailto:username.email@example.com">
              Email
            </a>
          </li>
          <li>
            <a
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/username"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/username"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
