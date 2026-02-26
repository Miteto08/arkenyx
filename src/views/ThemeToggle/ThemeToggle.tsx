'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

const STORAGE_KEY = 'arkenyx-theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

function SunIcon() {
  return (
    <svg className={styles.iconSun} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M6.64 6.64l1.42-1.42M17.16 17.16l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.iconMoon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<typeof THEME_LIGHT | typeof THEME_DARK>(THEME_LIGHT);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as typeof THEME_LIGHT | typeof THEME_DARK | null;
    const initial = stored === THEME_DARK ? THEME_DARK : THEME_LIGHT;
    setTheme(initial);
    if (initial === THEME_DARK) {
      document.documentElement.setAttribute('data-theme', THEME_DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggle = () => {
    const next = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    setTheme(next);
    if (next === THEME_DARK) {
      document.documentElement.setAttribute('data-theme', THEME_DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === THEME_LIGHT ? 'Passer en mode sombre' : 'Passer en mode clair'}
      aria-pressed={theme === THEME_DARK}
    >
      <span className={styles.track} data-theme={theme}>
        <span className={styles.iconInTrack}>
          <span className={styles.iconSlotLeft} aria-hidden>
            <SunIcon />
          </span>
          <span className={styles.iconSlotRight} aria-hidden>
            <MoonIcon />
          </span>
        </span>
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
