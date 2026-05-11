"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { experience } from "@/lib/data";

const highlights = [
  { stat: "20%", label: "Engagement Increase", desc: "Delivered through a full website redesign and UX optimization at Nibi LLC." },
  { stat: "Built", label: "Eventsphere System", desc: "End-to-end event management platform for IBAKM® handling trainings and conferences." },
  { stat: "Optimized", label: "IT Asset Tracking", desc: "Reduced reporting errors significantly with SQL dashboards at Fidson Healthcare." },
];

const allTags = Array.from(
  new Set(experience.flatMap((j) => j.tags))
);

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-black text-fg">{title}</h2>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-80px" });
  const tagsRef = useRef(null);
  const tagsInView = useInView(tagsRef, { once: true, margin: "-80px" });

  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
          <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              Experience
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              Where I&apos;ve Worked
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-2xl"
            >
              A track record across IT, web development, data analysis, and public service — spanning Nigeria, Ghana, and the USA.
            </motion.p>
          </div>
        </section>

        {/* Full Timeline */}
        <section className="relative py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Timeline" title="Career History" />
            <div className="relative" ref={timelineRef}>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden lg:block" />
              <div className="space-y-4">
                {experience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative lg:pl-10"
                  >
                    <div className="hidden lg:block absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cyan-400 bg-bg-secondary" />
                    <div
                      className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        expanded === i ? "border-cyan-400/40 bg-fg/4" : "border-(--border) bg-fg/2 hover:border-fg/20"
                      }`}
                      onClick={() => setExpanded(expanded === i ? null : i)}
                    >
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
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="hidden sm:flex flex-wrap gap-2">
                            {job.tags.slice(0, 2).map((t) => (
                              <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-cyan-400/30 text-cyan-400/80">
                                {t}
                              </span>
                            ))}
                          </div>
                          <motion.span animate={{ rotate: expanded === i ? 180 : 0 }} className="text-fg/30 text-lg leading-none shrink-0">↓</motion.span>
                        </div>
                      </div>
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
                                <span className="text-cyan-400 mt-1 shrink-0">›</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.tags.map((t) => (
                              <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-cyan-400/30 text-cyan-400/80">{t}</span>
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

        {/* Career Highlights */}
        <section className="relative py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Impact" title="Key Achievements" />
            <div className="grid md:grid-cols-3 gap-6" ref={highlightsRef}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="p-8 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
                >
                  <p className="text-4xl font-black mb-2" style={{ color: "var(--accent)" }}>{h.stat}</p>
                  <p className="font-bold text-fg mb-3">{h.label}</p>
                  <p className="text-fg/50 text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Across Roles */}
        <section className="relative py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Stack" title="Technologies Across Roles" />
            <div className="flex flex-wrap gap-3" ref={tagsRef}>
              {allTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={tagsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400/70 text-sm font-mono hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-fg/40 text-sm font-mono uppercase tracking-widest mb-6">Impressed?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-fg mb-8">Let&apos;s talk about what I can do for you</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 font-mono text-sm uppercase tracking-widest transition-colors"
            >
              Get in touch <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
