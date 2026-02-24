import styles from './Banner.module.scss';

export default function Banner({ children }: { children: React.ReactNode }) {
  return <div className={styles.banner}>{children}</div>;
}
