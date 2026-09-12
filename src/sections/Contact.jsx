import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FiMail,
  FiPhone,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiCode,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss } from "react-icons/si";

import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import MagneticButton from "../components/MagneticButton";

import { fadeUp, viewportOnce } from "../animations/variants";

import { SOCIALS } from "../utils/data";

/* =========================================================
   FORM FIELDS
========================================================= */

const FIELDS = [
  {
    name: "name",
    label: "Your Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const SKILLS = [
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];

/* =========================================================
   TECH CLOUD — SCATTERED LOGO LAYOUT

   Real brand colors + varied scale, positioned by hand
   (percent-based) rather than in a formation, so the panel
   reads as a loose collage instead of a diagram.
========================================================= */

const TECH_CLOUD = [
  {
    skill: SKILLS[2],
    top: "12%",
    left: "40%",
    size: 46,
    rotate: -6,
    color: "#F7DF1E",
  }, // JavaScript
  {
    skill: SKILLS[3],
    top: "46%",
    left: "48%",
    size: 58,
    rotate: 0,
    color: "#61DAFB",
  }, // React (hero)
  {
    skill: SKILLS[0],
    top: "18%",
    left: "12%",
    size: 38,
    rotate: 8,
    color: "#E34F26",
  }, // HTML5
  {
    skill: SKILLS[1],
    top: "40%",
    left: "16%",
    size: 34,
    rotate: -5,
    color: "#2965F1",
  }, // CSS3
  {
    skill: SKILLS[4],
    top: "28%",
    left: "76%",
    size: 40,
    rotate: 6,
    color: "#3C873A",
  }, // Node.js
  {
    skill: SKILLS[5],
    top: "68%",
    left: "18%",
    size: 36,
    rotate: -8,
    color: "#47A248",
  }, // MongoDB
  {
    skill: SKILLS[6],
    top: "66%",
    left: "68%",
    size: 34,
    rotate: 6,
    color: "#38BDF8",
  }, // Tailwind
  {
    skill: SKILLS[7],
    top: "20%",
    left: "84%",
    size: 30,
    rotate: -10,
    color: "#F05032",
  }, // Git
];

const GHOST_ICONS = [
  { skill: SKILLS[0], top: "72%", left: "82%", size: 92, rotate: 14 },
  { skill: SKILLS[3], top: "10%", left: "68%", size: 104, rotate: -18 },
  { skill: SKILLS[4], top: "82%", left: "42%", size: 78, rotate: 10 },
  { skill: SKILLS[7], top: "50%", left: "4%", size: 66, rotate: -14 },
  { skill: SKILLS[6], top: "6%", left: "22%", size: 84, rotate: 20 },
  { skill: SKILLS[5], top: "56%", left: "90%", size: 70, rotate: -10 },
];

const CloudIcon = ({ item, index }) => {
  const Icon = item.skill.icon;

  // Per-item variance so the float doesn't feel mechanical —
  // each icon drifts on its own rhythm rather than in unison.
  const floatDuration = 3.2 + (index % 4) * 0.6;
  const floatDistance = 8 + (index % 3) * 3;
  const floatDelay = index * 0.35;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{
        delay: 0.15 + index * 0.06,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{
        top: item.top,
        left: item.left,
      }}>
      <motion.div
        animate={{
          y: [0, -floatDistance, 0],
          rotate: [item.rotate, item.rotate + 4, item.rotate - 2, item.rotate],
        }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2, rotate: 0, transition: { duration: 0.25 } }}
        className="group relative cursor-default">
        <Icon
          size={item.size}
          style={{
            color: item.color,
            filter: `drop-shadow(0 6px 18px ${item.color}33)`,
          }}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
        />

        <span className="pointer-events-none absolute left-1/2 top-full z-[100] mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-black/95 px-2 py-1 text-[8px] text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          {item.skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   GILDED CARD WRAPPER
   Adds a hairline gradient edge around a GlassCard so the
   panel reads as an inset, jewel-cut surface rather than a
   flat bordered box. Purely presentational — children keep
   full control of their own layout.
========================================================= */

const GildedFrame = ({ children, className = "" }) => (
  <div
    className={`relative rounded-[26px] bg-gradient-to-br from-accent/35 via-white/10 to-transparent p-px shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] ${className}`}>
    <div className="relative overflow-hidden rounded-[25px]">{children}</div>
  </div>
);

/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState("");

  /* =======================================================
     EMAILJS
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      {/* =====================================================
          AMBIENT BACKDROP
          A quiet radial wash + hairline grain gives the whole
          section a sense of depth instead of a flat fill.
      ===================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(var(--accent-rgb,120,120,255),0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <SectionHeading
          eyebrow="CONTACT"
          title="Let's Build Something Together."
          description="Whether you have a project, an internship opportunity, or just want to connect, I'd love to hear from you."
        />

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-8">
            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <GildedFrame>
              <GlassCard className="flex flex-col gap-6 p-7" hover={false}>
                {/* EMAIL */}

                <a
                  href="mailto:shubhamrajput5641@gmail.com"
                  className="group flex items-center gap-4">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent/25 via-accent/10 to-transparent text-accent-soft ring-1 ring-inset ring-accent/15 transition-all duration-500 group-hover:shadow-glow group-hover:ring-accent/40">
                    <FiMail size={18} className="relative z-10" />
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-mute">
                      Email
                    </p>

                    <p className="truncate text-sm font-medium text-ink">
                      shubhamrajput5641@gmail.com
                    </p>
                  </div>

                  <FiArrowUpRight
                    size={14}
                    className="shrink-0 text-mute opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft group-hover:opacity-100"
                  />
                </a>

                {/* DIVIDER */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />

                {/* PHONE */}

                <a
                  href="tel:+916206881394"
                  className="group flex items-center gap-4">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent/25 via-accent/10 to-transparent text-accent-soft ring-1 ring-inset ring-accent/15 transition-all duration-500 group-hover:shadow-glow group-hover:ring-accent/40">
                    <FiPhone size={18} className="relative z-10" />
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </span>

                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-mute">
                      Phone
                    </p>

                    <p className="text-sm font-medium text-ink">
                      +91 62068 81394
                    </p>
                  </div>

                  <FiArrowUpRight
                    size={14}
                    className="shrink-0 text-mute opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft group-hover:opacity-100"
                  />
                </a>

                {/* DIVIDER */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />

                {/* AVAILABILITY */}

                <div className="flex items-center gap-4">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 via-accent/10 to-transparent ring-1 ring-inset ring-accent/15">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-50" />

                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_currentColor]" />
                  </span>

                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-mute">
                      Availability
                    </p>

                    <p className="text-sm font-medium text-ink">
                      Open for Opportunities
                    </p>
                  </div>

                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-line/70 bg-white/[0.03] px-2.5 py-1 text-[10px] text-mute sm:flex">
                    <FiClock size={11} />
                    ~24h reply
                  </span>
                </div>

                {/* SOCIALS */}

                <div className="flex gap-3 pt-2">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      whileHover={{
                        y: -4,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full glass text-mute ring-1 ring-inset ring-transparent transition-all duration-300 hover:text-accent hover:shadow-glow hover:ring-accent/30">
                      <Icon size={15} />
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </GildedFrame>

            {/* =================================================
                TECHNOLOGY CLOUD

                A scattered logo field instead of an orbit:
                a faint oversized "ghost" layer for depth,
                and a crisp foreground layer in true brand
                colors at varied sizes, like a loose collage
                rather than a diagram.
            ================================================= */}

            <GildedFrame>
              <GlassCard
                className="relative h-[400px] overflow-hidden"
                hover={false}>
                {/* =================================================
                    AMBIENT WASH
                ================================================= */}

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 100%, rgba(0,0,0,0.35), transparent 60%)",
                  }}
                />

                {/* =================================================
                    TITLE
                ================================================= */}

                <div className="absolute left-0 right-0 top-6 z-40 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-mute">
                    Technologies I Work With
                  </p>
                </div>

                {/* =================================================
                    GHOST LAYER
                    Oversized, near-invisible duplicates for
                    texture and depth behind the real icons.
                ================================================= */}

                {GHOST_ICONS.map((g, i) => {
                  const Icon = g.skill.icon;
                  return (
                    <motion.div
                      key={`ghost-${i}`}
                      className="pointer-events-none absolute"
                      style={{ top: g.top, left: g.left }}
                      animate={{
                        y: [0, -14, 0],
                        rotate: [g.rotate, g.rotate - 5, g.rotate],
                      }}
                      transition={{
                        duration: 7 + (i % 3) * 1.5,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      <Icon size={g.size} className="text-white/[0.045]" />
                    </motion.div>
                  );
                })}

                {/* =================================================
                    FOREGROUND SCATTER
                    Real brand colors, varied scale, gentle
                    float on hover — no card chrome, just the
                    marks themselves against the dark field.
                ================================================= */}

                {TECH_CLOUD.map((t, i) => (
                  <CloudIcon key={t.skill.name} item={t} index={i} />
                ))}

                {/* =================================================
                    BOTTOM LABEL
                ================================================= */}

                <div className="absolute bottom-5 left-0 right-0 z-40 text-center">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-mute">
                    Build • Learn • Create
                  </span>
                </div>
              </GlassCard>
            </GildedFrame>
          </motion.div>

          {/* ===================================================
              RIGHT SIDE — FORM
          =================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{
              delay: 0.1,
            }}>
            <GildedFrame>
              <GlassCard className="p-7 md:p-9" hover={false}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mute">
                    Send a Message
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_currentColor]" />
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 pt-4">
                  {/* =================================================
                      NAME + EMAIL
                  ================================================= */}

                  {FIELDS.map((field) => (
                    <div key={field.name} className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        value={form[field.name]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            [field.name]: e.target.value,
                          })
                        }
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused("")}
                        placeholder=" "
                        disabled={sending}
                        className="peer w-full rounded-xl border border-line bg-white/[0.02] px-4 pb-2 pt-6 text-ink outline-none transition-all duration-300 focus:border-accent/60 focus:bg-white/[0.04] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb,120,120,255),0.08)] disabled:cursor-not-allowed disabled:opacity-60"
                      />

                      <label
                        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
                          form[field.name] || focused === field.name
                            ? "top-2 text-[11px] tracking-wide text-accent-soft"
                            : "top-4 text-sm text-mute"
                        }`}>
                        {field.label}
                      </label>

                      <span
                        className={`pointer-events-none absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-soft to-transparent transition-transform duration-500 ${
                          focused === field.name ? "scale-x-100" : ""
                        }`}
                      />
                    </div>
                  ))}

                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      placeholder=" "
                      disabled={sending}
                      className="peer w-full resize-none rounded-xl border border-line bg-white/[0.02] px-4 pb-2 pt-6 text-ink outline-none transition-all duration-300 focus:border-accent/60 focus:bg-white/[0.04] focus:shadow-[0_0_0_4px_rgba(var(--accent-rgb,120,120,255),0.08)] disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <label
                      className={`pointer-events-none absolute left-4 transition-all duration-300 ${
                        form.message || focused === "message"
                          ? "top-2 text-[11px] tracking-wide text-accent-soft"
                          : "top-4 text-sm text-mute"
                      }`}>
                      Tell me about your project
                    </label>

                    <span
                      className={`pointer-events-none absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-soft to-transparent transition-transform duration-500 ${
                        focused === "message" ? "scale-x-100" : ""
                      }`}
                    />
                  </div>

                  {/* =================================================
                      SUCCESS
                  ================================================= */}

                  {sent && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green-500/15">
                        <FiCheck size={14} />
                      </span>

                      <span>
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {/* =================================================
                      ERROR
                  ================================================= */}

                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-500/15">
                        <FiAlertCircle size={14} />
                      </span>

                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}

                  {/* =================================================
                      SEND BUTTON
                  ================================================= */}

                  <MagneticButton
                    as="button"
                    type="submit"
                    disabled={sending}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent via-accent to-accent-soft px-7 py-4 text-sm font-semibold text-white shadow-glow transition-shadow duration-300 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60">
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative z-10 flex items-center gap-2">
                      {sending ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : sent ? (
                        <>
                          <FiCheck />
                          Message Sent
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </form>
              </GlassCard>
            </GildedFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
