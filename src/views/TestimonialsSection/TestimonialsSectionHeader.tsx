'use client';

import { get } from '@/lib/i18n';
import LeaveReviewButton from '@/views/LeaveReviewButton/LeaveReviewButton';
import type { Testimonial } from '@/types/testimonial';
import styles from './TestimonialsSection.module.scss';

interface TestimonialsSectionHeaderProps {
  onReviewSubmitted: (review: Testimonial) => void | Promise<void>;
}

export default function TestimonialsSectionHeader({
  onReviewSubmitted,
}: TestimonialsSectionHeaderProps) {
  const title = get<string>('home.testimonials.title');
  const intro = get<string>('home.testimonials.intro');

  return (
    <>
      <h2 id="testimonials-title" className={styles.heading}>
        {title}
      </h2>
      <p className={styles.intro}>{intro}</p>
      <div className={styles.ctaWrap}>
        <LeaveReviewButton onReviewSubmitted={onReviewSubmitted} />
      </div>
    </>
  );
}
