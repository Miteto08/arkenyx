import type { Metadata } from 'next';
import { Suspense } from 'react';
import { get } from '@/lib/i18n';
import Layout from '@/views/Layout/Layout';
import BackToHomeLink from '@/views/BackToHomeLink/BackToHomeLink';
import AllReviewsList from '@/views/AllReviewsPage/AllReviewsList';
import styles from '@/views/AllReviewsPage/AllReviewsPage.module.scss';

const metaTitle = get<string>('home.avisPage.metaTitle');
const metaDescription = get<string>('home.avisPage.metaDescription');

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/avis/' },
  openGraph: { title: metaTitle, description: metaDescription, url: '/avis/' },
};

export default function AvisPage() {
  return (
    <Layout>
      <section className={styles.section} aria-labelledby="avis-page-title">
        <div className="container">
          <BackToHomeLink />
          <Suspense fallback={<p className={styles.loading}>{get<string>('home.avisPage.loading')}</p>}>
            <AllReviewsList />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
}
