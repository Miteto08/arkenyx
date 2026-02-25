import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">
      <div className="container">
        <h1 className={styles.slogan}>
          Arkenyx — Réparer, expliquer, faire durer.
        </h1>
      </div>
    </section>
  );
}
