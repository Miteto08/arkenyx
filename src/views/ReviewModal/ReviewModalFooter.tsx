'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

interface ReviewModalFooterProps {
  onClose: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
}

export default function ReviewModalFooter({
  onClose,
  onSubmit,
  canSubmit,
}: ReviewModalFooterProps) {
  return (
    <div className={styles.footer}>
      <button type="button" className={styles.cancelBtn} onClick={onClose}>
        {get<string>('reviewModal.cancel')}
      </button>
      <button
        type="button"
        className={styles.submitBtn}
        onClick={onSubmit}
        disabled={!canSubmit}
      >
        {get<string>('reviewModal.submit')}
      </button>
    </div>
  );
}
