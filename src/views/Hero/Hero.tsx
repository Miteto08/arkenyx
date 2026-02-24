import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">
      <div className="container">
        <h1 className={styles.title} style={{ color: '#ffffff' }}>
          Arkenyx
        </h1>
        <p className={styles.tagline} style={{ color: '#ffffff' }}>
          Votre ordinateur mérite un suivi de confiance.
        </p>
      </div>
    </section>
  );
}
