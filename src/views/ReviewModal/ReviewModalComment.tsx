'use client';

import { get } from '@/lib/i18n';
import styles from './ReviewModal.module.scss';

const MAX_COMMENT_LENGTH = 1000;

interface ReviewModalCommentProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ReviewModalComment({ value, onChange }: ReviewModalCommentProps) {
  const charCount = get<string>('reviewModal.charCount')
    .replace('{current}', String(value.length))
    .replace('{max}', String(MAX_COMMENT_LENGTH));

  return (
    <div className={styles.commentField}>
      <span className={styles.commentLabel}>
        {get<string>('reviewModal.commentLabel')}
        <span className={styles.charCount}>{charCount}</span>
      </span>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_COMMENT_LENGTH))}
        placeholder={get<string>('reviewModal.commentPlaceholder')}
        maxLength={MAX_COMMENT_LENGTH}
        rows={4}
      />
    </div>
  );
}
