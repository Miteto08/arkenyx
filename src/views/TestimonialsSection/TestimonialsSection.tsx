import { get } from '@/lib/i18n';
import styles from './TestimonialsSection.module.scss';

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="avis" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className={styles.heading}>
          {get<string>('home.testimonials.title')}
        </h2>
        <p className={styles.intro}>{get<string>('home.testimonials.intro')}</p>
        <div className={styles.placeholder} role="status">
          <p>{get<string>('home.testimonials.placeholder')}</p>
        </div>
      </div>
    </section>
  );
}
