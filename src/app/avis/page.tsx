import type { Metadata } from 'next';
import { get } from '@/lib/i18n';
import Layout from '@/views/Layout/Layout';
import BackToHomeLink from '@/views/BackToHomeLink/BackToHomeLink';
import AllReviewsList from '@/views/AllReviewsPage/AllReviewsList';
import styles from '@/views/AllReviewsPage/AllReviewsPage.module.scss';

export const metadata: Metadata = {
  title: get<string>('home.avisPage.metaTitle'),
  description: get<string>('home.avisPage.metaDescription'),
  alternates: { canonical: '/avis/' },
  openGraph: {
    title: get<string>('home.avisPage.metaTitle'),
    description: get<string>('home.avisPage.metaDescription'),
  },
};

export default function AvisPage() {
  const title = get<string>('home.avisPage.title');
  const intro = get<string>('home.avisPage.intro');

  return (
    <Layout>
      <section className={styles.section} aria-labelledby="avis-page-title">
        <div className="container">
          <BackToHomeLink />
          <header className={styles.header}>
            <h1 id="avis-page-title" className={styles.title}>
              {title}
            </h1>
            <p className={styles.intro}>{intro}</p>
          </header>
          <AllReviewsList />
        </div>
      </section>
    </Layout>
  );
}
