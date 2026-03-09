import Link from 'next/link';
import { get } from '@/lib/i18n';
import styles from './BackToHomeLink.module.scss';

export default function BackToHomeLink() {
  return (
    <Link href="/" className={styles.back} aria-label={get<string>('legalLayout.backLink')}>
      <span className={styles.arrow} aria-hidden>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </span>
      <span className={styles.text}>{get<string>('legalLayout.backLink')}</span>
    </Link>
  );
}
