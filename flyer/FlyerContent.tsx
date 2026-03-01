import styles from './flyer.module.scss';
import centralBg from './istockphoto-962174832-2048x2048.jpg';
import { FlyerDownloadImage } from './FlyerDownloadImage';

export function FlyerContent() {
  return (
    <div className={styles.flyer}>
      <div id="flyer-sheet" className={styles.sheet}>
        <div
          className={styles.banner}
          role="img"
          aria-label="Arkenyx - Réparer, expliquer, faire durer"
          data-flyer="banner"
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10,
              padding: '16px 0 16px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '4px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/arkenyx-logo.png"
              alt="Arkenyx"
              width={958}
              height={301}
              style={{
                display: 'block',
                width: 280,
                height: 'auto',
                maxWidth: '100%',
              }}
            />
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                textShadow: '0 0 2px #000, 0 1px 4px rgba(0,0,0,0.9)',
                lineHeight: 1.3,
              }}
            >
              Réparer, expliquer, <span style={{ color: '#22d3ee', textShadow: '0 0 8px rgba(34,211,238,0.8), 0 0 2px #000', fontWeight: 800 }}>faire durer</span>.
            </p>
          </div>
        </div>

        <div className={styles.sheetBody}>
          <p className={styles.shockLine}>
            Dépannage PC à domicile — Devis gratuit
          </p>

          <div
            className={styles.centralBlock}
            style={{
              backgroundImage: `url(${centralBg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.centralContent}>
              <p className={styles.punch}>
                Nous intervenons à domicile. Transparent, tarifs accessibles, proche de vous.
              </p>
              <p className={styles.servicesTitle}>Nos services</p>
              <div className={styles.serviceBubbles}>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H4z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="M9 15h6" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Données & sauvegarde</span>
                </div>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Dépannage & réparation PC</span>
                </div>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Montage PC & Windows</span>
                </div>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Conseil avant achat</span>
                </div>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0114.08 0" /><path d="M1.42 9a16 16 0 0121.16 0" /><path d="M8.53 16.11a6 6 0 016.95 0" /><path d="M12 20h.01" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Réseau & Wi‑Fi</span>
                </div>
                <div className={styles.bubble}>
                  <span className={styles.bubbleIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                  </span>
                  <span className={styles.bubbleLabel}>Site vitrine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.contact}>
          <p className={styles.contactTitle}>Contactez-nous</p>
          <div className={styles.contactMain}>
            <p className={styles.phone}>06 45 65 84 48</p>
            <div className={styles.qrWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.arkenyx.fr"
                alt="QR code vers www.arkenyx.fr"
                width={120}
                height={120}
                className={styles.qrCode}
              />
              <span className={styles.qrLabel}>Scannez pour le site</span>
            </div>
          </div>
          <p className={styles.email}>contact@arkenyx.fr</p>
          <p className={styles.url}>www.arkenyx.fr</p>
        </footer>
      </div>

      <div className={styles.actions}>
        <FlyerDownloadImage />
        <p className={styles.printHint}>
          <kbd>Ctrl+P</kbd> (ou <kbd>Cmd+P</kbd>) pour imprimer ou enregistrer en PDF. Format A5 portrait. Dans la fenêtre d&apos;impression : activer « Arrière-plans graphiques » pour le bandeau, et choisir format A5 / taille réelle (100 %) pour les dimensions.
        </p>
      </div>
    </div>
  );
}
