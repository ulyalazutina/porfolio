import Item from "../Item/Item";
import styles from "./Projects.module.css";
import TabNav from "../TabNav/TabNav";
import { useState } from "react";
import { Category, ProjectsData } from "../../libs/projectsData";

export default function Projects() {
  const [getId, setId] = useState<string>("HTML");
  const handleClick = (id: string) => {
    setId(id);
  };

  const getProjects = () => {
    return ProjectsData.filter((item) => getId === item.category);
  };
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Проекты</h2>
      <fieldset className={styles.tabs} name="tabs">
        <TabNav
          id={Category.HTML}
          text={"HTML"}
          name={"tabs"}
          onClick={() => {
            handleClick(Category.HTML);
          }}
        />
        <TabNav
          id={Category.REACT}
          text={"React"}
          name={"tabs"}
          onClick={() => {
            handleClick(Category.REACT);
          }}
        />
        <TabNav
          id={Category.PREPROCESSORS}
          text={"Препроцессоры"}
          name={"tabs"}
          onClick={() => {
            handleClick(Category.PREPROCESSORS);
          }}
        />
        <TabNav
          id={Category.BUILDERS}
          text={"Сборщики"}
          name={"tabs"}
          onClick={() => {
            handleClick(Category.BUILDERS);
          }}
        />
      </fieldset>
      <div className={styles.items}>
        {getProjects().map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              imgSrc={item.imgSrc}
              imgMobileSrc={item.imgMobileSrc}
              title={item.title}
              desc={item.desc}
              linkGithub={item.linkGithub}
              linkWebsite={item.linkWebsite}
              skills={item.skills}
            />
          );
        })}
      </div>
    </section>
  );
}
