import { Fragment } from 'react';
import type { PriceItem as PriceItemType } from '@/models/prices';
import styles from './PriceSection.module.scss';

function getDetailsKey(groupId: string, itemIndex: number) {
  return `${groupId}-${itemIndex}`;
}

interface PriceItemProps {
  item: PriceItemType;
  groupId: string;
  itemIndex: number;
  isDetailsExpanded: boolean;
  onToggleDetails: (key: string) => void;
}

export default function PriceItem({
  item,
  groupId,
  itemIndex,
  isDetailsExpanded,
  onToggleDetails,
}: PriceItemProps) {
  const detailsKey = getDetailsKey(groupId, itemIndex);
  const hasDetails = item.details && item.details.length > 0;

  return (
    <Fragment>
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
        {hasDetails && (
          <div className={styles.detailsToggle}>
            <button
              type="button"
              className={styles.detailsTrigger}
              onClick={() => onToggleDetails(detailsKey)}
              aria-expanded={isDetailsExpanded}
              aria-controls={`details-${groupId}-${itemIndex}`}
              id={`trigger-${groupId}-${itemIndex}`}
            >
              <span
                className={`${styles.detailsChevron} ${isDetailsExpanded ? styles.detailsChevronOpen : ''}`}
                aria-hidden
              >
                ▼
              </span>
              <span className={styles.detailsTriggerText}>Plus de détails</span>
            </button>
            <div
              id={`details-${groupId}-${itemIndex}`}
              role="region"
              aria-labelledby={`trigger-${groupId}-${itemIndex}`}
              className={`${styles.detailsPanel} ${isDetailsExpanded ? styles.detailsPanelOpen : ''}`}
            >
              <ul className={styles.details}>
                {item.details!.map((d, j) => (
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
        {item.itemNote && !hasDetails && (
          <p className={styles.itemNote} role="note">
            {item.itemNote}
          </p>
        )}
      </li>
    </Fragment>
  );
}
