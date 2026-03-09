'use client';

import { useState, useEffect, useCallback } from 'react';
import { getQuotePrestationGroups } from '@/models/prices';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';
import ReviewModalHeader from './ReviewModalHeader';
import ReviewModalStars from './ReviewModalStars';
import ReviewModalServices from './ReviewModalServices';
import ReviewModalComment from './ReviewModalComment';
import ReviewModalFooter from './ReviewModalFooter';
import styles from './ReviewModal.module.scss';

const MIN_COMMENT_LENGTH = 20;
const MAX_SERVICES_SELECT = 5;

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (review: Testimonial) => void;
}

export default function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [stars, setStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStars(0);
      setHoverStars(0);
      setSelectedIds(new Set());
      setComment('');
    }
  }, [isOpen]);

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

  const handleSubmit = useCallback(() => {
    const trimmed = comment.trim();
    if (stars < 1 || selectedIds.size < 1 || trimmed.length < MIN_COMMENT_LENGTH) return;
    const review: Testimonial = {
      stars,
      services: getSelectedLabels(),
      text: trimmed,
    };
    onSubmit?.(review);
    onClose();
  }, [stars, selectedIds, comment, getSelectedLabels, onSubmit, onClose]);

  const isServiceDisabled = useCallback(
    (id: string) => selectedIds.size >= MAX_SERVICES_SELECT && !selectedIds.has(id),
    [selectedIds]
  );

  if (!isOpen) return null;

  const displayStars = hoverStars || stars;
  const trimmedComment = comment.trim();
  const canSubmit =
    stars >= 1 &&
    selectedIds.size >= 1 &&
    trimmedComment.length >= MIN_COMMENT_LENGTH;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ReviewModalHeader onClose={onClose} />
        <p className={styles.intro}>{get<string>('reviewModal.intro')}</p>
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
          <ReviewModalComment value={comment} onChange={setComment} />
        </div>
        <ReviewModalFooter
          onClose={onClose}
          onSubmit={handleSubmit}
          canSubmit={canSubmit}
        />
      </div>
    </div>
  );
}
