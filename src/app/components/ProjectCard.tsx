import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export interface ProjectType {
  category: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tags: string[];
  accent: string;
  deepDive: {
    title: string;
    content: string;
  };
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

function BrowserDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-400" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-400" />
    </div>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
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
      <div className="flex items-center justify-between border-b border-[#2e2a38]/10 px-5 py-4">
        <BrowserDots />

        <div className="h-2 w-32 rounded-full bg-white/10" />
      </div>

      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
      </div>

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
