import { useEffect, useRef } from 'react';

/**
 * A soft radial glow that follows the pointer, layered above AmbientBackground
 * and below content. Purely visual, disabled on touch devices.
 */
export default function MouseSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;

    const el = ref.current;
    let raf;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (el) el.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[440px] w-[440px] rounded-full opacity-60 mix-blend-screen hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)',
        willChange: 'transform',
      }}
    />
  );
}
