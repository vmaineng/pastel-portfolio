import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    category: "Conference Project",
    title: "PyCon 2026 Schedule",
    description:
      "Enhanced user experience with real-time updates, interactive visualizations, and personalized recommendations.",
    image: "/pycon.png",
    tech: ["Supabase", "React.js", "Next.js"],
    tags: ["AI Chat", "Real-time Sync", "Analytics"],
    accent: "text-emerald-400",

    deepDive: {
      title: "Personalized Conference Scheduler with AI",
      content:
        "Why: Lots of conference attendees struggle to choose between simultaneous talks and create a schedule that fits their interests. I built an AI-powered scheduler that generates personalized agendas based on user preferences, past behavior, and real-time updates to talk availability.",
    },
  },

  {
    category: "PRODUCTIVITY TOOL",
    title: "Junior Repo Analyzer",
    description:
      "Optimized time to not searching through documentation or source code to understand unfamiliar codebases.",

    image: "/junior.png",

    tech: ["React", "GitHub API", "Claude API"],

    tags: ["GitHub API", "WebSockets", "Drag & Drop"],

    accent: "text-blue-400",

    deepDive: {
      title: "Open Source Codebase Analyzer with AI",
      content:
        "Why? When I contribute to new open source projects, I waste a lot of time searching through documentation and source code to understand the codebase. I built an AI-powered tool that generates interactive visualizations of unfamiliar codebases, so I can get up to speed faster and spend more time writing code.",
    },
  },

  {
    category: "HR-Powered Mock Interviews",
    title: "JD-AI",

    description:
      "Simulated real-world interview scenarios with AI-generated questions and feedback, helping candidates prepare more effectively for technical interviews.",

    image: "/jd.png",

    tech: ["Voice-Powered", "Next.js", "React.js"],

    tags: ["Voice", "Pub/Sub", "Live Chat"],

    accent: "text-purple-400",

    deepDive: {
      title: "AI-Powered Mock Interview Platform",
      content:
        "Why? Traditional mock interview platforms often fail to replicate the dynamic nature of real interviews, leaving candidates underprepared. I built an AI-powered mock interview platform that simulates real-world interview scenarios with AI-generated questions and feedback, helping candidates prepare more effectively for technical interviews.",
    },
  },
];

function BrowserDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-400" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-400" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-[#2e2a38]/10 bg-[#1a1a1a]/[0.03] backdrop-blur-xl"
    >
      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-[#2e2a38]/10 px-5 py-4">
        <BrowserDots />

        <div className="h-2 w-32 rounded-full bg-white/10" />
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <div
            className={`mb-2 text-xs font-semibold tracking-[0.2em] ${project.accent}`}
          >
            {project.category}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-bold leading-tight">
              {project.title}
            </h3>

            <ArrowUpRight className="mt-1 h-5 w-5 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/65">
          {project.description}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-purple-300/10 bg-[#221f2a] text-purple-200/80 px-3 py-1 text-xs "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2e2a38]/10 bg-[#1a1a1a]/[0.03] px-3 py-1 text-[10px] uppercase tracking-wider text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2e2a38]/10 bg-[#1a1a1a]/[0.02] py-3 text-sm text-white/70 transition hover:bg-[#1a1a1a]/[0.05]"
        >
          <span>{"</>"}</span>

          {open ? "Hide Technical Deep Dive" : "Technical Deep Dive"}

          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Expandable Section */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl border border-purple-300/10 bg-black/30 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-purple-200/80">
                  {project.deepDive.title}
                </p>

                <p className="text-sm leading-relaxed text-white/70">
                  {project.deepDive.content}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold tracking-tight">More Projects</h2>

          <p className="mt-4 text-lg text-white/60">
            Here are a few problems I&apos;ve solved.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
}
