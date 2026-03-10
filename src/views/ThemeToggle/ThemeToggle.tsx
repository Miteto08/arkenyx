'use client';

import { useEffect, useState } from 'react';
import { get } from '@/lib/i18n';
import { IconSun, IconMoon } from '@/components/Icons';
import styles from './ThemeToggle.module.scss';

const STORAGE_KEY = 'arkenyx-theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

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

  const ariaLabel =
    theme === THEME_LIGHT
      ? get<string>('common.themeToggle.ariaToDark')
      : get<string>('common.themeToggle.ariaToLight');

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={ariaLabel}
      aria-pressed={theme === THEME_DARK}
    >
      <span className={styles.track} data-theme={theme}>
        <span className={styles.iconInTrack}>
          <span className={styles.iconSlotLeft} aria-hidden>
            <IconSun className={styles.iconSun} />
          </span>
          <span className={styles.iconSlotRight} aria-hidden>
            <IconMoon className={styles.iconMoon} />
          </span>
        </span>
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
