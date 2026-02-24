import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">
      <div className="container">
        <h1 className={styles.title}>Arkenyx</h1>
        <p className={styles.tagline}>
          Stockage informatique, montage PC, nettoyage et récupération de données. Votre ordinateur mérite un suivi de confiance.
        </p>
      </div>
    </section>
  );
}
