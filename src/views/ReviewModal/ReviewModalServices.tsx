'use client';

import { get } from '@/lib/i18n';
import { getQuotePrestationGroups } from '@/models/prices';
import styles from './ReviewModal.module.scss';

interface ReviewModalServicesProps {
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  isDisabled: (id: string) => boolean;
}

export default function ReviewModalServices({
  selectedIds,
  onToggle,
  isDisabled,
}: ReviewModalServicesProps) {
  const groups = getQuotePrestationGroups();
  const servicesLabel = get<string>('reviewModal.servicesLabel');
  const servicesMaxHint = get<string>('reviewModal.servicesMaxHint');

  return (
    <div className={styles.servicesField}>
      <span className={styles.servicesLabel}>
        {servicesLabel}
        <span className={styles.mandatory} aria-hidden> *</span>
      </span>
      <p className={styles.servicesHint}>
        {servicesMaxHint}
      </p>
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
                    disabled={isDisabled(item.id)}
                    onChange={() => onToggle(item.id)}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}
