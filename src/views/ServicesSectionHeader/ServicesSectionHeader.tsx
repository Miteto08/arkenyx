import styles from './ServicesSectionHeader.module.scss';

export default function ServicesSectionHeader() {
  return (
    <div className={styles.header}>
      <div className="container">
        <h2 className={styles.heading}>Nos services</h2>
        <p className={styles.intro}>
          Des prestations adaptées à vos besoins, expliquées simplement.
        </p>
      </div>
    </div>
  );
}
