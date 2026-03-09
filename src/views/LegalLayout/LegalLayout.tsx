import { get } from '@/lib/i18n';
import BackToHomeLink from '@/views/BackToHomeLink/BackToHomeLink';
import styles from './LegalLayout.module.scss';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <article className={styles.article}>
      <div className="container">
        <BackToHomeLink />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </div>
    </article>
  );
}
