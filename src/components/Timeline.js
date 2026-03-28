import React from "react";
import { motion } from "framer-motion";
import { timeline } from "../data";

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad bg-ink-100/60 dark:bg-ink-800/40 scroll-mt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <p className="tag">Journey</p>
          <h2 className="mt-4 font-display text-3xl font-semibold">Education & Experience</h2>
          <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-200">
            Highlights from my academic path and hands-on experiences that shaped my growth.
          </p>
        </div>
        <div className="relative border-l border-ink-200 dark:border-ink-700 pl-6 space-y-8">
          {timeline.map((item) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-ink-500">{item.year}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-ink-600 dark:text-ink-200">{item.org}</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-accent-500 shadow" />
              </div>
              <p className="mt-4 text-sm text-ink-600 dark:text-ink-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
