import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';
import LegalContent from '@/views/LegalLayout/LegalContent';
import { get } from '@/lib/i18n';

const metaTitle = get<string>('legal.confidentialite.metaTitle');
const metaDescription = get<string>('legal.confidentialite.metaDescription');

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/politique-confidentialite/' },
  openGraph: { title: metaTitle, description: metaDescription },
};

export default function PolitiqueConfidentialitePage() {
  const data = get<{ title: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }>('legal.confidentialite');
  return (
    <Layout>
      <LegalLayout title={data.title}>
        <LegalContent intro={data.intro} sections={data.sections} />
      </LegalLayout>
    </Layout>
  );
}
