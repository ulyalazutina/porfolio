import styles from "./Main.module.css";

export default function Main() {
  return (
    <section className={styles.main} id="main">
      <img className={styles.img} src="./img/ulyana.jpg" alt="Моя фотография" />

      <div>
        <h1 className={styles.title}>Ульяна Лазутина</h1>
        <p className={styles.subtitle}>Junior frontend developer</p>
      </div>
    </section>
  );
}
