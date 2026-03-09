'use client';

import { get } from '@/lib/i18n';
import LeaveReviewButton from '@/views/LeaveReviewButton/LeaveReviewButton';
import type { Testimonial } from '@/models/testimonials';
import styles from './TestimonialsSection.module.scss';

interface TestimonialsSectionHeaderProps {
  onReviewSubmitted: (review: Testimonial) => void;
}

export default function TestimonialsSectionHeader({
  onReviewSubmitted,
}: TestimonialsSectionHeaderProps) {
  return (
    <>
      <h2 id="testimonials-title" className={styles.heading}>
        {get<string>('home.testimonials.title')}
      </h2>
      <p className={styles.intro}>{get<string>('home.testimonials.intro')}</p>
      <div className={styles.ctaWrap}>
        <LeaveReviewButton onReviewSubmitted={onReviewSubmitted} />
      </div>
    </>
  );
}
