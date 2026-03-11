'use client';

import { useState } from 'react';
import { priceGroups } from '@/models/prices';
import PriceSectionIntro from './PriceSectionIntro';
import PriceCard from './PriceCard';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import styles from './PriceSection.module.scss';

const COLUMN_1_IDS: string[] = ['site-vitrine', 'conseil'];
const COLUMN_2_IDS: string[] = ['recuperation', 'reseau', 'montage'];
const COLUMN_3_IDS: string[] = ['depannage', 'forfaits'];

const COLUMNS = [COLUMN_1_IDS, COLUMN_2_IDS, COLUMN_3_IDS];

export default function PriceSection() {
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const groupsById = Object.fromEntries(priceGroups.map((g) => [g.id, g]));

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
          {COLUMNS.map((columnIds, colIndex) => (
            <div key={colIndex} className={styles.gridColumn}>
              {columnIds.map((id) => {
                const group = groupsById[id];
                if (!group) return null;
                return (
                  <PriceCard
                    key={group.id}
                    group={group}
                    expandedDetails={expandedDetails}
                    onToggleDetails={toggleDetails}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <QuoteRequestButton />
        </div>
      </div>
    </section>
  );
}
