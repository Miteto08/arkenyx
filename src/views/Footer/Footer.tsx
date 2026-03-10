import Link from 'next/link';
import { get } from '@/lib/i18n';
import styles from './Footer.module.scss';

export default function Footer() {
  const navAria = get<string>('common.footer.navAria');
  const mentionsLegales = get<string>('common.footer.mentionsLegales');
  const confidentialite = get<string>('common.footer.confidentialite');
  const cgu = get<string>('common.footer.cgu');
  const cgv = get<string>('common.footer.cgv');
  const madeWith = get<string>('common.footer.madeWith');
  const copyright = get<string>('common.footer.copyright').replace(
    '{year}',
    String(new Date().getFullYear())
  );

  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.links} aria-label={navAria}>
          <Link href="/mentions-legales/" className={styles.link}>
            {mentionsLegales}
          </Link>
          <Link href="/politique-confidentialite/" className={styles.link}>
            {confidentialite}
          </Link>
          <Link href="/cgu/" className={styles.link}>
            {cgu}
          </Link>
          <Link href="/cgv/" className={styles.link}>
            {cgv}
          </Link>
        </nav>
        <p className={styles.madeWith}>{madeWith}</p>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}
