import Image from 'next/image';
import ThemeToggle from '@/views/ThemeToggle/ThemeToggle';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <a href="/" className={styles.logo} aria-label="Arkenyx, accueil">
          <Image
            src="/arkenyx-logo.png"
            alt="Arkenyx"
            width={420}
            height={120}
            priority
            unoptimized
            className={styles.logoImg}
          />
        </a>
        <div className={styles.rightRow}>
          <nav className={styles.nav} aria-label="Navigation principale">
            <a href="#notre-activite">Notre activité</a>
            <a href="#services">Services</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#contact">Contact</a>
          </nav>
          <QuoteRequestButton className={styles.cta} />
          <div className={styles.themeToggleWrap}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
