import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil" aria-label="Accueil">
      <div className="container">
        <h1 className={styles.slogan}>
          Arkenyx — Réparer, expliquer, faire durer.
        </h1>
      </div>
    </section>
  );
}
