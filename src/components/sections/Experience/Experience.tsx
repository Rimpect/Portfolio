import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { experience } from "@/data/resume";
import styles from "./Experience.module.css";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={styles.experience}>
      <SectionHeading eyebrow="// путь" title="Опыт и обучение" id="experience-title" />

      <ol className={styles.timeline}>
        {[...experience].reverse().map(({ id, startYear, endYear, title, description }) => (
          <ExperienceItem
            key={id}
            startYear={startYear}
            endYear={endYear}
            title={title}
            description={description}
          />
        ))}
      </ol>
    </section>
  );
}
