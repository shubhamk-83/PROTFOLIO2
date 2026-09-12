import { motion } from 'framer-motion';
import { letterContainer, letter, viewportOnce } from '../animations/variants';

/**
 * Animates text word-by-word (default) or letter-by-letter into view.
 * Use `as` to control the rendered tag (h1, h2, p, span...).
 */
export default function RevealText({
  text,
  as: Tag = 'span',
  className = '',
  mode = 'word',
  delay = 0,
}) {
  const pieces = mode === 'letter' ? text.split('') : text.split(' ');

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={letterContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delayChildren: delay }}
      style={{ perspective: 800 }}
    >
      {pieces.map((piece, i) => (
        <motion.span key={i} variants={letter} className="inline-block" style={{ transformOrigin: 'bottom' }}>
          {piece}
          {mode === 'word' && i !== pieces.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function RevealTag({ children, as: Tag = 'h2', className = '', ...props }) {
  return <Tag className={className} {...props}>{children}</Tag>;
}
