import { get } from '@/lib/i18n';
import styles from './WhyChooseUsSection.module.scss';

export default function WhyChooseUsSection() {
  const points = get<string[]>('home.whyChooseUs.points');
  return (
    <section className={styles.section} id="pourquoi-nous" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className={styles.heading}>{get<string>('home.whyChooseUs.title')}</h2>
        <p className={styles.intro}>{get<string>('home.whyChooseUs.intro')}</p>
        <ul className={styles.list} role="list">
          {points.map((point, i) => (
            <li key={i} className={styles.item}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
