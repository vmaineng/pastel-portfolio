"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Software Engineer",
  "AI App Builder",
  "Open Source Contributor",
  "Finance → Frontend",
];

const STACK = [
  { label: "TypeScript", color: "#a5b4fc" },
  { label: "React", color: "#93c5fd" },
  { label: "Next.js", color: "#f2ede6" },
  { label: "Python", color: "#fcd34d" },
  { label: "AI Tooling", color: "#d8b4fe" },
];

const RECEIPTS = [
  {
    tag: "Open Source",
    tagColor: "text-purple-300",
    title: "PostHog Contributor",
    sub: "5+ merged PRs — y-axis toggle, CSS pointer-events fix, tag sorting, cloud region wiring",
    accent: true,
  },
  {
    tag: "AI Product",
    tagColor: "text-rose-300",
    title: "Junior Repo Analyzer",
    sub: "Open Source Analyzer — Supabase, Next.js, Typescript, Claude API search layer",
    accent: false,
  },
  {
    tag: "Freelance",
    tagColor: "text-emerald-300",
    title: "GridIron Survivor",
    sub: "Fantasy Flag Football — Working with a team of 12 to build a full-stack app for managing fantasy football leagues",
    accent: false,
  },
  {
    tag: "Career Arc",
    tagColor: "text-purple-300",
    title: "Finance → Frontend",
    sub: "I read spreadsheets and data while shipping PRs. Not many devs can say both.",
    accent: true,
  },
];

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(word.slice(0, charIdx + 1));
          if (charIdx + 1 === word.length) {
            setTimeout(() => setDeleting(true), 1400);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(word.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setIdx((i) => (i + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, words]);

  return display;
}

export function Hero() {
  const role = useTypewriter(ROLES);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 sm:px-8 pt-16 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div
          className="flex flex-col gap-4 w-full lg:w-80 xl:w-96 lg:shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-purple-300/80 tracking-[0.18em] uppercase">
            // Software Engineer
          </p>

          <div className="relative w-full h-64 lg:h-56 rounded-2xl overflow-hidden border-[1.5px] border-purple-300/40 shrink-0">
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-[var(--card-bg)]/85 rounded-b-2xl">
              <p
                className="text-2xl text-[var(--text-primary)] tracking-wide leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Mai Neng Vang
              </p>
              <span className="font-mono text-[11px] text-purple-300/70 tracking-wider">
                Software Engineer — React, TypeScript, AI — 5 merged PRs in
                PostHog
              </span>
            </div>
          </div>

          <div className="font-mono text-sm text-purple-200/60 h-6 flex items-center gap-1.5">
            {role}
            <span className="inline-block w-2 h-3.5 bg-purple-300/70 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2.5">
            {STACK.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg-alt)] transition-colors duration-300"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: s.color }}
                />
                <span className="font-mono text-sm text-[var(--text-primary)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-full w-fit transition-colors duration-300"
            style={{
              border: `1px solid var(--badge-border)`,
              background: `var(--badge-bg)`,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span
              className="font-mono text-xs"
              style={{ color: `var(--badge-text)` }}
            >
              Open to work
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col flex-1 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="font-mono text-xs text-[var(--text-muted)] tracking-[0.15em] uppercase border-b border-[var(--card-border)] pb-4 transition-colors duration-300">
            // Receipts — things I&apos;ve actually shipped
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {RECEIPTS.map((r) => (
              <motion.div
                key={r.title}
                className={`rounded-2xl p-5 border flex flex-col gap-2 transition-colors duration-300 ${
                  r.accent
                    ? "bg-[var(--card-bg)] border-[var(--card-border)]"
                    : "bg-[var(--card-bg-alt)] border-[var(--card-border)]"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span
                  className={`font-mono text-[11px] uppercase tracking-widest ${r.tagColor}`}
                >
                  {r.tag}
                </span>
                <p className="text-[var(--text-primary)] font-bold text-base leading-snug">
                  {r.title}
                </p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {r.sub}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              className="flex-1 min-w-[140px] px-8 py-3 rounded-full bg-[var(--accent-purple)] text-white text-sm font-bold tracking-wide hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("projects")}
            >
              View Projects →
            </motion.button>
            <motion.button
              className="flex-1 min-w-[140px] px-8 py-3 rounded-full border border-[var(--card-border)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("contact")}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
