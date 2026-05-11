"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">03 / Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg">What I Know</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-fg text-sm uppercase tracking-wider">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 + j * 0.04 }}
                      className="px-3 py-1.5 text-xs rounded-lg bg-fg/5 text-fg/70 border border-(--border) hover:border-cyan-400/30 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 p-6 rounded-2xl border border-(--border) bg-fg/2"
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-fg/50 mb-4">Languages</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { lang: "English", level: "Fluent", pct: 95 },
              { lang: "Yoruba", level: "Conversational", pct: 65 },
              { lang: "Hausa", level: "Basic", pct: 30 },
            ].map(({ lang, level, pct }, i) => (
              <div key={lang}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-fg/80">{lang}</span>
                  <span className="text-xs text-fg/40 font-mono">{level}</span>
                </div>
                <div className="h-1.5 bg-fg/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
