import { get } from '@/lib/i18n';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className={styles.heading}>{get<string>('home.contact.title')}</h2>
        <p className={styles.text}>{get<string>('home.contact.text')}</p>
        <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label={get<string>('home.contact.ariaCta')}>
          {get<string>('home.contact.cta')}
        </a>
      </div>
    </section>
  );
}
