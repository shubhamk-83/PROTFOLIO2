import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Uses Lenis only on mouse/trackpad devices.
 * Native scrolling is intentionally kept on touch devices because it is
 * usually smoother and more battery-friendly on phones and tablets.
 */
export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (touchDevice) {
      window.__lenis = null;
      return undefined;
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  return lenisRef;
}
