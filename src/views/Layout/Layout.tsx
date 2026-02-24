import Header from '@/views/Header/Header';
import Footer from '@/views/Footer/Footer';
import styles from './Layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
