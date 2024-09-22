import styles from "./TabNav.module.css";

type TabNav = {
    id: string,
    text: string,
    name: string,
    onClick: (e:any)=>void
}

export default function TabNav({id, text, name, onClick}:TabNav) {
  return (
      <label  className={styles.tab} htmlFor={id}>
        {text}
        <input onClick={onClick}  type="radio" id={id} name={name}/>
      </label>
  );
}
