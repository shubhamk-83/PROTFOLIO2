import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { fadeUp, scaleIn, viewportOnce } from "../animations/variants";

import naukriCertificate from "../assets/Certificate/Naurkri.jpeg";
import sakshamCertificate from "../assets/Certificate/saksham_internship_certificate-1.png";
import tcsCertificate from "../assets/Certificate/tcs_ion_certificate-1.png";

const CERTIFICATES = [
  {
    title: "Naukri Campus Young Turks 2026",
    issuer: "Naukri Campus & HCLTech",
    date: "October 19, 2026",
    description:
      "Awarded a Certificate of Merit for scoring in the 94.61 percentile in Naukri Campus Young Turks 2026, India's largest skill contest.",
    image: naukriCertificate,
    type: "Certificate of Merit",
    highlight: "94.61 percentile",
  },
  {
    title: "Web Designing Internship Training",
    issuer: "Saksham Digital Technology",
    date: "July 8–12, 2024",
    description:
      "Successfully completed one week of internship training in Web Designing.",
    image: sakshamCertificate,
    type: "Internship Certificate",
    highlight: "Hands-on training",
  },
  {
    title: "TCS iON Career Edge – AI Foundation",
    issuer: "Tata Consultancy Services (TCS iON)",
    date: "October 11, 2026",
    description:
      "Completed training in AI fundamentals, Generative AI, prompt engineering, AI tools, and responsible AI.",
    image: tcsCertificate,
    type: "Certificate of Achievement",
    highlight: "Generative AI",
  },
];

/* ---------- Small icons ---------- */
const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6" />
    <path d="M9 21H3v-6" />
    <path d="m21 3-7 7" />
    <path d="m3 21 7-7" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

/* ---------- Lightbox ---------- */
const Lightbox = ({ certificate, onClose }) => {
  useEffect(() => {
    if (!certificate) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/90 shadow-2xl"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <p className="truncate font-display text-base font-bold text-white md:text-lg">
                  {certificate.title}
                </p>
                <p className="truncate text-xs text-blue-400">
                  {certificate.issuer}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
                >
                  Open original
                  <ExternalIcon />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close preview"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/15"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black/40 p-4 md:p-6">
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------- Certificate card with 3D tilt + cursor spotlight ---------- */
const CertificateCard = ({ certificate, index, onPreview }) => {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), springConfig);

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(96,165,250,0.18), transparent 60%)`;
  const borderGlow = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(96,165,250,0.9), rgba(139,92,246,0.4) 45%, transparent 70%)`;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    px.set(x / rect.width);
    py.set(y / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.12 }}
      style={{ perspective: 1200 }}
      className="group relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full rounded-2xl p-px will-change-transform"
      >
        {/* Animated gradient border that follows the cursor */}
        <motion.div
          aria-hidden="true"
          style={{ background: borderGlow }}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Static hairline border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"
        />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-neutral-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
          {/* Cursor spotlight */}
          <motion.div
            aria-hidden="true"
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Index watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-3 z-0 select-none font-display text-6xl font-black leading-none text-white/[0.04]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Certificate Image */}
          <motion.div variants={fadeUp} className="relative p-4 pb-0">
            <button
              type="button"
              onClick={() => onPreview(certificate)}
              aria-label={`Preview ${certificate.title}`}
              className="relative flex h-72 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black/40 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                className="h-full w-full rounded-md object-contain shadow-lg shadow-black/50 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Shine sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[130%] group-hover:opacity-100"
              />

              {/* Hover overlay */}
              <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <ExpandIcon />
                  Click to preview
                </span>
              </span>
            </button>
          </motion.div>

          {/* Certificate Details */}
          <div
            className="relative z-20 flex flex-1 flex-col items-start gap-4 p-6"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                <AwardIcon />
                {certificate.type}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-mute">
                <CalendarIcon />
                {certificate.date}
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold leading-snug text-white md:text-2xl">
                {certificate.title}
              </h3>
              <p className="mt-1.5 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-sm font-semibold text-transparent">
                {certificate.issuer}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-mute">
              {certificate.description}
            </p>

            <div className="mt-auto flex w-full flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onPreview(certificate)}
                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <span className="relative z-10">View Certificate</span>
                <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                  <ExternalIcon />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                />
              </button>

              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-mute underline-offset-4 transition hover:text-white hover:underline"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ---------- Section ---------- */
const STATS = [
  { value: `${CERTIFICATES.length}`, label: "Certifications" },
  { value: "94.61", label: "Percentile Score" },
  { value: "AI + Web", label: "Focus Areas" },
];

const Achievements = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements & Certifications"
          title="Certificates & Recognition."
          align="center"
          description="Celebrating milestones that reflect my technical skills, problem-solving abilities, and continuous learning."
        />

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-3 py-5 text-center md:px-6">
              <p className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-mute md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CERTIFICATES.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
              onPreview={setActive}
            />
          ))}
        </div>
      </div>

      <Lightbox certificate={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Achievements;