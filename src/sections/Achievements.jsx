import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { fadeUp, scaleIn, viewportOnce } from "../animations/variants";
import { ACHIEVEMENTS } from "../utils/data";

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="By the numbers."
          align="center"
          description="A quick snapshot of consistency over time — more useful as a habit than a highlight reel."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard
                className="flex flex-col items-center gap-2 p-8 text-center"
                hover
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-4xl md:text-5xl font-semibold text-gradient"
                />
                <p className="text-sm text-mute">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center text-mute max-w-xl mx-auto"
        >
          Numbers aren't the goal — they're a byproduct of showing up and
          shipping consistently, project after project.
        </motion.p>
      </div>
    </section>
  );
};

export default Achievements;