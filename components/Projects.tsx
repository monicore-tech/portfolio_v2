"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 bg-bg-secondary" ref={ref}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">04 / Projects</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg">What I&apos;ve Built</h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-(--border) bg-fg/2 overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
            >
              {/* Solid accent top bar */}
              <div className="h-px w-full bg-accent" />

              {/* Animated background */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest">{project.type}</p>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-fg group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                  </div>
                  <span className="text-fg/20 text-xs font-mono">{project.year}</span>
                </div>

                <p className="text-fg/60 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-1 text-[10px] font-mono rounded bg-fg/5 text-fg/50 border border-(--border)">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-xs font-mono text-cyan-400/60 hover:text-cyan-400 transition-colors group/link"
                  >
                    View
                    <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
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
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-fg/5 text-fg/40">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
