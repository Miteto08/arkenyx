import { get } from '@/lib/i18n';
import styles from './Hero.module.scss';

export default function Hero() {
  const ariaLabel = get<string>('home.hero.ariaLabel');
  const slogan = get<string>('home.hero.slogan');
  return (
    <section className={styles.hero} id="accueil" aria-label={ariaLabel}>
      <div className="container">
        <h1 className={styles.slogan}>{slogan}</h1>
      </div>
    </section>
  );
}
