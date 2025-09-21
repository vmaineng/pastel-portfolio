import { motion, AnimatePresence, Variants, Transition } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // Fixed state name

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      } as Transition,
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      } as Transition,
    },
  };

  const hamburgerVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Mai V
          </motion.div>
          <div className="flex-1 hidden md:flex items-center justify-end">
            <div className="flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-purple-600 transition-colors relative"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                )
              )}
            </div>
          </div>
          <motion.button
            className="md:hidden flex flex-col space-y-1.5 p-2 z-60 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={hamburgerVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.2 }}
            aria-label="Toggle navigation menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-purple-600 block"
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
            />
            <motion.span
              className="w-6 h-0.5 bg-purple-600 block"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-purple-600 block"
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
            />
          </motion.button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-xl z-50 overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="container px-6 py-6">
                <nav className="flex flex-col space-y-6">
                  {["Home", "About", "Projects", "Skills", "Contact"].map(
                    (item, index) => (
                      <motion.button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-lg text-gray-800 py-2 text-left border-b border-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                      >
                        {item}
                      </motion.button>
                    )
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
