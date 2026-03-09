'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

interface ReviewModalFooterProps {
  onClose: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
  isSubmitting?: boolean;
}

export default function ReviewModalFooter({
  onClose,
  onSubmit,
  canSubmit,
  isSubmitting = false,
}: ReviewModalFooterProps) {
  return (
    <div className={styles.footer}>
      <button
        type="button"
        className={styles.cancelBtn}
        onClick={onClose}
        disabled={isSubmitting}
      >
        {get<string>('reviewModal.cancel')}
      </button>
      <button
        type="button"
        className={styles.submitBtn}
        onClick={onSubmit}
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting
          ? get<string>('reviewModal.submitPending')
          : get<string>('reviewModal.submit')}
      </button>
    </div>
  );
}
