import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Tag } from "@/components/ui/Tag/Tag";
import { SkillGroup } from "./SkillGroup/SkillGroup";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className={styles.skills}>
      <SectionHeading eyebrow="// стек" title="Чем я пользуюсь каждый день" id="skills-title" />

      <div className={styles.groups}>
        <SkillGroup title="Языки" items={["JavaScript", "TypeScript", "HTML", "CSS"]} />
        <SkillGroup
          title="Вёрстка и стили"
          items={["HTML5", "CSS3", "SCSS / Sass", "CSS Modules", "Tailwind"]}
        />
        <SkillGroup
          title="Фреймворки"
          items={["React", "React Router", "Redux Toolkit", "Zustand"]}
        />
        <SkillGroup title="Инструменты" items={["Git / GitHub", "Vite", "Figma", "REST API"]} />
      </div>

      <div className={styles.extra}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Подход к коду</h3>
          <p className={styles.blockDesc}>не только «пишу код», но и думаю о структуре и защите</p>
          <ul className={styles.blockList}>
            <li>
              <Tag>Архитектура компонентов</Tag>
            </li>
            <li>
              <Tag>Безопасность (XSS / CSRF)</Tag>
            </li>
            <li>
              <Tag>Доступность</Tag>
            </li>
            <li>
              <Tag>Code review</Tag>
            </li>
          </ul>
        </div>

        <div className={styles.block}>
          <div className={styles.learnIcon} aria-hidden="true">
            ↗
          </div>
          <h3 className={styles.blockTitle}>Сейчас изучаю</h3>
          <p className={styles.blockDesc}>
            Next.js, тестирование (Jest + RTL) и основы бэкенда на Node.js
          </p>
        </div>
      </div>
    </section>
  );
}
