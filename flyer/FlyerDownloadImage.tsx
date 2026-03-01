'use client';

import { useCallback } from 'react';
import styles from './flyer.module.scss';

const SHEET_ID = 'flyer-sheet';

export function FlyerDownloadImage() {
  const handleDownload = useCallback(async () => {
    const sheet = document.getElementById(SHEET_ID);
    if (!sheet) return;

    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(sheet, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#e8eef4',
      logging: false,
    });

    const link = document.createElement('a');
    link.download = 'flyer-arkenyx.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={styles.downloadImageBtn}
    >
      Télécharger en image (PNG)
    </button>
  );
}
