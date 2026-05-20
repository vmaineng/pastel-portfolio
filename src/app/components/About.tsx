import { motion } from "motion/react";

const BEYOND_ITEMS = [
  {
    tag: "Open Source",
    tagColor: "text-purple-300",
    accentColor: "bg-purple-300/60",
    title: ["Contributing to", "the Community"],
    body: "I regularly contribute to open source projects like PostHog — fixing bugs, shipping features, and reading through codebases I didn't write. It keeps me sharp and connected to what's being built in the real world.",
    link: {
      label: "View my contributions",
      href: "https://github.com/vmaineng",
    },
    image: "/images/opensource.jpg",
    imageAlt: "Open source contribution",
    reverse: false,
  },
  {
    tag: "Twitch / Teaching",
    tagColor: "text-rose-300",
    accentColor: "bg-rose-300/60",
    title: ["I Teach &", "Stream Live"],
    body: "Coding in public. I stream my open source contributions, project builds, and technical deep-dives on Twitch. Come hang and learn something.",
    link: {
      label: "Watch on Twitch",
      href: "https://www.twitch.tv/maiproject218",
    },
    image: "/images/twitch.jpg",
    imageAlt: "Twitch stream setup",
    reverse: true,
  },
  {
    tag: "Los Angeles",
    tagColor: "text-emerald-300",
    accentColor: "bg-emerald-300/60",
    title: ["Always Eating", "Around LA"],
    body: "When I'm not at my desk, I'm somewhere in LA with a bowl in front of me. From SGV noodles to Koreatown BBQ to hidden gem brunch spots. Please send me recommendations",
    link: null,
    image: "/images/la-food.jpg",
    imageAlt: "Los Angeles food",
    reverse: false,
  },
];

export function About() {
  return (
    <section id="beyond" className="min-h-screen bg-[#111] px-8 xl:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs text-[#5a4f6a] tracking-[0.15em] uppercase border-b border-[#2a2535] pb-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // <span className="text-purple-300">Beyond the IDE</span> — what i do
          when i&apos;m not pushing code
        </motion.p>

        <div className="flex flex-col gap-5">
          {BEYOND_ITEMS.map((item, i) => (
            <motion.div
              key={item.tag}
              className={`flex ${item.reverse ? "flex-row-reverse" : "flex-row"} items-stretch rounded-2xl border border-[#2e2a38] overflow-hidden bg-[#1a1620]`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Accent bar */}
              <div className={`w-1 shrink-0 ${item.accentColor}`} />

              <div className="w-64 xl:w-80 shrink-0 bg-[#221f2a] min-h-[180px]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-3 px-8 py-8 flex-1">
                <span
                  className={`font-mono text-[11px] uppercase tracking-widest ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <h2
                  className="text-[#f2ede6] leading-none tracking-wide"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h2>
                <p className="text-[#8a7a9a] text-sm leading-relaxed max-w-md">
                  {item.body}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-mono text-xs mt-1 ${item.tagColor} hover:opacity-70 transition-opacity`}
                  >
                    {item.link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
