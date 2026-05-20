import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export function Contact() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/vmaineng",
      label: "GitHub",
      hover: "hover:text-purple-200",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mai-vang-swe/",
      label: "LinkedIn",
      hover: "hover:text-purple-200",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/MaiVangSWE",
      label: "Twitter",
      hover: "hover:text-purple-200",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "United States",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#2e2a38] bg-[#111] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-purple-300/70">
            // Contact
          </p>

          <h2 className="text-5xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Open to discussing frontend engineering, AI products, open source,
            or interesting ideas floating around the internet at 1:14am.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-[#2e2a38]/10 bg-[#1a1a1a]/[0.03] p-8 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-purple-100">
              Get in Touch
            </h3>

            <p className="mb-8 text-sm leading-relaxed text-white/65">
              I&apos;m always interested in thoughtful products, collaborative
              engineering, and conversations about building better user
              experiences.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.text}
                  className="flex items-center gap-4 rounded-2xl border border-purple-300/10 bg-[#221f2a] p-4"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 6,
                  }}
                >
                  <div className="rounded-xl border border-purple-300/10 bg-[#2a2533] p-3 text-purple-200">
                    <info.icon className="h-5 w-5" />
                  </div>

                  <span className="text-[#c8bcd8] text-sm">{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-[#2e2a38]/10 bg-[#1a1a1a]/[0.03] p-8 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-purple-100">
              Follow Me
            </h3>

            <p className="mb-8 text-sm leading-relaxed text-white/65">
              I share engineering thoughts, debugging sessions, open source
              work, and occasional late-night frontend discoveries.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`rounded-2xl border border-purple-300/10 bg-[#221f2a] p-4 text-[#8a7a9a] transition-colors ${social.hover}`}
                  whileHover={{
                    scale: 1.06,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08 + 0.3,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
}
