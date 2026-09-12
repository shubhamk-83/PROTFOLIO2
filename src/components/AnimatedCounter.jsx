import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Counts up from 0 to `value` once it scrolls into view, using a spring so
 * the motion eases naturally rather than ticking linearly.
 */
export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString() + suffix;
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}
