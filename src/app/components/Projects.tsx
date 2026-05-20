import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ProjectType } from "./ProjectCard";

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

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#111] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold tracking-tight">More Projects</h2>

          <p className="mt-4 text-lg text-white/60">
            Here are a few problems I&apos;ve solved.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
}
