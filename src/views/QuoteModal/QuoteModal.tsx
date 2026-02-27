'use client';

import { useState, useEffect } from 'react';
import { getQuotePrestationGroups } from '@/models/prices';
import styles from './QuoteModal.module.scss';

const EMAIL = 'contact@arkenyx.fr';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const groups = getQuotePrestationGroups();

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

  const handleSubmit = () => {
    const labels = getSelectedLabels();
    if (labels.length === 0) return;
    const subject = `Demande de devis pour : ${labels.join(', ')}`;
    const body = `Bonjour,

Je souhaite un devis pour les prestations suivantes :

${labels.map((l) => `- ${l}`).join('\n')}

Cordialement`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
  };

  if (!isOpen) return null;

  const selectedCount = selectedIds.size;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 id="quote-modal-title" className={styles.title}>Demander un devis</h2>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </div>
        <p className={styles.intro}>
          Cochez une ou plusieurs prestations pour lesquelles vous souhaitez recevoir un devis. Un e-mail sera pré-rempli avec votre sélection.
        </p>
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
            Annuler
          </button>
          <button
            type="button"
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={selectedCount === 0}
          >
            Envoyer ma demande {selectedCount > 0 ? `(${selectedCount})` : ''}
          </button>
        </div>
      </div>
    </div>
  );
}
