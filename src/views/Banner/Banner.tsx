import styles from './Banner.module.scss';

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.banner}>
      {/* LCP image: native img with fetchPriority="high" so PageSpeed can prioritize it */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-banner.avif"
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className={styles.bannerImg}
      />
      {children}
    </div>
  );
}
