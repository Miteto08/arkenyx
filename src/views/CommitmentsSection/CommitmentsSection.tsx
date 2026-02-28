import { get } from '@/lib/i18n';
import styles from './CommitmentsSection.module.scss';

export default function CommitmentsSection() {
  const items = get<Array<{ label: string }>>('home.commitments.items');
  return (
    <section className={styles.section} id="engagements" aria-labelledby="commitments-title">
      <div className="container">
        <h2 id="commitments-title" className={styles.heading}>{get<string>('home.commitments.title')}</h2>
        <p className={styles.intro}>{get<string>('home.commitments.intro')}</p>
        <ul className={styles.list} role="list">
          {items.map((item, i) => (
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
