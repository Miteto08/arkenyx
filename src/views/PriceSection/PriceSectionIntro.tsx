import { get } from '@/lib/i18n';
import styles from './PriceSection.module.scss';

export default function PriceSectionIntro() {
  return (
    <>
      <h2 id="tarifs-title" className={styles.heading}>{get<string>('home.price.title')}</h2>
      <p className={styles.subheading}>{get<string>('home.price.subheading')}</p>
      <div className={styles.deplacementNote} role="note">
        <p className={styles.deplacementNoteItem}>
          <strong>{get<string>('home.price.deplacementLabel')}</strong> {get<string>('home.price.deplacementText')}
        </p>
        <p className={styles.deplacementNoteItem}>
          <strong>{get<string>('home.price.paiementLabel')}</strong> {get<string>('home.price.paiementText')}
        </p>
      </div>
    </>
  );
}
