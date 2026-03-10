'use client';

import { useState, useEffect } from 'react';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';
import AllReviewsListItem from './AllReviewsListItem';
import styles from './AllReviewsPage.module.scss';

type ReviewRow = Testimonial & { id?: string };

async function fetchAllReviews(): Promise<ReviewRow[]> {
  const res = await fetch('/api/reviews');
  if (!res.ok) return [];
  const data = (await res.json()) as Array<{
    id?: string;
    stars: number;
    services: string[];
    text: string;
    author?: string;
  }>;
  return data.map((r) => ({
    id: r.id,
    stars: r.stars,
    services: r.services,
    text: r.text,
    author: r.author,
  }));
}

export default function AllReviewsList() {
  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchAllReviews()
      .then((list) => {
        if (!cancelled) setReviews(list);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const title = get<string>('home.avisPage.title');
  const titleWithCount = get<string>('home.avisPage.titleWithCount');
  const intro = get<string>('home.avisPage.intro');
  const headerTitle = !loading ? titleWithCount.replace('{count}', String(reviews.length)) : title;

  return (
    <>
      <header className={styles.header}>
        <h1 id="avis-page-title" className={styles.title}>
          {headerTitle}
        </h1>
        <p className={styles.intro}>{intro}</p>
      </header>
      {loading ? (
        <p className={styles.loading} role="status" aria-busy="true">
          {get<string>('home.avisPage.loading')}
        </p>
      ) : reviews.length === 0 ? (
        <p className={styles.empty} role="status">
          {get<string>('home.avisPage.empty')}
        </p>
      ) : (
        <ul className={styles.list}>
          {reviews.map((review, index) => (
            <AllReviewsListItem
              key={review.id ?? `review-${index}`}
              testimonial={review}
            />
          ))}
        </ul>
      )}
    </>
  );
}
