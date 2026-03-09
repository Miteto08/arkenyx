'use client';

import { useState } from 'react';
import type { Testimonial } from '@/types/testimonial';
import TestimonialCardStars from './TestimonialCardStars';
import TestimonialCardServices from './TestimonialCardServices';
import TestimonialCardActions from './TestimonialCardActions';
import styles from './TestimonialsSection.module.scss';

const HAS_LONG_TEXT_THRESHOLD = 120;

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [expandText, setExpandText] = useState(false);
  const { stars, services, text } = testimonial;
  const hasLongText = text.length > HAS_LONG_TEXT_THRESHOLD;

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <TestimonialCardStars stars={stars} />
        <TestimonialCardServices services={services} />
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
