'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

interface ReviewModalHeaderProps {
  onClose: () => void;
}

export default function ReviewModalHeader({ onClose }: ReviewModalHeaderProps) {
  const title = get<string>('reviewModal.title');
  const closeAria = get<string>('reviewModal.closeAria');

  return (
    <div className={styles.header}>
      <h2 id="review-modal-title" className={styles.title}>
        {title}
      </h2>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={onClose}
        aria-label={closeAria}
      >
        ×
      </button>
    </div>
  );
}
