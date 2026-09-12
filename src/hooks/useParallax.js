import { useEffect, useRef } from 'react';

/**
 * Lightweight desktop-only parallax.
 * Avoids GSAP + ScrollTrigger for a single image so the portfolio has less
 * JavaScript work and a smaller runtime cost.
 */
export default function useParallax(speed = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const el = ref.current;

    if (touchDevice || !el) return undefined;

    let rafId = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (viewportCenter - elementCenter) * speed;

      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      el.style.transform = '';
    };
  }, [speed]);

  return ref;
}
