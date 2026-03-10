'use client';

import { useEffect, useCallback, type RefObject } from 'react';

export function useModalScrollLock(isOpen: boolean, overlayRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!isOpen) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const el = overlayRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (e.target === el) e.preventDefault();
    };
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => el.removeEventListener('touchmove', onTouchMove);
  }, [isOpen, overlayRef]);

  const preventScrollOnOverlay = useCallback((e: React.WheelEvent) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      e.preventDefault();
    }
  }, [overlayRef]);

  return preventScrollOnOverlay;
}
