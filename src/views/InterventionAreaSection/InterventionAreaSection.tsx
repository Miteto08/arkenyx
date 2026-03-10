import { get } from '@/lib/i18n';
import styles from './InterventionAreaSection.module.scss';

const MAP_CENTER = 'Ahuillé, 53940, France';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_CENTER)}`;

export default function InterventionAreaSection() {
  const title = get<string>('home.interventionArea.title');
  const intro = get<string>('home.interventionArea.intro');
  const mapLinkAria = get<string>('home.interventionArea.mapLinkAria');
  const mapLink = get<string>('home.interventionArea.mapLink');
  const communesIntro = get<string>('home.interventionArea.communesIntro');
  const communes = get<string[]>('home.interventionArea.communes');

  return (
    <section className={styles.section} id="zone-intervention" aria-labelledby="intervention-title">
      <div className="container">
        <h2 id="intervention-title" className={styles.heading}>
          {title}
        </h2>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.mapWrap}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
            aria-label={mapLinkAria}
          >
            <span className={styles.mapLinkIcon} aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            {mapLink}
          </a>
        </div>
        <div className={styles.communesBlock}>
          <p className={styles.communesIntro}>{communesIntro}</p>
          <ul className={styles.communesList} role="list">
            {communes.map((commune, i) => (
              <li key={i} className={styles.commune}>{commune}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
