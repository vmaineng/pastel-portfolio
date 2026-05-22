import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#3a3050] bg-[#111] px-4 sm:px-6 py-10 sm:py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <motion.div
              className="inline-block font-mono text-sm uppercase tracking-[0.18em] text-purple-300"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              // Mai V
            </motion.div>

            <p className="max-w-md text-xs leading-relaxed text-[#8a7a9a]">
              Software engineer building thoughtful interfaces, AI-powered
              tools, and open source contributions.
            </p>
          </div>

          <div className="text-xs tracking-wide text-[#5a4f6a] sm:text-right">
            © {new Date().getFullYear()} Maizee. All rights reserved.
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/[0.04] blur-3xl" />
    </footer>
  );
}
