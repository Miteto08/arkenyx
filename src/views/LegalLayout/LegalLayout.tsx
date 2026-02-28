import Link from 'next/link';
import { get } from '@/lib/i18n';
import styles from './LegalLayout.module.scss';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <article className={styles.article}>
      <div className="container">
        <Link href="/" className={styles.back}>
          {get<string>('legalLayout.backLink')}
        </Link>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </div>
    </article>
  );
}
