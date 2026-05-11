"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { projects } from "@/lib/data";

const process = [
  { num: "01", title: "Discovery", desc: "Research, understand requirements, identify users and constraints before a line is written." },
  { num: "02", title: "Design", desc: "Wireframes, component architecture, and visual direction in Figma before coding begins." },
  { num: "03", title: "Build & Deploy", desc: "Clean code, thorough testing, and shipping to production — then iterating based on feedback." },
];

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

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const restRef = useRef(null);
  const restInView = useInView(restRef, { once: true, margin: "-80px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              Projects
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              What I&apos;ve Built
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-2xl"
            >
              From production event platforms to freelance client sites — things I&apos;ve shipped and shipped well.
            </motion.p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Highlight" title="Featured Projects" />
            <div className="grid lg:grid-cols-2 gap-6" ref={featuredRef}>
              {featured.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative rounded-2xl border border-(--border) bg-fg/2 overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
                >
                  <div className="h-px w-full bg-accent" />
                  <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest">{project.type}</p>
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Featured</span>
                        </div>
                        <h3 className="text-2xl font-black text-fg group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                      </div>
                      <span className="text-fg/20 text-xs font-mono">{project.year}</span>
                    </div>
                    <p className="text-fg/60 text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span key={t} className="px-2 py-1 text-[10px] font-mono rounded bg-fg/5 text-fg/50 border border-(--border)">{t}</span>
                        ))}
                      </div>
                      <a href={project.link} className="flex items-center gap-1 text-xs font-mono text-cyan-400/60 hover:text-cyan-400 transition-colors group/link">
                        View <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="More Work" title="Other Projects" />
            <div className="grid sm:grid-cols-2 gap-4" ref={restRef}>
              {rest.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={restInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-(--border) bg-fg/2 hover:border-fg/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[10px] font-mono text-fg/30 uppercase tracking-widest mb-1">{project.type} · {project.year}</p>
                      <h3 className="font-bold text-fg group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                    </div>
                    <span className="text-fg/20 text-lg group-hover:text-fg/50 transition-colors">↗</span>
                  </div>
                  <p className="text-fg/50 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-fg/5 text-fg/40">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* My Process */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="How I Work" title="My Process" />
            <div className="grid md:grid-cols-3 gap-8" ref={processRef}>
              {process.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  <p className="text-7xl font-black text-fg/5 font-mono mb-4 leading-none">{step.num}</p>
                  <h3 className="font-bold text-fg text-lg mb-3">{step.title}</h3>
                  <p className="text-fg/50 text-sm leading-relaxed">{step.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-8 text-center text-fg/20 text-xl translate-x-4">→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open to Collaborate */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl border border-cyan-400/20 bg-accent/5 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-fg mb-4">Have a project in mind?</h2>
              <p className="text-fg/50 mb-8 max-w-lg mx-auto">
                I&apos;m available for freelance projects, collaborations, and open-source contributions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-bg font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Let&apos;s talk <span>→</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
