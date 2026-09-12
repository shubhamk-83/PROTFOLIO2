import { motion } from 'framer-motion';

/**
 * Base glassmorphic card with hover lift + glow. Accepts any children and
 * merges extra classNames so it can be specialized per section.
 */
export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 0 40px rgba(59,130,246,0.25)' } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`glass rounded-2xl shadow-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
