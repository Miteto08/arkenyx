import type { Service } from '@/models/types';
import styles from './ServiceRow.module.scss';

interface ServiceRowContentProps {
  service: Service;
}

export default function ServiceRowContent({ service }: ServiceRowContentProps) {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{service.title}</h3>
      {service.description &&
        service.description.split('\n\n').filter(Boolean).map((paragraph, i) => (
          <p key={i} className={styles.description}>
            {paragraph}
          </p>
        ))}
      {service.items?.length ? (
        <ul className={styles.list}>
          {service.items.map((item, i) => (
            <li key={i} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {service.notePoints?.length ? (
        <div className={styles.noteBlock} role="note">
          {service.notePoints.map((point, i) => (
            <p key={i} className={styles.notePoint}>
              <span className={styles.noteCheck} aria-hidden>✔</span>
              {point}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
