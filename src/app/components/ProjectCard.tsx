"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export interface ProjectType {
  category: string;
  title: string;
  url: string;
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

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-colors duration-300"
    >
      <div className="flex items-center justify-between border-b border-[var(--card-border)] px-5 py-4 transition-colors duration-300">
        <BrowserDots />
        <div className="h-2 w-32 rounded-full bg-[var(--card-border)]" />
      </div>

      <div className="relative h-44 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent" />
      </div>

      <div className="space-y-5 p-4 sm:p-6">
        <div>
          <div
            className={`mb-2 text-xs font-semibold tracking-[0.2em] ${project.accent}`}
          >
            {project.category}
          </div>
          <div className="flex items-start justify-between gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-[var(--text-primary)] transition-colors duration-300">
                {project.title}
              </h3>

              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text-primary)]" />
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-secondary)] transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-purple-300/20 bg-[var(--card-bg-alt)] text-[var(--accent-purple)] px-3 py-1 text-xs transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--card-border)] bg-[var(--card-bg-alt)] px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg-alt)] py-3 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)]"
        >
          <span>{"</>"}</span>
          {open ? "Hide Technical Deep Dive" : "Technical Deep Dive"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
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
              <div className="rounded-2xl border border-purple-300/20 bg-[var(--card-bg-alt)] p-4 sm:p-5 transition-colors duration-300">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--accent-purple)]">
                  {project.deepDive.title}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
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
