import { get } from '@/lib/i18n';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil" aria-label={get<string>('home.hero.ariaLabel')}>
      <div className="container">
        <h1 className={styles.slogan}>{get<string>('home.hero.slogan')}</h1>
      </div>
    </section>
  );
}
