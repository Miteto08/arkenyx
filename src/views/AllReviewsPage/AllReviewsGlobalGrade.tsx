'use client';

import { get } from '@/lib/i18n';
import styles from './AllReviewsPage.module.scss';

interface AllReviewsGlobalGradeProps {
  averageStars: number;
  totalCount: number;
}

export default function AllReviewsGlobalGrade({
  averageStars,
  totalCount,
}: AllReviewsGlobalGradeProps) {
  const averageLabel = get<string>('home.avisPage.averageLabel');
  const averageValue = Number.isInteger(averageStars)
    ? String(averageStars)
    : averageStars.toFixed(1);
  const averageOutOf = get<string>('home.avisPage.averageOutOf').replace(
    '{avg}',
    averageValue
  );
  const reviewsCount = get<string>('home.avisPage.reviewsCount').replace(
    '{n}',
    String(totalCount)
  );

  return (
    <section
      className={styles.globalGrade}
      aria-label={averageLabel}
    >
      <div className={styles.globalGradeMain}>
        <span className={styles.globalGradeValue}>{averageOutOf}</span>
        <span className={styles.globalGradeCount}>{reviewsCount}</span>
      </div>
      <div className={styles.globalGradeStars} aria-hidden>
        {Array.from({ length: 5 }, (_, k) => {
          const fill = Math.min(1, Math.max(0, averageStars - k));
          return (
            <span key={k} className={styles.globalGradeStar}>
              <span className={styles.globalGradeStarBg}>☆</span>
              <span
                className={styles.globalGradeStarFillWrap}
                style={{ width: `${fill * 100}%` }}
              >
                <span className={styles.globalGradeStarFill}>★</span>
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
