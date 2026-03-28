import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data";

export default function Projects() {
  const techFilters = useMemo(() => {
    const techs = new Set();
    projects.forEach((project) => project.tech.forEach((item) => techs.add(item)));
    return ["All", ...Array.from(techs)];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="tag">Projects</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Selected Work</h2>
            <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-200">
              A snapshot of projects that highlight my growth in UI engineering, product thinking,
              and collaboration.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {techFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition border ${
                  activeFilter === filter
                    ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900 border-transparent"
                    : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.name}
              className="card flex flex-col justify-between"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={`${project.name}-${item}`}
                      className="rounded-full bg-ink-100 dark:bg-ink-800 px-3 py-1 text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-ghost"
                  >
                    GitHub <FiGithub />
                  </a>
                )}
                {!project.demo && !project.github && (
                  <span className="text-xs text-ink-500">Not deployed yet</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
