interface ExperienceItemProps {
  startYear: number;
  endYear?: number;
  title: string;
  description: string;
}

export function ExperienceItem({ startYear, endYear, title, description }: ExperienceItemProps) {
  return (
    <li>
      <time dateTime={startYear.toString()}>{startYear}</time> {" — "}
      {endYear ? <time dateTime={endYear.toString()}>{endYear}</time> : "н.в."}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
