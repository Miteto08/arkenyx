import { Fragment, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { PriceItem as PriceItemType } from '@/models/prices';
import { get } from '@/lib/i18n';
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
  const [priceExplanationOpen, setPriceExplanationOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{
    top?: number;
    bottom?: number;
    left: number;
    maxWidth: number;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!priceExplanationOpen || !triggerRef.current || typeof window === 'undefined') return;
    const rect = triggerRef.current.getBoundingClientRect();
    const padding = 12;
    const gap = 6;
    const estimatedPopupHeight = 240;
    const maxWidthPx = Math.min(352, window.innerWidth - padding * 2);
    const left = Math.max(padding, Math.min(rect.left, window.innerWidth - maxWidthPx - padding));
    const spaceBelow = window.innerHeight - rect.bottom - padding;
    const spaceAbove = rect.top - padding;
    const showAbove =
      spaceBelow < estimatedPopupHeight && (spaceAbove >= estimatedPopupHeight || spaceAbove >= spaceBelow);
    if (showAbove) {
      setPopupPosition({
        bottom: window.innerHeight - rect.top + gap,
        left,
        maxWidth: maxWidthPx,
      });
    } else {
      setPopupPosition({
        top: rect.bottom + gap,
        left,
        maxWidth: maxWidthPx,
      });
    }
  }, [priceExplanationOpen]);

  useEffect(() => {
    if (!priceExplanationOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      const popup = document.getElementById(`price-explanation-${groupId}-${itemIndex}`);
      if (popup?.contains(target)) return;
      setPriceExplanationOpen(false);
    };
    const handleScroll = () => setPriceExplanationOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [priceExplanationOpen, groupId, itemIndex]);

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
            {get<string>('home.priceCard.recommandé')}
          </span>
        )}
        <div className={styles.itemHeader}>
          <span className={styles.itemLabel}>{item.label}</span>
          <span className={styles.itemPriceWrap}>
            <span className={styles.itemPrice}>{item.price}</span>
            {item.priceExplanation && (
              <span className={styles.priceExplanationWrap}>
                <button
                  ref={triggerRef}
                  type="button"
                  className={styles.priceExplanationTrigger}
                  onClick={() => setPriceExplanationOpen((v) => !v)}
                  aria-expanded={priceExplanationOpen}
                  aria-controls={`price-explanation-${groupId}-${itemIndex}`}
                  id={`price-explanation-trigger-${groupId}-${itemIndex}`}
                  aria-label={get<string>('home.priceCard.priceExplanationAria')}
                  title={get<string>('home.priceCard.priceExplanationAria')}
                >
                  <span aria-hidden>i</span>
                </button>
                {priceExplanationOpen &&
                  popupPosition &&
                  createPortal(
                    <div
                      id={`price-explanation-${groupId}-${itemIndex}`}
                      className={styles.priceExplanationPopupPortal}
                      role="dialog"
                      aria-labelledby={`price-explanation-trigger-${groupId}-${itemIndex}`}
                      style={{
                        ...(popupPosition.top != null && { top: popupPosition.top }),
                        ...(popupPosition.bottom != null && { bottom: popupPosition.bottom }),
                        left: popupPosition.left,
                        maxWidth: popupPosition.maxWidth,
                      }}
                    >
                      <p className={styles.priceExplanationText}>{item.priceExplanation}</p>
                    </div>,
                    document.body
                  )}
              </span>
            )}
          </span>
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
              <span className={styles.detailsTriggerText}>{get<string>('home.priceCard.plusDeDetails')}</span>
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
