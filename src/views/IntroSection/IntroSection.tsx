import styles from './IntroSection.module.scss';

export default function IntroSection() {
  return (
    <section className={styles.section} id="notre-activite" aria-labelledby="intro-title">
      <div className="container">
        <div className={styles.content}>
          <h2 id="intro-title" className={styles.title}>
            Une approche humaine du dépannage informatique
          </h2>
          <p className={styles.text}>
            Arkenyx est une micro-entreprise d’informatique de proximité. Notre
            rôle : que votre équipement reste fiable et vos données en sécurité —
            en réparant quand il le faut, en expliquant pour que vous compreniez,
            et en vous accompagnant sur la durée. Parce que votre PC — qu’il serve au travail, aux jeux, au
            streaming ou au quotidien — mérite de la confiance, pas seulement une
            intervention ponctuelle.
          </p>
          <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label="Nous contacter par e-mail">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
