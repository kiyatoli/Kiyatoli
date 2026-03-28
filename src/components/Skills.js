import React from "react";
import { motion } from "framer-motion";
import { FiTool, FiTerminal, FiCode } from "react-icons/fi";
import { skills } from "../data";

const icons = {
  Frontend: <FiCode />,
  Backend: <FiTerminal />,
  Tools: <FiTool />
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-ink-100/60 dark:bg-ink-800/40 scroll-mt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <p className="tag">Skills</p>
          <h2 className="mt-4 font-display text-3xl font-semibold">Technical Toolkit</h2>
          <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-200">
            A mix of frontend tools, backend fundamentals, and design workflows that help me
            deliver thoughtful, user-focused products.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.title}
              className="card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200">
                  {icons[group.title]}
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink-600 dark:text-ink-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
