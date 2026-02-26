'use client';

import { Fragment, useState } from 'react';
import { priceGroups, priceIntro } from '@/models/prices';
import styles from './PriceSection.module.scss';

function getDetailsKey(groupId: string, itemIndex: number) {
  return `${groupId}-${itemIndex}`;
}

const COLUMN_ORDER: string[] = [
  'depannage',
  'conseil',
  'forfaits',
  'montage',
  'recuperation',
  'reseau',
  'site-vitrine',
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
    <section className={styles.section} id="tarifs">
      <div className="container">
        <h2 className={styles.heading}>Tarifs</h2>
        <p className={styles.subheading}>Tarifs clairs, sans surprise</p>
        <ul className={styles.introList} aria-label="Engagements">
          {priceIntro.map((text, i) => (
            <li key={i} className={styles.introItem}>
              {text}
            </li>
          ))}
        </ul>
        <div className={styles.grid}>
          {orderedGroups.map((group) => (
            <article key={group.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              {group.intro &&
                group.intro.split('\n\n').filter(Boolean).map((paragraph, k) => (
                  <p key={k} className={styles.cardIntro}>
                    {paragraph}
                  </p>
                ))}
              <ul className={styles.itemList}>
                {group.items.map((item, i) => (
                  <Fragment key={i}>
                    {item.separatorBefore && (
                      <li className={styles.itemSeparator} aria-hidden>
                        <span className={styles.separatorLine} />
                      </li>
                    )}
                    <li
                      className={`${styles.item} ${item.recommended ? styles.itemRecommended : ''}`}
                    >
                    {item.recommended && (
                      <span className={styles.recommendedBadge} aria-hidden>
                        Recommandé
                      </span>
                    )}
                    <div className={styles.itemHeader}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    {item.details && item.details.length > 0 && (
                      <div className={styles.detailsToggle}>
                        <button
                          type="button"
                          className={styles.detailsTrigger}
                          onClick={() => toggleDetails(getDetailsKey(group.id, i))}
                          aria-expanded={expandedDetails.has(getDetailsKey(group.id, i))}
                          aria-controls={`details-${group.id}-${i}`}
                          id={`trigger-${group.id}-${i}`}
                        >
                          <span
                            className={`${styles.detailsChevron} ${expandedDetails.has(getDetailsKey(group.id, i)) ? styles.detailsChevronOpen : ''}`}
                            aria-hidden
                          >
                            ▼
                          </span>
                          <span className={styles.detailsTriggerText}>Plus de détails</span>
                        </button>
                        <div
                          id={`details-${group.id}-${i}`}
                          role="region"
                          aria-labelledby={`trigger-${group.id}-${i}`}
                          className={`${styles.detailsPanel} ${expandedDetails.has(getDetailsKey(group.id, i)) ? styles.detailsPanelOpen : ''}`}
                        >
                          <ul className={styles.details}>
                            {item.details.map((d, j) => (
                              <li key={j}>{d}</li>
                            ))}
                          </ul>
                          {item.itemNote && (
                            <p className={styles.itemNote} role="note">
                              {item.itemNote}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {item.itemNote && !(item.details && item.details.length > 0) && (
                      <p className={styles.itemNote} role="note">
                        {item.itemNote}
                      </p>
                    )}
                  </li>
                  </Fragment>
                ))}
              </ul>
              {group.note &&
                (Array.isArray(group.note) ? (
                  <ul className={styles.noteList} role="note">
                    {group.note.map((point, k) => (
                      <li key={k} className={styles.notePoint}>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.note} role="note">
                    {group.note}
                  </p>
                ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
