import React from "react";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { socialLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 dark:border-ink-800">
      <div className="section-pad mx-auto max-w-6xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-500">© 2026 Kiyatoli Abduljelil</p>
        <div className="flex gap-4 text-ink-600 dark:text-ink-200">
          <a href={socialLinks[0].href} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={socialLinks[1].href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={socialLinks[2].href} target="_blank" rel="noreferrer" aria-label="Telegram">
            <FiSend />
          </a>
        </div>
      </div>
    </footer>
  );
}
