'use client';

import { useState, useEffect } from 'react';
import type { Testimonial } from '@/types/testimonial';
import ReviewSourceBadge from '@/components/ReviewSourceBadge/ReviewSourceBadge';
import TestimonialCardStars from './TestimonialCardStars';
import TestimonialCardServices from './TestimonialCardServices';
import TestimonialCardActions from './TestimonialCardActions';
import styles from './TestimonialsSection.module.scss';

const HAS_LONG_TEXT_THRESHOLD = 120;

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible?: boolean;
}

export default function TestimonialCard({ testimonial, isVisible = true }: TestimonialCardProps) {
  const [expandText, setExpandText] = useState(false);

  useEffect(() => {
    if (!isVisible) setExpandText(false);
  }, [isVisible]);
  const { stars, services, text, author, source } = testimonial;
  const hasLongText = text.length > HAS_LONG_TEXT_THRESHOLD;

  return (
    <div className={styles.card}>
      <div
        className={`${styles.cardInner} ${expandText ? styles.cardInnerExpanded : ''}`.trim()}
      >
        <div className={styles.cardStarsRow}>
          <TestimonialCardStars stars={stars} />
          <ReviewSourceBadge source={source} className={styles.sourceBadge} />
        </div>
        <TestimonialCardServices services={services} />
        {author && author.trim() && (
          <p className={styles.cardAuthor}>{author.trim()}</p>
        )}
        <div className={expandText ? styles.cardTextWrap : styles.cardTextWrapClamped}>
          <p className={styles.cardText}>{text}</p>
        </div>
        {hasLongText && (
          <TestimonialCardActions expanded={expandText} onToggle={() => setExpandText((v) => !v)} />
        )}
      </div>
    </div>
  );
}
