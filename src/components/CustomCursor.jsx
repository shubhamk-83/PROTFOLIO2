import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

/**
 * Two-part custom cursor: a tight dot that tracks instantly, and a spring-lagged
 * ring that stretches slightly along the direction of travel and morphs based on
 * the active cursor variant (default / link / view / drag).
 */
export default function CustomCursor() {
  const { variant, label } = useCursor();
  const [isDown, setIsDown] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 320, mass: 0.5 });

  const lastPos = useRef({ x: 0, y: 0 });
  const stretch = useMotionValue(1);
  const angle = useMotionValue(0);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;

    const onMove = (e) => {
      setVisible(true);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.min(Math.hypot(dx, dy) / 12, 1);
      stretch.set(1 + speed * 0.5);
      angle.set(Math.atan2(dy, dx) * (180 / Math.PI));
      lastPos.current = { x: e.clientX, y: e.clientY };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [mouseX, mouseY, stretch, angle]);

  const isLink = variant === 'link';
  const isView = variant === 'view';

  return (
    <div className={`hidden md:block transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-accent/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: angle,
        }}
        animate={{
          width: isLink || isView ? 72 : isDown ? 28 : 40,
          height: isLink || isView ? 72 : isDown ? 28 : 40,
          backgroundColor: isLink || isView ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0)',
          scaleX: stretch.get(),
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {isView && (
          <span className="text-[10px] font-display uppercase tracking-widest text-white">
            {label || 'View'}
          </span>
        )}
      </motion.div>
    </div>
  );
}
