'use client';

import { useState } from 'react';
import { priceGroups } from '@/models/prices';
import PriceSectionIntro from './PriceSectionIntro';
import PriceCard from './PriceCard';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import styles from './PriceSection.module.scss';

// Order for column-count layout: col1 = 1–2, col2 = 3–4, col3 = 5–6–7.
// Chosen so each column has similar total height (no empty gaps between cards).
const COLUMN_ORDER: string[] = [
  'depannage',    // col1
  'site-vitrine', // col1
  'forfaits',     // col2
  'conseil',      // col2
  'reseau',       // col3 (short)
  'recuperation', // col3
  'montage',      // col3
];

export default function PriceSection() {
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const groupsById = Object.fromEntries(priceGroups.map((g) => [g.id, g]));
  const orderedGroups = COLUMN_ORDER.map((id) => groupsById[id]).filter(Boolean);

  const toggleDetails = (key: string) => {
    setExpandedDetails((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section className={styles.section} id="tarifs" aria-labelledby="tarifs-title">
      <div className="container">
        <PriceSectionIntro />
        <div className={styles.grid}>
          {orderedGroups.map((group) => (
            <PriceCard
              key={group.id}
              group={group}
              expandedDetails={expandedDetails}
              onToggleDetails={toggleDetails}
            />
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <QuoteRequestButton />
        </div>
      </div>
    </section>
  );
}
