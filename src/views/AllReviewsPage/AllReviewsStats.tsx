'use client';

import { get } from '@/lib/i18n';
import styles from './AllReviewsPage.module.scss';

interface StarStat {
  stars: number;
  count: number;
  percent: number;
}

interface AllReviewsStatsProps {
  starStats: StarStat[];
}

export default function AllReviewsStats({ starStats }: AllReviewsStatsProps) {
  const statsTitle = get<string>('home.avisPage.statsTitle');
  const starPercentTemplate = get<string>('home.avisPage.starPercent');
  const reviewsCountTemplate = get<string>('home.avisPage.reviewsCount');

  return (
    <section className={styles.stats} aria-labelledby="avis-stats-title">
      <h2 id="avis-stats-title" className={styles.statsTitle}>
        {statsTitle}
      </h2>
      <div className={styles.statsRow}>
        {starStats.map(({ stars, count, percent }) => (
          <div key={stars} className={styles.statsItem}>
            <span className={styles.statsLabel} aria-hidden>
              <span className={styles.statsLabelDigit}>{stars}</span>
              <span>★</span>
            </span>
            <span className={styles.statsBarWrap}>
              <span
                className={styles.statsBar}
                style={{ width: `${percent}%` }}
                role="presentation"
              />
            </span>
            <span className={styles.statsCount}>{count}</span>
            <span className={styles.srOnly}>
              {starPercentTemplate.replace('{n}', String(stars)).replace('{p}', String(percent))}
              {count > 0 && ` (${reviewsCountTemplate.replace('{n}', String(count))})`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
