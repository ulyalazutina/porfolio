import { skillsData } from "../../libs/skillsData";
import Skill from "../Skill/Skill";
import styles from "./Item.module.css";


type ItemType = {
  id: number;
  imgSrc: string;
  imgMobileSrc: string;
  title: string;
  desc: string;
  linkGithub: string;
  linkWebsite: string;
  skills: Array<string>;
};

export default function Item({
  id,
  imgSrc,
  imgMobileSrc,
  title,
  desc,
  linkGithub,
  linkWebsite,
  skills,
}: ItemType) {
  const getSkills = (arraySkills: Array<string>) => {
    return skillsData.filter((item) =>
      arraySkills.some((value: string) => item.name === value)
    );
  };

  const getDescList = (desc: string) => {
    const result = desc
      .split(".")
      .filter((item) => item !== "")
      .map((item) => item.trim());

    return result
  };
  
  return (
    <div className={styles.item}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={imgSrc} alt={`Проект ${id}`} />
        {imgMobileSrc !== "" && (
          <img
            className={styles.imgMobile}
            src={imgMobileSrc}
            alt={`Проект ${id}`}
          />
        )}
      </div>
      <div className={styles.desc}>
        <h3 className={styles.heading}>{title}</h3>
        <ul className={styles.list}>
          {getDescList(desc).map((item) => {
            return <li className={styles.li}>{item}</li>
          })
          }
        </ul>
        <p className={styles.text}>Посмотреть</p>
        <div className={styles.linksBox}>
          <a target="blank" className={styles.link} href={linkGithub}>
            Gitnub
          </a>
          <a target="blank" className={styles.link} href={linkWebsite}>
            Сайт
          </a>
        </div>
      </div>
      <div className={styles.skills}>
      <p className={styles.text}>Стек</p>
        <div className={styles.skillsBox}>
          {getSkills(skills).map((item) => {
            return (
              <Skill
                key={item.id}
                id={item.id}
                imgSrc={item.imgSrc}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
