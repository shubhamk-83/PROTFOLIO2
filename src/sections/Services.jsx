import { motion } from 'framer-motion';
import { FiCode, FiFeather, FiLayers, FiShare2, FiCpu } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { fadeUp, viewportOnce } from '../animations/variants';
import { SERVICES } from '../utils/data';

const ICONS = [FiCode, FiFeather, FiLayers, FiShare2, FiCpu];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help."
          description="From a single interface to a full product build — here's where I add the most value."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="group h-full p-7" hover>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-xl text-accent-soft transition-all group-hover:bg-accent/20 group-hover:shadow-glow">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm text-mute leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
