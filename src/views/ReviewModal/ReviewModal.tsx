'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { getQuotePrestationGroups } from '@/models/prices';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';
import { useModalScrollLock } from '@/hooks/useModalScrollLock';
import ReviewModalHeader from './ReviewModalHeader';
import ReviewModalStars from './ReviewModalStars';
import ReviewModalServices from './ReviewModalServices';
import ReviewModalAuthor, {
  MIN_AUTHOR_LENGTH,
  MAX_AUTHOR_LENGTH,
} from './ReviewModalAuthor';
import ReviewModalComment from './ReviewModalComment';
import ReviewModalFooter from './ReviewModalFooter';
import styles from './ReviewModal.module.scss';

const MIN_COMMENT_LENGTH = 20;
const MAX_SERVICES_SELECT = 5;

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (review: Testimonial) => void | Promise<void>;
}

export default function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [stars, setStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStars(0);
      setHoverStars(0);
      setSelectedIds(new Set());
      setAuthor('');
      setComment('');
    }
  }, [isOpen]);

  const overlayRef = useRef<HTMLDivElement>(null);
  const preventScrollOnOverlay = useModalScrollLock(isOpen, overlayRef);

  const toggle = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < MAX_SERVICES_SELECT) next.add(id);
      return next;
    });
  }, []);

  const getSelectedLabels = useCallback((): string[] => {
    const groups = getQuotePrestationGroups();
    const labels: string[] = [];
    groups.forEach((g) => {
      g.items.forEach((item) => {
        if (selectedIds.has(item.id)) labels.push(item.label);
      });
    });
    return labels;
  }, [selectedIds]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const successCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) setSubmitSuccess(false);
    return () => {
      if (successCloseTimeoutRef.current) {
        clearTimeout(successCloseTimeoutRef.current);
        successCloseTimeoutRef.current = null;
      }
    };
  }, [isOpen]);

  const handleSubmit = useCallback(async () => {
    const trimmed = comment.trim();
    const authorTrimmed = author.trim();
    if (stars < 1 || selectedIds.size < 1 || trimmed.length < MIN_COMMENT_LENGTH) return;
    if (
      authorTrimmed.length > 0 &&
      (authorTrimmed.length < MIN_AUTHOR_LENGTH || authorTrimmed.length > MAX_AUTHOR_LENGTH)
    )
      return;
    setSubmitError(null);
    const review: Testimonial = {
      stars,
      services: getSelectedLabels(),
      text: trimmed,
      ...(authorTrimmed.length >= MIN_AUTHOR_LENGTH && { author: authorTrimmed }),
    };
    setIsSubmitting(true);
    try {
      await onSubmit?.(review);
      setSubmitSuccess(true);
      successCloseTimeoutRef.current = setTimeout(() => {
        successCloseTimeoutRef.current = null;
        onClose();
      }, 2500);
    } catch (err) {
      setSubmitError(
          err instanceof Error ? err.message : get<string>('reviewModal.submitErrorDefault')
        );
    } finally {
      setIsSubmitting(false);
    }
  }, [stars, selectedIds, author, comment, getSelectedLabels, onSubmit, onClose]);

  const isServiceDisabled = useCallback(
    (id: string) => selectedIds.size >= MAX_SERVICES_SELECT && !selectedIds.has(id),
    [selectedIds]
  );

  const trimmedComment = comment.trim();
  const authorTrimmed = author.trim();
  const authorValid =
    authorTrimmed.length === 0 ||
    (authorTrimmed.length >= MIN_AUTHOR_LENGTH && authorTrimmed.length <= MAX_AUTHOR_LENGTH);
  const canSubmit =
    stars >= 1 &&
    selectedIds.size >= 1 &&
    trimmedComment.length >= MIN_COMMENT_LENGTH &&
    authorValid;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Enter') {
        const active = document.activeElement as HTMLElement | null;
        if (active?.tagName === 'TEXTAREA' || active?.tagName === 'INPUT') return;
        if (!canSubmit) return;
        e.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, canSubmit, handleSubmit]);

  if (!isOpen) return null;

  const intro = get<string>('reviewModal.intro');
  const displayStars = hoverStars || stars;
  const successMessage = get<string>('reviewModal.submitSuccess');

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={onClose}
      onWheel={preventScrollOnOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ReviewModalHeader onClose={onClose} />
        {submitSuccess ? (
          <div className={styles.successBlock} role="status" aria-live="polite">
            <p className={styles.successMessage}>{successMessage}</p>
          </div>
        ) : (
          <>
            <p className={styles.intro}>{intro}</p>
            <div className={styles.form}>
              <ReviewModalStars
                stars={stars}
                displayStars={displayStars}
                onStarsChange={setStars}
                onHover={setHoverStars}
              />
              <ReviewModalServices
                selectedIds={selectedIds}
                onToggle={toggle}
                isDisabled={isServiceDisabled}
              />
              <ReviewModalAuthor value={author} onChange={setAuthor} />
              <ReviewModalComment value={comment} onChange={setComment} />
            </div>
            {submitError && (
              <p className={styles.submitError} role="alert">
                {submitError}
              </p>
            )}
            <ReviewModalFooter
              onClose={onClose}
              onSubmit={handleSubmit}
              canSubmit={canSubmit}
              isSubmitting={isSubmitting}
            />
          </>
        )}
      </div>
    </div>
  );
}
