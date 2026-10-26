'use client';

import { get } from '@/lib/i18n';
import LeaveReviewButton from '@/views/LeaveReviewButton/LeaveReviewButton';
import styles from './TestimonialsSection.module.scss';

export default function TestimonialsSectionHeader() {
  const title = get<string>('home.testimonials.title');
  const intro = get<string>('home.testimonials.intro');

  return (
    <>
      <h2 id="testimonials-title" className={styles.heading}>
        {title}
      </h2>
      <p className={styles.intro}>{intro}</p>
      <div className={styles.ctaWrap}>
        <LeaveReviewButton />
      </div>
    </>
  );
}
