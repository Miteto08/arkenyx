'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

interface ReviewModalHeaderProps {
  onClose: () => void;
}

export default function ReviewModalHeader({ onClose }: ReviewModalHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 id="review-modal-title" className={styles.title}>
        {get<string>('reviewModal.title')}
      </h2>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={onClose}
        aria-label={get<string>('reviewModal.closeAria')}
      >
        ×
      </button>
    </div>
  );
}
