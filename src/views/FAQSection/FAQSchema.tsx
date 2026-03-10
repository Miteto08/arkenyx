'use client';

import { useMemo } from 'react';
import { FAQ_ITEMS } from '@/models/faq';

function buildFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
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
  const schemaJson = useMemo(() => JSON.stringify(buildFAQSchema()), []);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
    />
  );
}
