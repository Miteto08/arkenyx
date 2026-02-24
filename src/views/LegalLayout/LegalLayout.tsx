import Link from 'next/link';
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
          ← Retour à l&#39;accueil
        </Link>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </div>
    </article>
  );
}
