import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { fadeUp, viewportOnce } from "../animations/variants";
import { ABOUT_STATS } from "../utils/data";
import useParallax from "../hooks/useParallax";
import myImg from "../assets/images/shubham.jpeg";

function About() {
  const parallaxRef = useParallax(-0.12);

  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Passionate about Building Real-World Software."
          description="I'm a Computer Science student and MERN Stack Developer who enjoys building scalable web applications, solving real-world problems, and continuously learning modern technologies."
        />

        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative">
            <GlassCard className="overflow-hidden p-2" hover={false}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  ref={parallaxRef}
                  src={myImg}
                  alt="Shubham Kumar"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </GlassCard>

            {/* ================= FLOATING CARD ================= */}

            <div className="absolute -bottom-5 -right-4 z-10 hidden md:block">
              <GlassCard className="px-6 py-5">
                <p className="font-display text-3xl font-bold text-accent-soft">
                  3+
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-mute">
                  Years Learning
                </p>
              </GlassCard>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <div className="flex flex-col gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-6 text-base leading-8 text-mute md:text-lg">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-ink">Shubham Kumar</span>, a
                B.Tech Computer Science student at{" "}
                <span className="font-medium text-accent">
                  Sagar Institute of Research & Technology (SIRT), Bhopal.
                </span>{" "}
                I enjoy building modern, responsive, and scalable web
                applications using the MERN Stack.
              </p>

              <p>
                Over the last few years, I have built several real-world
                projects including an{" "}
                <span className="text-ink">
                  AI Interview Preparation Platform
                </span>
                , <span className="text-ink">GreenCart</span>, and multiple
                frontend applications using React.js and Tailwind CSS.
              </p>

              <p>
                I am currently focused on strengthening my knowledge of Full
                Stack Development, Data Structures & Algorithms, and Generative
                AI while preparing for Software Development internships. My goal
                is to contribute to meaningful products, learn from experienced
                engineers, and grow into a skilled Full Stack Developer.
              </p>
            </motion.div>

            {/* ================= STATS ================= */}

            <div className="grid grid-cols-2 gap-5">
              {ABOUT_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  transition={{
                    delay: index * 0.08,
                  }}>
                  <GlassCard className="p-6" hover>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display text-4xl font-bold text-ink"
                    />

                    <p className="mt-2 text-sm text-mute">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
