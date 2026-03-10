import { get } from '@/lib/i18n';
import styles from './IntroSection.module.scss';

export default function IntroSection() {
  const title = get<string>('home.intro.title');
  const text = get<string>('home.intro.text');
  const cta = get<string>('home.intro.cta');
  const ariaCta = get<string>('home.intro.ariaCta');
  return (
    <section className={styles.section} id="notre-activite" aria-labelledby="intro-title">
      <div className="container">
        <div className={styles.content}>
          <h2 id="intro-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label={ariaCta}>
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
