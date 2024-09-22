import styles from "./Skill.module.css";

type SkillsType = {
    id: number,
    imgSrc: string,
    name: string,
}
export default function Skill( {id, imgSrc, name}:SkillsType) {
  return (
    <div className={styles.skill}>
        <img className={styles.skillImg} src={imgSrc} alt={name} />
        <p className={styles.text}>{name}</p>
    </div>
  );
}
