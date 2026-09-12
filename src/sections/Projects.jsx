import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import ProjectModal from "../components/ProjectModal";

import { fadeUp, viewportOnce } from "../animations/variants";
import { PROJECTS } from "../utils/data";
import { useCursor } from "../context/CursorContext";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const { enter, leave } = useCursor();

  const handleOpen = (project) => {
    setSelected(project);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects."
          description="A mix of full-stack products, AI-assisted tools, and UI experiments — each one built end to end, from schema to shipped."
        />

        <div className="mt-16 flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{
                delay: index * 0.05,
              }}>
              <TiltCard
                onClick={() => handleOpen(project)}
                className="glass cursor-pointer overflow-hidden">
                <div
                  onMouseEnter={() => enter("view", "View")}
                  onMouseLeave={leave}
                  className="grid grid-cols-1 items-stretch md:grid-cols-[1.1fr_1fr]">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden md:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      width="1890"
                      height="900"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent md:bg-gradient-to-r" />

                    <span className="absolute left-5 top-5 font-display text-xs uppercase tracking-widest text-white/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                    <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="line-clamp-3 leading-relaxed text-mute">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                        Live Demo
                        <FiArrowUpRight />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-ink">
                        <FiGithub />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selected} onClose={handleClose} />
    </section>
  );
};

export default Projects;
