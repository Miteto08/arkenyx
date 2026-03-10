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
  const cancel = get<string>('reviewModal.cancel');
  const submit = get<string>('reviewModal.submit');
  const submitPending = get<string>('reviewModal.submitPending');

  return (
    <div className={styles.footer}>
      <button
        type="button"
        className={styles.cancelBtn}
        onClick={onClose}
        disabled={isSubmitting}
      >
        {cancel}
      </button>
      <button
        type="button"
        className={styles.submitBtn}
        onClick={onSubmit}
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting ? submitPending : submit}
      </button>
    </div>
  );
}
