import Link from 'next/link';
import { get } from '@/lib/i18n';
import styles from './not-found.module.scss';

const notFoundTitle = get<string>('notFound.title');

export const metadata = {
  title: notFoundTitle,
};

export default function NotFound() {
  return (
    <div className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>{notFoundTitle}</h1>
      <p className={styles.description}>{get<string>('notFound.description')}</p>
      <Link href="/" className={styles.backLink}>
        {get<string>('notFound.backLink')}
      </Link>
    </div>
  );
}
