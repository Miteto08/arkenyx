import styles from './WhyChooseUsSection.module.scss';

const POINTS = [
  'Expertise locale et proximité : intervention rapide sur votre PC.',
  'Transparence totale sur les prix et interventions.',
  'Explication claire de chaque opération.',
  'Suivi sur la durée pour prolonger la vie de votre matériel.',
  'Sécurité et confidentialité de vos données.',
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section} id="pourquoi-nous" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className={styles.heading}>Pourquoi nous choisir ?</h2>
        <p className={styles.intro}>
          Chez Arkenyx, nous mettons l’humain et la transparence au cœur de notre activité. Voici ce qui nous différencie :
        </p>
        <ul className={styles.list} role="list">
          {POINTS.map((point, i) => (
            <li key={i} className={styles.item}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
