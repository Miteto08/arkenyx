import { get } from '@/lib/i18n';

interface FAQItem {
  categoryId: string;
  question: string;
  answer: string;
}

function buildFAQSchema() {
  const items = get<FAQItem[]>('faq.items');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export default function FAQSchema() {
  const schema = buildFAQSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
