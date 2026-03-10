'use client';

import { forwardRef } from 'react';
import { get } from '@/lib/i18n';
import styles from './AllReviewsPage.module.scss';

interface AllReviewsPaginationProps {
  currentPage: number;
  totalPages: number;
  pageItems: (number | 'ellipsis')[];
  onGoToPage: (page: number) => void;
}

const AllReviewsPagination = forwardRef<
  HTMLElement | null,
  AllReviewsPaginationProps
>(function AllReviewsPagination(
  { currentPage, totalPages, pageItems, onGoToPage },
  ref
) {
  const firstPageLabel = get<string>('home.avisPage.firstPage');
  const lastPageLabel = get<string>('home.avisPage.lastPage');
  const pageNLabel = get<string>('home.avisPage.pageN');
  const currentPageLabel = get<string>('home.avisPage.currentPage');
  const paginationAria = get<string>('home.avisPage.paginationAria');

  return (
    <nav
      ref={ref}
      className={styles.pagination}
      aria-label={paginationAria}
    >
      <ul className={styles.paginationList}>
        {currentPage > 1 && (
          <li>
            <button
              type="button"
              className={`${styles.paginationBtn} ${styles.paginationBtnNav}`}
              onClick={() => onGoToPage(1)}
              aria-label={firstPageLabel}
            >
              <span className={styles.paginationBtnIcon} aria-hidden>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                </svg>
              </span>
            </button>
          </li>
        )}
        {pageItems.map((item, i) =>
          item === 'ellipsis' ? (
            <li
              key={`ellipsis-${i}`}
              className={styles.paginationEllipsis}
              aria-hidden
            >
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
                onClick={() => onGoToPage(item)}
                aria-label={
                  item === currentPage
                    ? currentPageLabel.replace('{n}', String(item))
                    : pageNLabel.replace('{n}', String(item))
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
              onClick={() => onGoToPage(totalPages)}
              aria-label={lastPageLabel}
            >
              <span className={styles.paginationBtnIcon} aria-hidden>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                </svg>
              </span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
});

export default AllReviewsPagination;
