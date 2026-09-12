import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin fixed progress bar at the very top of the viewport, tracking scroll
 * position with a light spring for a smoother feel than a raw 1:1 mapping.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-soft to-white"
      style={{ scaleX }}
    />
  );
}
