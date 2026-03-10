import { get } from '@/lib/i18n';
import styles from './PriceSection.module.scss';

export default function PriceSectionIntro() {
  const title = get<string>('home.price.title');
  const subheading = get<string>('home.price.subheading');
  const deplacementLabel = get<string>('home.price.deplacementLabel');
  const deplacementText = get<string>('home.price.deplacementText');
  const paiementLabel = get<string>('home.price.paiementLabel');
  const paiementText = get<string>('home.price.paiementText');

  return (
    <>
      <h2 id="tarifs-title" className={styles.heading}>{title}</h2>
      <p className={styles.subheading}>{subheading}</p>
      <div className={styles.deplacementNote} role="note">
        <p className={styles.deplacementNoteItem}>
          <strong>{deplacementLabel}</strong> {deplacementText}
        </p>
        <p className={styles.deplacementNoteItem}>
          <strong>{paiementLabel}</strong> {paiementText}
        </p>
      </div>
    </>
  );
}
