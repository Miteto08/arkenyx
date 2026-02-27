import styles from './CommitmentsSection.module.scss';

const ITEMS = [
  { label: 'Service humain et fiable' },
  { label: 'Respect des données et confidentialité' },
  { label: 'Devis gratuit et clair avant toute intervention' },
  { label: 'Aucune intervention sans accord du client' },
  { label: 'Transparence totale sur les pièces et services' },
];

export default function CommitmentsSection() {
  return (
    <section className={styles.section} id="engagements" aria-labelledby="commitments-title">
      <div className="container">
        <h2 id="commitments-title" className={styles.heading}>Nos engagements</h2>
        <p className={styles.intro}>
          Nous nous engageons à fournir un service fiable, clair et professionnel à chaque intervention.
        </p>
        <ul className={styles.list} role="list">
          {ITEMS.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.icon} aria-hidden>✓</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
