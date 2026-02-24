import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.links} aria-label="Mentions et conditions">
          <Link href="/mentions-legales/" className={styles.link}>
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite/" className={styles.link}>
            Confidentialité
          </Link>
          <Link href="/cgu/" className={styles.link}>
            CGU
          </Link>
          <Link href="/cgv/" className={styles.link}>
            CGV
          </Link>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Arkenyx. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
