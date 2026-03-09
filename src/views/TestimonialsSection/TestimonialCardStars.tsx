'use client';

import styles from './TestimonialsSection.module.scss';

interface TestimonialCardStarsProps {
  stars: number;
}

export default function TestimonialCardStars({ stars }: TestimonialCardStarsProps) {
  return (
    <div className={styles.starsRow} aria-hidden>
      {Array.from({ length: 5 }, (_, k) => (
        <span key={k}>{k < stars ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
