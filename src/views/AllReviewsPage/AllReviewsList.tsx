'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { get } from '@/lib/i18n';
import Link from 'next/link';
import { getQuotePrestationGroups } from '@/models/prices';
import type { Testimonial } from '@/types/testimonial';
import AllReviewsListItem from './AllReviewsListItem';
import AllReviewsGlobalGrade from './AllReviewsGlobalGrade';
import AllReviewsStats from './AllReviewsStats';
import AllReviewsPagination from './AllReviewsPagination';
import styles from './AllReviewsPage.module.scss';

const SERVICE_OPTIONS = (() => {
  const groups = getQuotePrestationGroups();
  return groups.flatMap((g) => g.items.map((item) => item.label));
})();

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
    created_at?: string;
  }>;
  return data.map((r) => ({
    id: r.id,
    stars: r.stars,
    services: r.services,
    text: r.text,
    author: r.author,
    created_at: r.created_at,
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
  const searchParams = useSearchParams();
  const authorParam = searchParams.get('author');
  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [selectedService, setSelectedService] = useState<string>('');
  const paginationRef = useRef<HTMLElement | null>(null);

  const displayReviews = useMemo(() => sortReviews(reviews, sortBy), [reviews, sortBy]);
  const filteredReviews = useMemo(
    () =>
      !selectedService
        ? displayReviews
        : displayReviews.filter((r) => r.services && r.services.includes(selectedService)),
    [displayReviews, selectedService]
  );
  const filteredByAuthorReviews = useMemo(() => {
    if (!authorParam || authorParam.trim() === '') return filteredReviews;
    const decoded = decodeURIComponent(authorParam.trim());
    return filteredReviews.filter((r) => r.author?.trim() === decoded);
  }, [filteredReviews, authorParam]);

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
  }, [perPage, sortBy, selectedService, authorParam]);

  const title = get<string>('home.avisPage.title');
  const intro = get<string>('home.avisPage.intro');

  const totalPages = Math.max(1, Math.ceil(filteredByAuthorReviews.length / perPage));
  const start = (currentPage - 1) * perPage;
  const pageReviews = filteredByAuthorReviews.slice(start, start + perPage);
  const pageItems = getPageItems(currentPage, totalPages);
  const starStats = getStarPercentages(filteredByAuthorReviews);
  const averageStars = getAverageStars(filteredByAuthorReviews);
  const authorFilterName = authorParam ? decodeURIComponent(authorParam.trim()) : null;

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    requestAnimationFrame(() => {
      const el = paginationRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      window.scrollTo({ top: Math.max(absoluteTop - 24, 0) });
    });
  };

  return (
    <>
      <header className={styles.header}>
        <h1 id="avis-page-title" className={styles.title}>
          {title}
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
          <AllReviewsGlobalGrade
            averageStars={averageStars}
            totalCount={filteredByAuthorReviews.length}
          />
          <AllReviewsStats starStats={starStats} />
          <div className={styles.filterRow}>
            <label className={styles.filterLabel} htmlFor="avis-service-filter">
              {get<string>('home.avisPage.filterByServiceLabel')}
            </label>
            <select
              id="avis-service-filter"
              className={styles.filterSelect}
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              aria-label={get<string>('home.avisPage.filterByServiceLabel')}
            >
              <option value="">{get<string>('home.avisPage.allServicesOption')}</option>
              {SERVICE_OPTIONS.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
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
          {authorFilterName && (
            <div className={styles.authorFilterBanner} role="status">
              <span className={styles.authorFilterText}>
                {get<string>('home.avisPage.authorFilterTitle')
                  .replace('{author}', authorFilterName)
                  .replace('{n}', String(filteredByAuthorReviews.length))}
              </span>
              <Link
                href="/avis"
                className={styles.authorFilterClear}
                aria-label={get<string>('home.avisPage.clearAuthorFilterAria')}
              >
                {get<string>('home.avisPage.clearAuthorFilter')}
              </Link>
            </div>
          )}
          {filteredByAuthorReviews.length === 0 ? (
            <p className={styles.empty} role="status">
              {authorFilterName
                ? get<string>('home.avisPage.emptyAuthorFilter')
                : get<string>('home.avisPage.emptyFiltered')}
            </p>
          ) : (
            <>
              <ul className={styles.list}>
                {pageReviews.map((review, index) => (
                  <AllReviewsListItem
                    key={review.id ?? `review-${start + index}`}
                    testimonial={review}
                  />
                ))}
              </ul>
              {totalPages > 1 && (
                <AllReviewsPagination
                  ref={paginationRef}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageItems={pageItems}
                  onGoToPage={goToPage}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
