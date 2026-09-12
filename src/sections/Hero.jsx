import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";
import { SOCIALS } from "../utils/data";
import { useCursor } from "../context/CursorContext";
import image from "../assets/images/shubham2.jpeg";

function Hero() {
  const { enter, leave } = useCursor();

  const goTo = (id) => {
    const el = document.getElementById(id);

    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, {
        offset: -80,
        duration: 1.2,
      });
    } else if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ================= LEFT SIDE ================= */}

        <div className="flex flex-col gap-8">
          {/* Availability Badge */}

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="glass inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-mute">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Open to Internship • Immediate Joiner
          </motion.span>

          {/* Heading */}

          <h1 className="font-display text-5xl font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            <RevealText text="Hi, I'm" delay={0.3} />

            <br />

            <RevealText
              text="Shubham Kumar"
              className="text-gradient"
              delay={0.5}
            />
          </h1>

          {/* Subtitle */}

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="text-xl font-semibold text-accent md:text-2xl">
            MERN Stack Developer • React Developer • AI Enthusiast
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="max-w-xl text-lg leading-relaxed text-mute">
            I build modern, scalable, and responsive web applications using the{" "}
            <span className="font-semibold text-ink">MERN Stack</span>.
            Passionate about creating meaningful digital experiences, solving
            real-world problems, and continuously learning modern technologies
            while preparing for Software Development internships.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
            className="flex flex-wrap items-center gap-4">
            <MagneticButton
              as="button"
              onClick={() => goTo("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg">
              Explore Projects
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://drive.google.com/file/d/1mpwx6yrrFeHKTPHW8IYhTOGfW8dx77Vd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50">
              <FiDownload />
              Download Resume
            </MagneticButton>

            <MagneticButton
              as="button"
              onClick={() => goTo("contact")}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-mute transition-colors hover:text-ink">
              <FiMail />
              Let's Connect
            </MagneticButton>
          </motion.div>
          {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
            }}
            className="flex items-center gap-4 pt-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                onMouseEnter={() => enter("link")}
                onMouseLeave={leave}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-mute transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent">
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          {/* Glow */}

          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-2xl" />

          {/* Image */}

          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-strong relative h-full w-full overflow-hidden rounded-[2.5rem] border border-line">
            <img
              src={image}
              alt="Shubham Kumar"
              width="1189"
              height="1189"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="glass-strong absolute -left-8 top-10 rounded-2xl px-4 py-3 shadow-card">
            <p className="text-xs text-mute">Currently Building</p>

            <p className="font-display text-sm font-semibold text-ink">
              AI Interview Preparation Platform
            </p>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="glass-strong absolute -right-6 bottom-14 rounded-2xl px-4 py-3 shadow-card">
            <p className="font-display text-2xl font-bold text-accent-soft">
              2
            </p>

            <p className="text-xs text-mute">Production Level Projects</p>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Down */}

      <motion.button
        onClick={() => goTo("about")}
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-mute transition-colors hover:text-ink"
        aria-label="Scroll to About Section">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <FiArrowDown size={18} />
      </motion.button>
    </section>
  );
}

export default Hero;
