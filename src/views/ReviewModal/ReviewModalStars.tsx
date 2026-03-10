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
  const starsLabel = get<string>('reviewModal.starsLabel');
  const starAriaOne = get<string>('reviewModal.starAriaOne');
  const starAriaMany = get<string>('reviewModal.starAriaMany');

  return (
    <div className={styles.starsField}>
      <span className={styles.starsLabel} id="review-stars-label">
        {starsLabel}
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
            aria-label={n === 1 ? starAriaOne : starAriaMany.replace('{count}', String(n))}
            aria-pressed={stars === n}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
