import { priceGroups, priceIntro } from '@/models/prices';
import styles from './PriceSection.module.scss';

export default function PriceSection() {
  return (
    <section className={styles.section} id="tarifs">
      <div className="container">
        <h2 className={styles.heading}>Tarifs</h2>
        <p className={styles.subheading}>Tarifs clairs, sans surprise</p>
        <ul className={styles.introList} aria-label="Engagements">
          {priceIntro.map((text, i) => (
            <li key={i} className={styles.introItem}>
              {text}
            </li>
          ))}
        </ul>
        <div className={styles.grid}>
          {priceGroups.map((group) => (
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
                  <li
                    key={i}
                    className={`${styles.item} ${item.recommended ? styles.itemRecommended : ''}`}
                  >
                    {item.recommended && (
                      <span className={styles.recommendedBadge} aria-hidden>
                        Recommandé
                      </span>
                    )}
                    <div className={styles.itemHeader}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    {item.details && item.details.length > 0 && (
                      <ul className={styles.details}>
                        {item.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    )}
                    {item.itemNote && (
                      <p className={styles.itemNote} role="note">
                        {item.itemNote}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {group.note && (
                <p className={styles.note} role="note">
                  {group.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
