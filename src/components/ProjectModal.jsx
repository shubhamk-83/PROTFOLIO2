import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiArrowUpRight, FiGithub, FiPlay } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* 1. Backdrop layer — blur + dim only, sits behind everything */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-void/90 backdrop-blur-md"
            onMouseDown={onClose}
          />

          {/* 2. Scroll container — holds the card, no filter on this element.
              data-lenis-prevent tells the global Lenis smooth-scroll instance
              to ignore this element, so it scrolls natively instead of Lenis
              hijacking the wheel event and trying to scroll the page behind it. */}
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-4 md:p-10"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              className="relative z-[10000] my-auto w-full max-w-4xl overflow-hidden rounded-3xl glass-strong">
              {/* Project Image */}
              <div className="relative h-72 w-full overflow-hidden md:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-3xl font-medium text-ink md:text-4xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-10 p-6 md:p-10">
                {/* Buttons + Technologies */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg">
                    Live Demo
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50">
                    <FiGithub />
                    Source
                  </a>

                  <div className="ml-auto flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-mute md:text-lg">
                  {project.description}
                </p>

                {/* Features + Architecture */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Key Features */}
                  <div>
                    <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-accent-soft">
                      Key Features
                    </h4>

                    <ul className="flex flex-col gap-2.5">
                      {project.features?.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm text-mute">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-accent-soft">
                        Architecture
                      </h4>

                      <p className="text-sm leading-relaxed text-mute">
                        {project.architecture}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-accent-soft">
                        Challenge &amp; Solution
                      </h4>

                      <p className="text-sm leading-relaxed text-mute">
                        <span className="text-ink">{project.challenges}</span>{" "}
                        {project.solutions}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Preview Placeholder */}
                <div className="relative flex h-48 items-center justify-center rounded-2xl border border-dashed border-line bg-white/[0.02] md:h-64">
                  <div className="flex flex-col items-center gap-3 text-mute">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent shadow-glow">
                      <FiPlay />
                    </div>

                    <p className="text-sm">
                      Video preview available on request
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. Close Button — true sibling, not nested inside any
              filtered/scrolling element, so it stays fixed to the
              real viewport at all times, including on mobile scroll. */}
          <button
            type="button"
            aria-label="Close project details"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="fixed right-4 top-4 z-[10001] grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-void/80 text-ink shadow-lg backdrop-blur-md transition-colors hover:bg-accent/30 md:right-8 md:top-8">
            <FiX size={20} />
          </button>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectModal;
