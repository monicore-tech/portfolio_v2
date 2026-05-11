"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3+", label: "Countries Worked" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Certifications" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">01 / About</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-fg/70 leading-relaxed mb-6">{personal.summary}</p>
            <p className="text-fg/50 leading-relaxed mb-8">
              Based in <span className="text-cyan-400">Irving, Texas</span>, I bridge the gap between technology and people —
              whether that&apos;s designing intuitive interfaces, analyzing data for business decisions,
              or helping a library patron navigate digital resources.
            </p>
            <div className="flex flex-wrap gap-3">
              {["IT Support", "Web Dev", "UI/UX", "Data Analysis", "Cybersecurity"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-cyan-400/30 text-cyan-400/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — stat grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="relative p-6 rounded-2xl border border-(--border) bg-fg/2 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl font-black mb-1" style={{ color: "var(--accent)" }}>
                  {s.value}
                </p>
                <p className="text-fg/50 text-sm font-mono">{s.label}</p>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="col-span-2 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-mono">Available for new opportunities</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
