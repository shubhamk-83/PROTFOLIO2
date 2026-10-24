import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const name = "SHUBHAM";

  useEffect(() => {
    const start = performance.now();
    const duration = 800;

    let raf;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);

      setProgress(Math.floor(t * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;

    const timeout = setTimeout(() => {
      onFinish();
    }, 350);

    return () => clearTimeout(timeout);
  }, [done, onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="flex overflow-hidden">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-ink"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 + i * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-24 bg-white/15 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="font-display text-sm tabular-nums text-mute">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;