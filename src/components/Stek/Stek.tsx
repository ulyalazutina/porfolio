import styles from "./Stek.module.css";

type StekType = {
  id: number;
  imgSrc: string;
  name: string;
};

export default function Stek({ id, imgSrc, name }: StekType) {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={imgSrc} alt={name} />
      <p className={styles.text}>{name}</p>
    </div>
  );
}
