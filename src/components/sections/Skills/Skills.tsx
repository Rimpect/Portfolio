import { Tag } from "@/components/ui/Tag/Tag";
import { SkillGroup } from "./SkillGroup/SkillGroup";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <p>{"// стек"}</p>
      <h2 id="skills-title">Чем я пользуюсь каждый день</h2>
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

      <div>
        <h3>Подход к коду</h3>
        <p>не только «пишу код», но и думаю о структуре и защите</p>
        <ul>
          <li>
            <Tag>Архитектура компонентов</Tag>
          </li>
          <li>
            <Tag>Безопасность (XSS / CSRF)</Tag>
          </li>
          <li>
            <Tag>Доступность (a11y)</Tag>
          </li>
          {/* возможно все же стоит убрать a11y */}
          <li>
            <Tag>Code review</Tag>
          </li>
        </ul>
      </div>

      <div>
        <div aria-hidden="true">↗</div>
        <h3>Сейчас изучаю</h3>
        <p>Next.js, тестирование (Jest + RTL) и основы бэкенда на Node.js</p>
      </div>
    </section>
  );
}
