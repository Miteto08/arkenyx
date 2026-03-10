'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';
import AllReviewsListItem from './AllReviewsListItem';
import styles from './AllReviewsPage.module.scss';

const PER_PAGE_OPTIONS = [20, 50, 100] as const;
const DEFAULT_PER_PAGE = 20;
const MAX_PAGES_WITHOUT_ELLIPSIS = 5;

type ReviewRow = Testimonial & { id?: string };
type SortOption = 'recent' | 'oldest' | 'best' | 'worst';

function sortReviews(reviews: ReviewRow[], sortBy: SortOption): ReviewRow[] {
  if (sortBy === 'recent') return reviews;
  if (sortBy === 'oldest') return [...reviews].reverse();
  const copy = [...reviews];
  if (sortBy === 'best') copy.sort((a, b) => b.stars - a.stars);
  else copy.sort((a, b) => a.stars - b.stars);
  return copy;
}

function getAverageStars(reviews: { stars: number }[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((s, r) => s + (r.stars >= 1 && r.stars <= 5 ? r.stars : 0), 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

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

function getStarPercentages(reviews: { stars: number }[]): { stars: number; count: number; percent: number }[] {
  const total = reviews.length;
  if (total === 0) return [];
  const counts = [0, 0, 0, 0, 0];
  reviews.forEach((r) => {
    if (r.stars >= 1 && r.stars <= 5) counts[r.stars - 1]++;
  });
  return [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: counts[stars - 1],
    percent: Math.round((counts[stars - 1] / total) * 100),
  }));
}

function getPageItems(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  if (totalPages <= MAX_PAGES_WITHOUT_ELLIPSIS) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const windowStart = Math.max(1, currentPage - 1);
  const windowEnd = Math.min(totalPages, currentPage + 1);
  const items: (number | 'ellipsis')[] = [1];
  if (windowStart > 2) items.push('ellipsis');
  for (let p = windowStart; p <= windowEnd; p++) {
    if (!items.includes(p)) items.push(p);
  }
  if (windowEnd < totalPages - 1) items.push('ellipsis');
  if (totalPages > 1 && items[items.length - 1] !== totalPages) items.push(totalPages);
  return items;
}

export default function AllReviewsList() {
  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const paginationRef = useRef<HTMLElement | null>(null);

  const displayReviews = useMemo(() => sortReviews(reviews, sortBy), [reviews, sortBy]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [perPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  const title = get<string>('home.avisPage.title');
  const titleWithCount = get<string>('home.avisPage.titleWithCount');
  const intro = get<string>('home.avisPage.intro');
  const headerTitle = !loading ? titleWithCount.replace('{count}', String(reviews.length)) : title;

  const totalPages = Math.max(1, Math.ceil(displayReviews.length / perPage));
  const start = (currentPage - 1) * perPage;
  const pageReviews = displayReviews.slice(start, start + perPage);
  const pageItems = getPageItems(currentPage, totalPages);
  const starStats = getStarPercentages(displayReviews);
  const averageStars = getAverageStars(displayReviews);

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    requestAnimationFrame(() => {
      const el = paginationRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      // Laisse un léger espace au-dessus de la pagination
      window.scrollTo({ top: Math.max(absoluteTop - 24, 0) });
    });
  };

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
        <>
          <section className={styles.globalGrade} aria-label={get<string>('home.avisPage.averageLabel')}>
            <div className={styles.globalGradeMain}>
              <span className={styles.globalGradeValue}>
                {get<string>('home.avisPage.averageOutOf').replace('{avg}', averageStars.toFixed(1))}
              </span>
              <span className={styles.globalGradeCount}>
                {get<string>('home.avisPage.reviewsCount').replace('{n}', String(displayReviews.length))}
              </span>
            </div>
            <div className={styles.globalGradeStars} aria-hidden>
              {Array.from({ length: 5 }, (_, k) => (
                <span key={k}>{k < Math.round(averageStars) ? '★' : '☆'}</span>
              ))}
            </div>
          </section>
          <section className={styles.stats} aria-labelledby="avis-stats-title">
            <h2 id="avis-stats-title" className={styles.statsTitle}>
              {get<string>('home.avisPage.statsTitle')}
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
                    {get<string>('home.avisPage.starPercent')
                      .replace('{n}', String(stars))
                      .replace('{p}', String(percent))}
                    {count > 0 && ` (${count} avis)`}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <div className={styles.sortRow}>
            <label className={styles.sortLabel} htmlFor="avis-sort">
              {get<string>('home.avisPage.sortLabel')}
            </label>
            <select
              id="avis-sort"
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              aria-label={get<string>('home.avisPage.sortLabel')}
            >
              <option value="recent">{get<string>('home.avisPage.sortRecent')}</option>
              <option value="oldest">{get<string>('home.avisPage.sortOldest')}</option>
              <option value="best">{get<string>('home.avisPage.sortBest')}</option>
              <option value="worst">{get<string>('home.avisPage.sortWorst')}</option>
            </select>
          </div>
          <div className={styles.toolbar}>
            <label className={styles.perPageLabel} htmlFor="avis-per-page">
              {get<string>('home.avisPage.perPageLabel')}
            </label>
            <select
              id="avis-per-page"
              className={styles.perPageSelect}
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value) as 20 | 50 | 100)}
              aria-label={get<string>('home.avisPage.perPageLabel')}
            >
              {PER_PAGE_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {get<string>('home.avisPage.perPageOption').replace('{n}', String(n))}
                </option>
              ))}
            </select>
          </div>
          <ul className={styles.list}>
            {pageReviews.map((review, index) => (
              <AllReviewsListItem
                key={review.id ?? `review-${start + index}`}
                testimonial={review}
              />
            ))}
          </ul>
          {totalPages > 1 && (
            <nav
              ref={paginationRef}
              className={styles.pagination}
              aria-label="Pagination des avis"
            >
              <ul className={styles.paginationList}>
                {currentPage > 1 && (
                  <li>
                    <button
                      type="button"
                      className={`${styles.paginationBtn} ${styles.paginationBtnNav}`}
                      onClick={() => goToPage(1)}
                      aria-label={get<string>('home.avisPage.firstPage')}
                    >
                      <span className={styles.paginationBtnIcon} aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                        </svg>
                      </span>
                    </button>
                  </li>
                )}
                {pageItems.map((item, i) =>
                  item === 'ellipsis' ? (
                    <li key={`ellipsis-${i}`} className={styles.paginationEllipsis} aria-hidden>
                      …
                    </li>
                  ) : (
                    <li key={item}>
                      <button
                        type="button"
                        className={
                          item === currentPage
                            ? `${styles.paginationBtn} ${styles.paginationBtnCurrent}`
                            : styles.paginationBtn
                        }
                        onClick={() => goToPage(item)}
                        aria-label={
                          item === currentPage
                            ? get<string>('home.avisPage.currentPage').replace('{n}', String(item))
                            : get<string>('home.avisPage.pageN').replace('{n}', String(item))
                        }
                        aria-current={item === currentPage ? 'page' : undefined}
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
                {currentPage < totalPages && (
                  <li>
                    <button
                      type="button"
                      className={`${styles.paginationBtn} ${styles.paginationBtnNav}`}
                      onClick={() => goToPage(totalPages)}
                      aria-label={get<string>('home.avisPage.lastPage')}
                    >
                      <span className={styles.paginationBtnIcon} aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                        </svg>
                      </span>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </>
      )}
    </>
  );
}
