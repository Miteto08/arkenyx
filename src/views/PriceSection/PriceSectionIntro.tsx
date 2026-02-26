import { priceIntro } from '@/models/prices';
import styles from './PriceSection.module.scss';

export default function PriceSectionIntro() {
  return (
    <>
      <h2 className={styles.heading}>Tarifs</h2>
      <p className={styles.subheading}>Tarifs clairs, sans surprise</p>
      <ul className={styles.introList} aria-label="Engagements">
        {priceIntro.map((text, i) => (
          <li key={i} className={styles.introItem}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
