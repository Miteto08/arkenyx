import styles from './PriceSection.module.scss';

export default function PriceSectionIntro() {
  return (
    <>
      <h2 id="tarifs-title" className={styles.heading}>Tarifs</h2>
      <p className={styles.subheading}>Tarifs clairs, sans surprise</p>
      <div className={styles.deplacementNote} role="note">
        <p className={styles.deplacementNoteItem}>
          <strong>Déplacement :</strong> gratuit dans un rayon de 10 km autour d’Ahouillé ; au-delà, 0,50 €/km. À préciser sur le devis.
        </p>
        <p className={styles.deplacementNoteItem}>
          <strong>Paiement :</strong> carte bancaire, virement et espèces. Chèques non acceptés.
        </p>
      </div>
    </>
  );
}
