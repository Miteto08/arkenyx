import { get } from '@/lib/i18n';
import styles from './IntroSection.module.scss';

export default function IntroSection() {
  return (
    <section className={styles.section} id="notre-activite" aria-labelledby="intro-title">
      <div className="container">
        <div className={styles.content}>
          <h2 id="intro-title" className={styles.title}>
            {get<string>('home.intro.title')}
          </h2>
          <p className={styles.text}>{get<string>('home.intro.text')}</p>
          <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label={get<string>('home.intro.ariaCta')}>
            {get<string>('home.intro.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
