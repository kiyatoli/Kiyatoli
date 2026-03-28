import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { socialLinks } from "../data";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      from_name: formValues.name,
      reply_to: formValues.email,
      message: formValues.message
    };

    emailjs
      .send("service_64zt2ov", "template_ocatf5v", templateParams, "WOkTuDu6cUaWAhqXQ")
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully." });
        setFormValues({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // Helps debug EmailJS configuration issues in the console.
        console.error("EmailJS error:", error);
        setStatus({
          type: "error",
          message: error?.text
            ? `Message failed: ${error.text}`
            : "Message failed to send. Please try again."
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className="tag">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Let&apos;s Build Something</h2>
            <p className="mt-4 text-ink-600 dark:text-ink-200">
              Want to collaborate on a project or talk about internships? Send a message and I&apos;ll
              get back soon.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800">
                <FiMail />
              </span>
              <div>
                <p className="text-sm text-ink-500">Email</p>
                <p className="font-semibold">kiyatoliabdu@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800">
                <FiPhone />
              </span>
              <div>
                <p className="text-sm text-ink-500">Phone</p>
                <p className="font-semibold">+251 974 797 862</p>
                <p className="font-semibold">+251 913 390 157</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800">
                <FiSend />
              </span>
              <div>
                <p className="text-sm text-ink-500">Telegram</p>
                <p className="font-semibold">@kiyatoli</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 dark:bg-ink-800">
                <FiGithub />
              </span>
              <div>
                <p className="text-sm text-ink-500">Portfolio</p>
                <p className="font-semibold">kiyatoli.github.io/kiya/</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
              className="button-ghost"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={socialLinks[1].href}
              target="_blank"
              rel="noreferrer"
              className="button-ghost"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={socialLinks[2].href}
              target="_blank"
              rel="noreferrer"
              className="button-ghost"
            >
              <FiSend /> Telegram
            </a>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card space-y-4"
        >
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              value={formValues.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about your idea"
              value={formValues.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
          <button type="submit" className="button-primary w-full" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              className={`text-xs ${
                status.type === "success" ? "text-emerald-500" : "text-rose-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
