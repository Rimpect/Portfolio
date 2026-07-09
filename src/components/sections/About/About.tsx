import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { facts } from "@/data/resume";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.about}>
      <SectionHeading
        eyebrow="// обо мне"
        title="Пишу интерфейсы, за которые не стыдно — безопасные, удобные, аккуратные"
        id="about-title"
      />

      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            Frontend-разработчик, выпускник <strong>КГУ</strong> по направлению
            «Информационные системы и технологии» (2026). Программирую каждый
            день: начинал с чистого HTML/CSS, сейчас уверенно собираю SPA на{" "}
            <strong>React + TypeScript</strong>, работаю с{" "}
            <strong>Next.js</strong> и REST API.
          </p>
          <p>
            Есть <strong>full-stack</strong>-опыт: писал бэкенды на Node.js
            (Hono) и Python (FastAPI), работал с PostgreSQL, Redis и Docker,
            настраивал CI/CD на GitHub Actions. Участвовал в трёх учебных
            интенсивах как разработчик, на одном —{" "}
            <strong>техническим тимлидом</strong>: Scrum, daily-митинги,
            распределение задач и code review через Pull Requests.
          </p>
          <p>
            На первое место ставлю <strong>безопасность</strong> и{" "}
            <strong>UX/UI</strong>: на практике делал JWT-авторизацию,
            хэширование паролей и ограничение частоты запросов (rate limiting),
            разбираюсь в типовых уязвимостях (XSS, CSRF) и умею защищаться.
            Интерфейс проектирую так, чтобы им было удобно пользоваться, и люблю
            продуманную <strong>архитектуру кода</strong> — структуру
            компонентов и данных, а не просто «чтобы работало».
          </p>
          <p>
            Кстати, этот сайт-визитку собрал сам —{" "}
            <strong>Next.js (App Router) + TypeScript</strong>, адаптивная
            вёрстка, доступность (a11y), SEO и автодеплой на GitHub Pages. Ищу
            позицию frontend-разработчика (стажировка / junior), где смогу
            применять и углублять навыки в React-экосистеме.
          </p>
        </div>

        <div className={styles.facts}>
          <p className={styles.factsCaption}>быстрые факты</p>
          <dl className={styles.factsList}>
            {facts.map(({ label, value }) => (
              <div key={label} className={styles.factRow}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
