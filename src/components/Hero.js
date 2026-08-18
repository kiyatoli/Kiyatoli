import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const roles = [
  "Building modern web applications",
  "Designing clean user experiences",
  "Solving real-world problems"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 70;
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? typedText.length - 1 : typedText.length + 1;
      setTypedText(current.slice(0, nextLength));

      if (!isDeleting && nextLength === current.length) {
        setTimeout(() => setIsDeleting(true), 900);
      }
      if (isDeleting && nextLength === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 scroll-mt-24">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tag">Available for internships</span>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="gradient-text">Kiyatoli Abduljelil</span>
            </h1>
            <p className="text-lg text-ink-600 dark:text-ink-200">
              Front-End Developer · Computer Science Graduate
            </p>
            <div className="text-xl font-medium text-ink-800 dark:text-ink-100 min-h-[2rem]">
              <span className="border-r-2 border-ink-400 pr-2">{typedText}</span>
            </div>
          </div>
          <p className="max-w-xl text-base text-ink-600 dark:text-ink-200">
            Passionate about building scalable web apps, learning emerging technologies, and
            collaborating on impactful software projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              View Projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="button-ghost">
              Contact Me
            </a>
            <a href="/Doc/kiaytoli cv.pdf" className="button-ghost" download>
              Download CV <FiDownload />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-32 w-32 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="card glass relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
              <div className="relative flex flex-col items-center gap-6 text-center">
                <div className="h-44 w-44 overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-800 shadow-soft">
                  <img
  src="/Photo/122A233745.JPG"
  alt="Kiyatoli Abduljelil"
  className="h-full w-full object-cover"
/>
                </div>
                <div>
                  <p className="text-lg font-semibold">Kiyatoli Abduljelil</p>
                  <p className="text-sm text-ink-600 dark:text-ink-300">
                    Computer Science Graduate
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border border-ink-100 dark:border-ink-800 px-4 py-3">
                    <p className="font-semibold">5</p>
                    <p className="text-xs text-ink-500">Projects</p>
                  </div>
                  <div className="rounded-xl border border-ink-100 dark:border-ink-800 px-4 py-3">
                    <p className="font-semibold">2025</p>
                    <p className="text-xs text-ink-500">Graduation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
