import { get } from '@/lib/i18n';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  const title = get<string>('home.contact.title');
  const text = get<string>('home.contact.text');
  const cta = get<string>('home.contact.cta');
  const ariaCta = get<string>('home.contact.ariaCta');
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className={styles.heading}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label={ariaCta}>
          {cta}
        </a>
      </div>
    </section>
  );
}
