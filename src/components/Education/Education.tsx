import EducationBlock from "../EducationBlock/EducationBlock";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.title}>Образование</h2>
      <div className={styles.items}>
        <EducationBlock year={"2019 - 2023"} major={"Программирование в компьютерных системах"} place={"Нижневартовский социально-гуманитарный колледж"} />
        <EducationBlock year={"2023 - 2024"} major={"Веб-разработка"} place={"Skypro"} />
      </div>
    </section>
  );
}
