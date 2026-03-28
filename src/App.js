import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const prefersDark = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return prefersDark();
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleLabel = useMemo(() => (darkMode ? "Switch to Light" : "Switch to Dark"), [darkMode]);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 dark:bg-ink-900 dark:text-ink-50">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleLabel={toggleLabel} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
