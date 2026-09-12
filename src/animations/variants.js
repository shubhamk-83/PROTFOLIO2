// Shared Framer Motion variants used across sections for consistent motion language.

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(14px)', y: 24 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Splits a string into words for letter/word-level reveal animations.
export const letterContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035 },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const viewportOnce = { once: true, amount: 0.25 };
