import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';
import RevealText from './RevealText';

/**
 * Standard heading block used at the top of every section: small eyebrow
 * label, large display heading with a word-by-word reveal, and an optional
 * supporting line.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-xs uppercase tracking-[0.3em] text-accent-soft"
        >
          {eyebrow}
        </motion.span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-ink">
        <RevealText text={title} />
      </h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="text-mute text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
