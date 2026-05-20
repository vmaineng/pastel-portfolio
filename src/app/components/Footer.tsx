import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#2e2a38] bg-[#111] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-4 font-mono text-xl uppercase tracking-[0.2em] text-purple-200/90"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            // Mai V
          </motion.div>

          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#8a7a9a]">
            Frontend engineer building thoughtful and modern interfaces,
            AI-powered tools, and open source contributions.
          </p>

          <motion.div
            className="mt-8 border-t border-[#2e2a38] pt-6 text-sm text-[#6f627f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Maizee. All rights reserved.
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-8 h-24 w-24 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 h-20 w-20 rounded-full bg-fuchsia-400/10 blur-3xl"
        animate={{
          y: [0, -8, 0],
          x: [0, 6, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
