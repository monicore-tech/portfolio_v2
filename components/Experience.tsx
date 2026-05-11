"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-32 bg-bg-secondary" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">02 / Experience</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg">Where I&apos;ve Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden lg:block" />

          <div className="space-y-4">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative lg:pl-10"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cyan-400 bg-bg-secondary" />

                <div
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    expanded === i
                      ? "border-cyan-400/40 bg-fg/4"
                      : "border-(--border) bg-fg/2 hover:border-fg/20"
                  }`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Header */}
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-lg font-bold text-fg">{job.role}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium text-sm mb-1">{job.company}</p>
                      <div className="flex items-center gap-3 text-xs text-fg/40 font-mono">
                        <span>{job.period}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex flex-wrap gap-2 hidden sm:flex">
                        {job.tags.slice(0, 2).map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-cyan-400/30 text-cyan-400/80">
                            {t}
                          </span>
                        ))}
                      </div>
                      <motion.span
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        className="text-fg/30 text-lg leading-none flex-shrink-0"
                      >
                        ↓
                      </motion.span>
                    </div>
                  </div>

                  {/* Expanded bullets */}
                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-(--border) pt-4">
                      <ul className="space-y-2">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-fg/60">
                            <span className="text-cyan-400 mt-1 flex-shrink-0">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-cyan-400/30 text-cyan-400/80">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
