import { skillsData } from "../../libs/skillsData";
import Stek from "../Stek/Stek";
import styles from "./Skills.module.css";

export default function Skills() {
  const arraySkillsUse = ['HTML', 'CSS', 'Java Script', 'SCSS', 'Git', 'Webpack'];
  const arraySkillsLearn = ['React', 'Type Script', 'Tailwind CSS', 'Styled-components'];
  const arrayTools = ['Github', 'Postman', 'Visual Studio Code'];

  const getSkills = (arraySkills:Array<string>) => {
    return skillsData.filter((item) =>
      arraySkills.some((value: string) => item.name.includes(value))
    );
  }

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Технологии, которыми я владею</h2>
        <div className={styles.items}>
          {getSkills(arraySkillsUse).map((item) => {
            return <Stek key={item.id} id={item.id} imgSrc={item.imgSrc} name={item.name} />
          })}
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Технологии, с которыми я знакома</h2>
        <div className={styles.items}>
        {getSkills(arraySkillsLearn).map((item) => {
            return <Stek key={item.id} id={item.id} imgSrc={item.imgSrc} name={item.name} />
          })}
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Инструменты, которые я использую</h2>
        <div className={styles.items}>
        {getSkills(arrayTools).map((item) => {
            return <Stek key={item.id} id={item.id} imgSrc={item.imgSrc} name={item.name} />
          })}
        </div>
      </div>
    </section>
  );
}
