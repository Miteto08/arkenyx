import Link from 'next/link';
import { get } from '@/lib/i18n';
import styles from './Footer.module.scss';

export default function Footer() {
  const copyright = get<string>('common.footer.copyright').replace('{year}', String(new Date().getFullYear()));
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.links} aria-label="Mentions et conditions">
          <Link href="/mentions-legales/" className={styles.link}>
            {get<string>('common.footer.mentionsLegales')}
          </Link>
          <Link href="/politique-confidentialite/" className={styles.link}>
            {get<string>('common.footer.confidentialite')}
          </Link>
          <Link href="/cgu/" className={styles.link}>
            {get<string>('common.footer.cgu')}
          </Link>
          <Link href="/cgv/" className={styles.link}>
            {get<string>('common.footer.cgv')}
          </Link>
        </nav>
        <p className={styles.madeWith}>{get<string>('common.footer.madeWith')}</p>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}
