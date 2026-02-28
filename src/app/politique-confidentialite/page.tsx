import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';
import LegalContent from '@/views/LegalLayout/LegalContent';
import { get } from '@/lib/i18n';

export const metadata: Metadata = {
  title: get<string>('legal.confidentialite.metaTitle'),
  description: get<string>('legal.confidentialite.metaDescription'),
  openGraph: {
    title: get<string>('legal.confidentialite.metaTitle'),
    description: get<string>('legal.confidentialite.metaDescription'),
  },
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
