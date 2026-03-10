'use client';

import { useState } from 'react';
import Link from 'next/link';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';
import TestimonialCardStars from '@/views/TestimonialsSection/TestimonialCardStars';
import TestimonialCardServices from '@/views/TestimonialsSection/TestimonialCardServices';
import cardStyles from '@/views/TestimonialsSection/TestimonialsSection.module.scss';
import styles from './AllReviewsPage.module.scss';

const HAS_LONG_TEXT_THRESHOLD = 120;

interface AllReviewsListItemProps {
  testimonial: Testimonial;
}

function formatReviewDate(isoDate: string | undefined): string | null {
  if (!isoDate) return null;
  try {
    const d = new Date(isoDate);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return null;
  }
}

export default function AllReviewsListItem({ testimonial }: AllReviewsListItemProps) {
  const [expandText, setExpandText] = useState(false);
  const { stars, services, text, author, created_at } = testimonial;
  const authorTrimmed = author?.trim() ?? '';
  const hasLongText = text.length > HAS_LONG_TEXT_THRESHOLD;
  const dateStr = formatReviewDate(created_at);
  const showAuthorDate = authorTrimmed || dateStr;

  return (
    <li className={styles.listItem}>
      <div
        className={`${styles.listItemInner} ${expandText ? styles.listItemInnerExpanded : ''}`.trim()}
      >
        <div className={styles.listItemRating}>
          <span className={styles.listItemRatingText} aria-hidden>
            {get<string>('home.avisPage.ratingOutOf').replace('{n}', String(stars))}
          </span>
          <span className={styles.listItemStarsWrap}>
            <TestimonialCardStars stars={stars} />
          </span>
        </div>
        <TestimonialCardServices services={services} />
        {showAuthorDate && (
          <p className={cardStyles.cardAuthor}>
            {authorTrimmed ? (
              <>
                <Link
                  href={`/avis?author=${encodeURIComponent(authorTrimmed)}`}
                  className={styles.authorLink}
                  aria-label={get<string>('home.avisPage.authorFilterAria').replace('{author}', authorTrimmed)}
                >
                  {authorTrimmed}
                </Link>
                {dateStr && <span className={styles.authorDate}> · {dateStr}</span>}
              </>
            ) : (
              <span className={styles.authorDate}>{dateStr}</span>
            )}
          </p>
        )}
        <div
          className={
            expandText ? cardStyles.cardTextWrap : cardStyles.cardTextWrapClamped
          }
        >
          <p className={cardStyles.cardText}>{text}</p>
        </div>
        {hasLongText && (
          <div className={cardStyles.cardActionsRow}>
            <button
              type="button"
              className={cardStyles.expandBtn}
              onClick={() => setExpandText((v) => !v)}
              aria-expanded={expandText}
            >
              {expandText
                ? get<string>('home.testimonials.voirMoins')
                : get<string>('home.testimonials.voirPlus')}
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
