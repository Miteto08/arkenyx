'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

const MIN_AUTHOR_LENGTH = 3;
const MAX_AUTHOR_LENGTH = 30;

interface ReviewModalAuthorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ReviewModalAuthor({ value, onChange }: ReviewModalAuthorProps) {
  const authorLabel = get<string>('reviewModal.authorLabel');
  const authorHint = get<string>('reviewModal.authorHint');
  const authorPlaceholder = get<string>('reviewModal.authorPlaceholder');

  return (
    <div className={styles.authorField}>
      <label htmlFor="review-author" className={styles.authorLabel}>
        {authorLabel}
      </label>
      <p className={styles.authorHint}>{authorHint}</p>
      <input
        id="review-author"
        type="text"
        className={styles.authorInput}
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_AUTHOR_LENGTH))}
        placeholder={authorPlaceholder}
        maxLength={MAX_AUTHOR_LENGTH}
        autoComplete="name"
      />
    </div>
  );
}

export { MIN_AUTHOR_LENGTH, MAX_AUTHOR_LENGTH };
