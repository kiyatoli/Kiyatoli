import React, { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ darkMode, setDarkMode, toggleLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-white/80 dark:bg-ink-900/80 backdrop-blur border-b border-ink-100 dark:border-ink-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Kiyatoli Abduljelil
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            aria-label={toggleLabel}
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label={toggleLabel}
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
