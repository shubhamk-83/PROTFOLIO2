import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { fadeUp, viewportOnce } from '../animations/variants';
import { EXPERIENCE } from '../utils/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          description="Hands-on roles that shaped how I ship — from client freelance work to production engineering."
        />

        <div className="mt-16 flex flex-col gap-5">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="p-7 md:p-8" hover>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/10 font-display text-lg font-semibold text-accent-soft">
                      {job.logo}
                    </div>
                    <div>
                      <p className="font-display text-lg font-medium text-ink">{job.role}</p>
                      <p className="text-sm text-mute">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-mute mb-4">
                      {job.duration}
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3 text-sm text-mute leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
