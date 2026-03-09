'use client';

import { useState } from 'react';
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

export default function AllReviewsListItem({ testimonial }: AllReviewsListItemProps) {
  const [expandText, setExpandText] = useState(false);
  const { stars, services, text, author } = testimonial;
  const hasLongText = text.length > HAS_LONG_TEXT_THRESHOLD;

  return (
    <li className={styles.listItem}>
      <div
        className={`${styles.listItemInner} ${expandText ? styles.listItemInnerExpanded : ''}`.trim()}
      >
        <TestimonialCardStars stars={stars} />
        <TestimonialCardServices services={services} />
        {author && author.trim() && (
          <p className={cardStyles.cardAuthor}>{author.trim()}</p>
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
