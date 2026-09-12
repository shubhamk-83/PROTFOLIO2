import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiBriefcase, FiStar } from "react-icons/fi";

import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { fadeUp, viewportOnce } from "../animations/variants";
import { EDUCATION } from "../utils/data";

const ICONS = {
  education: FiBookOpen,
  certification: FiAward,
  internship: FiBriefcase,
  achievement: FiStar,
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education & Learning"
          title="My Academic Journey"
          description="My educational background and continuous learning journey that has shaped my skills in software development."
        />

        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          <div className="space-y-12">
            {EDUCATION.map((item, index) => {
              const Icon = ICONS[item.type] || FiBookOpen;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-void text-accent shadow-glow">
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <GlassCard hover className="flex-1 rounded-3xl p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-soft">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-accent">
                      {item.place}
                    </p>

                    <p className="mt-5 leading-8 text-mute">
                      {item.detail}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;