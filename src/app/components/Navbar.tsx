"use client";

import { motion, AnimatePresence, Variants, Transition } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

  const hamburgerVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: "easeInOut" } as Transition,
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.25, ease: "easeInOut" } as Transition,
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="w-full mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm text-purple-300/80 tracking-[0.18em] uppercase hover:text-purple-200 transition-colors"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          // Mai V
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative font-mono text-sm text-[var(--text-secondary)] hover:text-purple-300 transition-colors"
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.2, duration: 0.3 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-0.5 left-0 w-full h-px bg-purple-300/60"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg-alt)] text-[var(--text-secondary)] hover:text-purple-300 hover:border-purple-300/40 transition-colors"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Toggle theme"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: NAV_ITEMS.length * 0.06 + 0.2, duration: 0.3 }}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg-alt)] text-[var(--text-secondary)] hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </motion.button>

          <motion.button
            className="flex flex-col gap-1.5 p-2 relative z-60"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            variants={hamburgerVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.2 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="w-5 h-px bg-purple-300 block"
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-px bg-purple-300 block"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="w-5 h-px bg-purple-300 block"
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 md:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 top-full bg-[var(--card-bg)]/95 backdrop-blur-md border-b border-[var(--card-border)] z-50 overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-mono text-base text-[var(--text-secondary)] hover:text-purple-300 text-left border-b border-[var(--card-border)] pb-4 last:border-0 last:pb-0 transition-colors"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ x: 6 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
