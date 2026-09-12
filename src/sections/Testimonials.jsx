import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { TESTIMONIALS } from "../utils/data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(id);
  }, [paused]);

  const go = (dir) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="PEER FEEDBACK"
          title="Kind Words."
          align="center"
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="p-10 md:p-12 text-center" hover={false}>
                <p className="font-display text-xl md:text-2xl leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-8">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-mute">{t.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous feedback"
              className="grid h-10 w-10 place-items-center rounded-full glass text-mute hover:text-ink transition-colors"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to feedback ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next feedback"
              className="grid h-10 w-10 place-items-center rounded-full glass text-mute hover:text-ink transition-colors"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;