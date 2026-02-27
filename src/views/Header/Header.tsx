'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/views/ThemeToggle/ThemeToggle';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { href: '#notre-activite', label: 'Notre activité' },
  { href: '#services', label: 'Services' },
  { href: '#pourquoi-nous', label: 'Pourquoi nous choisir' },
  { href: '#engagements', label: 'Nos engagements' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'Questions' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <a href="/" className={styles.logo} aria-label="Arkenyx, accueil">
          <Image
            src="/arkenyx-logo.png"
            alt="Arkenyx"
            width={420}
            height={120}
            priority
            unoptimized
            className={styles.logoImg}
          />
        </a>
        <div className={styles.rightRow}>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
          <nav
            id="main-nav"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <QuoteRequestButton className={styles.cta} />
          <div className={styles.themeToggleWrap}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
