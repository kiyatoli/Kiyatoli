import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCpu, FiCode } from "react-icons/fi";
import { certificates } from "../data";

const highlights = [
  {
    icon: <FiCode />,
    title: "Frontend Builder",
    text: "Loves crafting responsive interfaces with React and Tailwind CSS."
  },
  {
    icon: <FiCpu />,
    title: "Problem Solver",
    text: "Enjoys breaking down complex problems into clean, maintainable code."
  },
  {
    icon: <FiAward />,
    title: "Curious Learner",
    text: "Always exploring new tools, frameworks, and software design patterns."
  }
];

export default function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="tag">About Me</p>
            <h2 className="font-display text-3xl font-semibold mt-4">
              Hi there, I&apos;m Kiyatoli.
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-200">
              I&apos;m a Computer Science graduate from Mattu University with a strong focus on
              frontend development and modern web experiences. I love translating ideas into
              intuitive interfaces, collaborating with teams, and building products that make
              everyday tasks simpler.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="card w-44 text-center">
              <p className="text-2xl font-semibold">3.33</p>
              <p className="text-sm text-ink-500">CGPA</p>
            </div>
            <div className="card w-44 text-center">
              <p className="text-2xl font-semibold">93%</p>
              <p className="text-sm text-ink-500">Exit Exam</p>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800">
                <span className="text-xl text-ink-700 dark:text-ink-200">{item.icon}</span>
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Certificates</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-ink-600 dark:text-ink-200">
            {certificates.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ember-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
