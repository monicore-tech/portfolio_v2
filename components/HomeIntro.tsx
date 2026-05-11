"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { personal } from "@/lib/data";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3+", label: "Countries Worked" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Certifications" },
];

const sections = [
  { label: "About", href: "/about", desc: "Who I am and what drives me" },
  { label: "Experience", href: "/experience", desc: "Where I've worked and what I've built" },
  { label: "Skills", href: "/skills", desc: "Tools, languages, and capabilities" },
  { label: "Projects", href: "/projects", desc: "Things I've shipped and shipped well" },
  { label: "Education", href: "/education", desc: "Degrees, certs, and community" },
  { label: "Contact", href: "/contact", desc: "Let's work together" },
];

export default function HomeIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="intro" className="relative py-32 bg-bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4">The Short Version</p>
          <p className="text-xl sm:text-2xl text-fg/70 leading-relaxed">{personal.summary}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="p-6 rounded-2xl border border-(--border) bg-fg/2 text-center"
            >
              <p className="text-3xl font-black mb-1" style={{ color: "var(--accent)" }}>{s.value}</p>
              <p className="text-fg/50 text-xs font-mono">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section links grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {sections.map(({ label, href, desc }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.07 }}
            >
              <Link
                href={href}
                className="group flex items-center justify-between p-5 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/30 hover:bg-fg/4 transition-all duration-300"
              >
                <div>
                  <p className="font-bold text-fg group-hover:text-cyan-400 transition-colors mb-1">{label}</p>
                  <p className="text-fg/40 text-xs font-mono">{desc}</p>
                </div>
                <span className="text-fg/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-cyan-400 hover:text-fg border border-cyan-400/30 hover:border-(--border) px-6 py-3 rounded-full transition-all duration-300"
          >
            Explore my full story
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
