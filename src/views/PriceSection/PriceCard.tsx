import type { PriceGroup } from '@/models/prices';
import PriceItem from './PriceItem';
import styles from './PriceSection.module.scss';

interface PriceCardProps {
  group: PriceGroup;
  expandedDetails: Set<string>;
  onToggleDetails: (key: string) => void;
}

function getDetailsKey(groupId: string, itemIndex: number) {
  return `${groupId}-${itemIndex}`;
}

export default function PriceCard({
  group,
  expandedDetails,
  onToggleDetails,
}: PriceCardProps) {
  return (
    <article key={group.id} className={styles.card}>
      <h3 className={styles.cardTitle}>{group.title}</h3>
      {group.intro &&
        group.intro.split('\n\n').filter(Boolean).map((paragraph, k) => (
          <p key={k} className={styles.cardIntro}>
            {paragraph}
          </p>
        ))}
      <ul className={styles.itemList}>
        {group.items.map((item, i) => (
          <PriceItem
            key={i}
            item={item}
            groupId={group.id}
            itemIndex={i}
            isDetailsExpanded={expandedDetails.has(getDetailsKey(group.id, i))}
            onToggleDetails={onToggleDetails}
          />
        ))}
      </ul>
      {group.note &&
        (Array.isArray(group.note) ? (
          <div role="note">
            <ul className={styles.noteList}>
              {group.note.map((point, k) => (
                <li key={k} className={styles.notePoint}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={styles.note} role="note">
            {group.note}
          </p>
        ))}
    </article>
  );
}
