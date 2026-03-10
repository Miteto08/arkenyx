'use client';

import { useState, useEffect, useRef } from 'react';
import { getQuotePrestationGroups } from '@/models/prices';
import { get } from '@/lib/i18n';
import { useModalScrollLock } from '@/hooks/useModalScrollLock';
import styles from './QuoteModal.module.scss';

const EMAIL = 'contact@arkenyx.fr';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const groups = getQuotePrestationGroups();
  const overlayRef = useRef<HTMLDivElement>(null);
  const preventScrollOnOverlay = useModalScrollLock(isOpen, overlayRef);

  useEffect(() => {
    if (!isOpen) setSelectedIds(new Set());
  }, [isOpen]);

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getSelectedLabels = (): string[] => {
    const labels: string[] = [];
    groups.forEach((g) => {
      g.items.forEach((item) => {
        if (selectedIds.has(item.id)) labels.push(item.label);
      });
    });
    return labels;
  };

  const emailSubjectTemplate = get<string>('quoteModal.emailSubject');
  const emailBodyTemplate = get<string>('quoteModal.emailBody');

  const handleSubmit = () => {
    const labels = getSelectedLabels();
    if (labels.length === 0) return;
    const subject = emailSubjectTemplate.replace('{labels}', labels.join(', '));
    const body = emailBodyTemplate.replace('{items}', labels.map((l) => `- ${l}`).join('\n'));
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
  };

  if (!isOpen) return null;

  const title = get<string>('quoteModal.title');
  const closeAria = get<string>('quoteModal.closeAria');
  const intro = get<string>('quoteModal.intro');
  const cancel = get<string>('quoteModal.cancel');
  const submit = get<string>('quoteModal.submit');
  const submitWithCountTemplate = get<string>('quoteModal.submitWithCount');
  const selectedCount = selectedIds.size;
  const submitLabel = selectedCount > 0 ? submitWithCountTemplate.replace('{count}', String(selectedCount)) : submit;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={onClose}
      onWheel={preventScrollOnOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 id="quote-modal-title" className={styles.title}>{title}</h2>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label={closeAria}>
            ×
          </button>
        </div>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.list}>
          {groups.map((group) => (
            <fieldset key={group.groupId} className={styles.group}>
              <legend className={styles.groupTitle}>{group.groupTitle}</legend>
              <ul className={styles.items} role="list">
                {group.items.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(item.id)}
                        onChange={() => toggle(item.id)}
                      />
                      <span>{item.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          ))}
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.cancelBtn} onClick={onClose}>
            {cancel}
          </button>
          <button
            type="button"
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={selectedCount === 0}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
