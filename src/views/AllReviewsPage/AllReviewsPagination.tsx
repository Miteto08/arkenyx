'use client';

import { forwardRef } from 'react';
import { get } from '@/lib/i18n';
import { IconChevronDoubleLeft, IconChevronDoubleRight } from '@/components/Icons';
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
                <IconChevronDoubleLeft />
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
                <IconChevronDoubleRight />
              </span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
});

export default AllReviewsPagination;
