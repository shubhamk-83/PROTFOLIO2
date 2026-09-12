import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Wraps children with a subtle 3D tilt that follows the cursor position
 * within the card bounds, plus a glow border that fades in on hover.
 */
export default function TiltCard({ children, className = '', glow = true, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={glow ? { boxShadow: '0 0 0 1px rgba(59,130,246,0.5), 0 20px 60px rgba(59,130,246,0.25)' } : undefined}
      className={`relative rounded-3xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
