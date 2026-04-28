'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [canToggleText, setCanToggleText] = useState(false);
  const textWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isVisible) setExpandText(false);
  }, [isVisible]);
  const { stars, services, text, author, source } = testimonial;
  const hasLongText = text.length > HAS_LONG_TEXT_THRESHOLD;

  useEffect(() => {
    if (expandText) return;
    const el = textWrapRef.current;
    if (!el) {
      setCanToggleText(false);
      return;
    }
    setCanToggleText(el.scrollHeight - el.clientHeight > 1);
  }, [expandText, text, isVisible]);

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
        <div
          ref={textWrapRef}
          className={expandText ? styles.cardTextWrap : styles.cardTextWrapClamped}
        >
          <p className={styles.cardText}>{text}</p>
        </div>
        {hasLongText && (canToggleText || expandText) && (
          <TestimonialCardActions expanded={expandText} onToggle={() => setExpandText((v) => !v)} />
        )}
      </div>
    </div>
  );
}
