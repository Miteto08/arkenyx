import styles from './IntroSection.module.scss';

export default function IntroSection() {
  return (
    <section className={styles.section} id="notre-activite">
      <div className="container">
        <h2 className={styles.title}>Qui sommes-nous ? Que faisons-nous ?</h2>
        <p className={styles.text}>
          Arkenyx est une micro-entreprise spécialisée dans l’informatique de proximité :
          stockage et montage PC, nettoyage matériel et logiciel, récupération de données
          et conseil. Nous intervenons pour que votre équipement reste fiable et que vos
          données soient en sécurité.
        </p>
      </div>
    </section>
  );
}
