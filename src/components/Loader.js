import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-14 w-14 rounded-full border-4 border-white/30 border-t-white"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
        <p className="text-sm uppercase tracking-[0.3em]">Loading</p>
      </div>
    </motion.div>
  );
}
