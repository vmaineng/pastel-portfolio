"use client";

import { motion } from "motion/react";

export function Testominals() {
  return (
    <section id="testimonials" className="bg-[#111] px-8 xl:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-[#5a4f6a] tracking-[0.15em] uppercase border-b border-[#2a2535] pb-4 mb-8">
            // <span className="text-purple-300">Kind Words</span>
          </p>
          <h2
            className="text-[#f2ede6] tracking-wide mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            What People Say
          </h2>
          <p className="text-[#8a7a9a] text-sm mb-10">
            Straight from the people I&apos;ve worked with.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 rounded-2xl p-7 bg-[#1e1a2a] border border-[#4a3f68]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-purple-300/40 leading-none select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "64px",
              lineHeight: "0.6",
            }}
          >
            &ldquo;
          </span>

          <p className="text-[#d4cce0] text-base leading-relaxed italic">
            Mai Vang is a fantastic individual that brings innovation and
            creativity to any work she is presented with! Mai is currently one
            of my students at Hanawilo, and during the entire interaction with
            her, she always embodies delivering high quality deliverables to
            approaching solutions while considering and supporting ideas from
            other peers as well. I highly recommend Mai to any organization that
            is willing to give her an opportunity!
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-[#2e2a38]">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-300 to-emerald-300 flex items-center justify-center shrink-0">
              <span
                className="text-[#1a1620] font-bold"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "18px",
                }}
              >
                H
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#f2ede6] font-bold text-sm">
                Instructor / Manager
              </span>
              <span className="font-mono text-[10px] text-purple-300">
                Hanawilo
              </span>
              <span className="font-mono text-[10px] text-[#8a7a9a]">
                Software Engineering Program
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
