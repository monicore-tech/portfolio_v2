"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { skills } from "@/lib/data";

const learning = [
  {
    name: "CompTIA A+",
    desc: "Preparing for the IT fundamentals certification covering hardware, networking, and troubleshooting.",
    status: "In Progress",
  },
  {
    name: "Cybersecurity Fundamentals",
    desc: "Studying threat modeling, risk assessment, and security controls through self-directed learning.",
    status: "Active",
  },
  {
    name: "Advanced React Patterns",
    desc: "Deep-diving into server components, concurrent features, and performance optimization with Next.js.",
    status: "Active",
  },
];

const proficiencyLevels = [
  { level: "Expert", indicator: "●●●", desc: "Production-ready, used daily" },
  { level: "Proficient", indicator: "●●○", desc: "Comfortable, used in projects" },
  { level: "Learning", indicator: "●○○", desc: "Actively studying" },
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

export default function SkillsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });
  const langRef = useRef(null);
  const langInView = useInView(langRef, { once: true, margin: "-80px" });
  const learningRef = useRef(null);
  const learningInView = useInView(learningRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              Skills
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              What I Know
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-2xl"
            >
              A broad toolkit spanning web development, data analytics, design, and IT — built through real work across three countries.
            </motion.p>
          </div>
        </section>

        {/* 6 Skill Cards */}
        <section className="relative py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Capabilities" title="Skill Categories" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={skillsRef}>
              {skills.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative p-6 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/20 transition-all duration-300 overflow-hidden"
                >
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
                          animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
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
          </div>
        </section>

        {/* Language Bars */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Languages" title="Language Proficiency" />
            <div className="max-w-2xl" ref={langRef}>
              {[
                { lang: "English", level: "Fluent", pct: 95 },
                { lang: "Yoruba", level: "Conversational", pct: 65 },
                { lang: "Hausa", level: "Basic", pct: 30 },
              ].map(({ lang, level, pct }, i) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, x: -20 }}
                  animate={langInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-fg">{lang}</span>
                    <span className="text-xs text-fg/40 font-mono">{level}</span>
                  </div>
                  <div className="h-2 bg-fg/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={langInView ? { width: `${pct}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Currently Learning */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Growth" title="Currently Learning" />
            <div className="grid md:grid-cols-3 gap-6" ref={learningRef}>
              {learning.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={learningInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="p-6 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-fg">{item.name}</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full shrink-0 ml-2 ${
                      item.status === "In Progress"
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                        : "bg-cyan-500/15 text-cyan-400 border border-cyan-400/20"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-fg/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proficiency Legend */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Guide" title="Proficiency Levels" />
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              {proficiencyLevels.map((item, i) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-(--border) bg-fg/2"
                >
                  <p className="text-cyan-400 font-mono text-lg mb-2 tracking-widest">{item.indicator}</p>
                  <p className="font-bold text-fg text-sm mb-1">{item.level}</p>
                  <p className="text-fg/40 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-fg/40 text-sm font-mono uppercase tracking-widest mb-6">Need these skills?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-fg mb-8">Let&apos;s build something together</h2>
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
