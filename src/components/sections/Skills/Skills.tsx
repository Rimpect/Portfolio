import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Tag } from "@/components/ui/Tag/Tag";
import { SkillGroup } from "./SkillGroup/SkillGroup";
import styles from "./Skills.module.css";
import { stack } from "@/data/resume";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className={styles.skills}
    >
      <SectionHeading
        eyebrow="// стек"
        title="Чем я пользуюсь каждый день"
        id="skills-title"
      />

      <div className={styles.groups}>
        {stack.map(({ category, items }) => (
          <SkillGroup key={category} title={category} items={items} />
        ))}
      </div>

      <div className={styles.extra}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Подход к коду</h3>
          <p className={styles.blockDesc}>
            не только «пишу код», но и думаю о структуре и защите
          </p>
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
          <div className={styles.learn}>
            <div className={styles.learnIcon} aria-hidden="true">
              ↗
            </div>
            <div>
              <h3 className={styles.blockTitle}>Сейчас изучаю</h3>
              <p className={styles.blockDesc}>
                Next.js, тестирование (Jest + RTL) и основы бэкенда на Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
