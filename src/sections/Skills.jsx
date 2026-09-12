import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";

import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../animations/variants";

import { SKILLS } from "../utils/data";

const categories = Object.keys(SKILLS);

function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I Work With."
          description="A collection of programming languages, frameworks, tools, and modern technologies I use to build responsive, scalable, and real-world web applications."
        />

        {/* Category Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-white shadow-glow"
                  : "glass border border-line text-mute hover:border-accent/40 hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 20 }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SKILLS[activeCategory].map((skill) => (
              <motion.div key={skill.name} variants={fadeUp}>
                <GlassCard
                  className="group relative overflow-hidden p-6"
                  hover
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                  </div>

                  {/* Skill Header */}
                  <div className="relative flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-2xl text-accent-soft transition-all duration-300 group-hover:bg-accent/15 group-hover:text-accent group-hover:shadow-glow">
                      <skill.icon size={28} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-xs uppercase tracking-wider text-mute">
                        {skill.level}% Confidence
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative mt-6">
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent via-accent-soft to-accent"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={viewportOnce}
                        transition={{
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;