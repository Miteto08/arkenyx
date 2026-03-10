'use client';

import { useState } from 'react';
import { priceGroups } from '@/models/prices';
import PriceSectionIntro from './PriceSectionIntro';
import PriceCard from './PriceCard';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import styles from './PriceSection.module.scss';

// Column order for layout: similar total height per column to avoid gaps between cards.
const COLUMN_ORDER: string[] = [
  'depannage',
  'site-vitrine',
  'forfaits',
  'conseil',
  'reseau',
  'recuperation',
  'montage',
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
