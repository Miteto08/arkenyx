import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';
import LegalContent from '@/views/LegalLayout/LegalContent';
import { get } from '@/lib/i18n';

export const metadata: Metadata = {
  title: get<string>('legal.mentions.metaTitle'),
  description: get<string>('legal.mentions.metaDescription'),
  alternates: { canonical: '/mentions-legales/' },
  openGraph: {
    title: get<string>('legal.mentions.metaTitle'),
    description: get<string>('legal.mentions.metaDescription'),
  },
};

export default function MentionsLegalesPage() {
  const data = get<{ title: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }>('legal.mentions');
  return (
    <Layout>
      <LegalLayout title={data.title}>
        <LegalContent intro={data.intro} sections={data.sections} />
      </LegalLayout>
    </Layout>
  );
}
