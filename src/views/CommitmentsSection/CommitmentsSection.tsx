import { get } from '@/lib/i18n';
import styles from './CommitmentsSection.module.scss';

export default function CommitmentsSection() {
  const title = get<string>('home.commitments.title');
  const intro = get<string>('home.commitments.intro');
  const items = get<Array<{ label: string }>>('home.commitments.items');
  return (
    <section className={styles.section} id="engagements" aria-labelledby="commitments-title">
      <div className="container">
        <h2 id="commitments-title" className={styles.heading}>{title}</h2>
        <p className={styles.intro}>{intro}</p>
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
