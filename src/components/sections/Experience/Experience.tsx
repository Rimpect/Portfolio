import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Experience.module.css";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={styles.experience}>
      <SectionHeading eyebrow="// путь" title="Опыт и обучение" id="experience-title" />

      <ol className={styles.timeline}>
        <ExperienceItem
          startYear={2023}
          title="Фронтенд-разработчик"
          description="Работаю над проектами на React и TypeScript, создаю интерфейсы и взаимодействую с REST API."
        />
        <ExperienceItem
          startYear={2021}
          endYear={2023}
          title="Стажёр фронтенд-разработчик"
          description="Участвовал в разработке веб-приложений, изучал современные технологии фронтенда."
        />
        <ExperienceItem
          startYear={2019}
          title="Обучение в университете"
          description="Изучал основы программирования, алгоритмы и структуры данных, участвовал в проектах по разработке ПО."
        />
      </ol>
    </section>
  );
}
