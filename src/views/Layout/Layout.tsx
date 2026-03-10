import dynamic from 'next/dynamic';
import Header from '@/views/Header/Header';
import Footer from '@/views/Footer/Footer';
import { get } from '@/lib/i18n';
import styles from './Layout.module.scss';

const BackToTop = dynamic(
  () => import('@/views/BackToTop/BackToTop').then((m) => m.default),
  { ssr: false }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const skipToContent = get<string>('common.skipToContent');
  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        {skipToContent}
      </a>
      <Header />
      <main id="main-content" className={styles.main} role="main">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
