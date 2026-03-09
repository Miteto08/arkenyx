'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

interface ReviewModalStarsProps {
  stars: number;
  displayStars: number;
  onStarsChange: (n: number) => void;
  onHover: (n: number) => void;
}

export default function ReviewModalStars({
  stars,
  displayStars,
  onStarsChange,
  onHover,
}: ReviewModalStarsProps) {
  return (
    <div className={styles.starsField}>
      <span className={styles.starsLabel} id="review-stars-label">
        {get<string>('reviewModal.starsLabel')}
        <span className={styles.mandatory} aria-hidden> *</span>
      </span>
      <div
        className={styles.starsRow}
        role="group"
        aria-labelledby="review-stars-label"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`${styles.starBtn} ${n <= displayStars ? styles.filled : ''}`}
            onClick={() => onStarsChange(n)}
            onMouseEnter={() => onHover(n)}
            onMouseLeave={() => onHover(0)}
            aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
            aria-pressed={stars === n}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
