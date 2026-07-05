import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./About.module.css";
import { facts } from "@/data/resume";

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
            После школы сразу пошёл в разработку — фронтенд был осознанным
            выбором, а не сменой профессии. С тех пор каждый день пишу код:
            начинал с чистого HTML/CSS, сейчас уверенно собираю SPA на React с
            TypeScript и работаю с REST API.
          </p>
          <p>
            На первое место ставлю <strong>безопасность</strong> и{" "}
            <strong>UX/UI</strong>: разбираюсь в типичных уязвимостях
            веб-приложений (XSS, CSRF) и умею защищаться от них, а интерфейс
            проектирую так, чтобы им было удобно пользоваться. Отдельно люблю{" "}
            <strong>архитектуру кода</strong> — продумываю структуру компонентов
            и данных, а не просто «чтобы работало».
          </p>
          <p>
            Ценю аккуратную вёрстку, читаемую структуру и внимание к деталям.
            Быстро учусь и легко разбираюсь в чужом коде.
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
