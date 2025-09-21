import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Mai V
          </motion.div>

          <motion.div
            className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            &copy;{new Date().getFullYear()} Maizee. All rights reserved.
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-16 right-16 w-8 h-8 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
