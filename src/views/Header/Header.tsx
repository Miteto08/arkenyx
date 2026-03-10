'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/views/ThemeToggle/ThemeToggle';
import QuoteRequestButton from '@/views/QuoteRequestButton/QuoteRequestButton';
import { get } from '@/lib/i18n';
import { useSiteContent } from '@/controllers/useSiteContent';
import styles from './Header.module.scss';

const NAV_LINKS = get<Array<{ href: string; label: string }>>('common.navLinks');

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { siteName } = useSiteContent();
  const ariaLogo = get<string>('common.header.ariaLogo');
  const ariaNav = get<string>('common.header.ariaNav');
  const ariaMenu = get<string>(menuOpen ? 'common.header.ariaMenuOpen' : 'common.header.ariaMenuClose');

  return (
    <header className={styles.header}>
      <div className="container">
        <a href="/" className={styles.logo} aria-label={ariaLogo}>
          <Image
            src="/arkenyx-logo.png"
            alt={siteName}
            width={420}
            height={120}
            priority
            unoptimized
            sizes="(max-width: 768px) 200px, 306px"
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
            aria-label={ariaMenu}
          >
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
          <nav
            id="main-nav"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label={ariaNav}
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
