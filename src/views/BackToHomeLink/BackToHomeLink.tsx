import Link from 'next/link';
import { get } from '@/lib/i18n';
import { IconArrowLeft } from '@/components/Icons';
import styles from './BackToHomeLink.module.scss';

export default function BackToHomeLink() {
  const backLinkLabel = get<string>('legalLayout.backLink');
  return (
    <Link href="/" className={styles.back} aria-label={backLinkLabel}>
      <span className={styles.arrow} aria-hidden>
        <IconArrowLeft />
      </span>
      <span className={styles.text}>{backLinkLabel}</span>
    </Link>
  );
}
