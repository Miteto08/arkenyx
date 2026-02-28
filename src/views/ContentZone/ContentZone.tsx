import type { ReactNode } from 'react';
import styles from './ContentZone.module.scss';

interface ContentZoneProps {
  children: ReactNode;
}

export default function ContentZone({ children }: ContentZoneProps) {
  return <div className={styles.contentZone}>{children}</div>;
}
