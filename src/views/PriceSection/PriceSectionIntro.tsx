import styles from './PriceSection.module.scss';

export default function PriceSectionIntro() {
  return (
    <>
      <h2 id="tarifs-title" className={styles.heading}>Tarifs</h2>
      <p className={styles.subheading}>Tarifs clairs, sans surprise</p>
    </>
  );
}
