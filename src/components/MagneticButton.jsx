import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

/**
 * Wraps its children in a button/link that gently follows the cursor within
 * its bounds ("magnetic" pull) and snaps back on leave. Also drives the
 * custom cursor's "link" variant while hovered.
 */
export default function MagneticButton({
  as: Tag = 'button',
  children,
  className = '',
  strength = 0.35,
  cursorVariant = 'link',
  ...props
}) {
  const ref = useRef(null);
  const { enter, leave } = useCursor();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    leave();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={() => enter(cursorVariant)}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Tag className={className} {...props}>
        {children}
      </Tag>
    </motion.div>
  );
}
