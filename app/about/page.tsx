"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { personal } from "@/lib/data";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3+", label: "Countries Worked" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Certifications" },
];

const philosophy = [
  {
    title: "User-First Design",
    icon: "◎",
    desc: "Every interface decision starts with the person using it — not the tech behind it. Good design disappears.",
  },
  {
    title: "Clean Code",
    icon: "{ }",
    desc: "Readable, maintainable code is documentation. Future-me and teammates deserve clarity over cleverness.",
  },
  {
    title: "Continuous Learning",
    icon: "↻",
    desc: "Technology moves fast. Staying curious isn't optional — it's how you stay useful and relevant.",
  },
];

const tools = [
  { name: "Next.js", role: "Frontend framework" },
  { name: "Figma", role: "UI/UX design" },
  { name: "SQL / MySQL", role: "Data & databases" },
  { name: "Python", role: "Data analysis" },
  { name: "VS Code", role: "Primary editor" },
  { name: "Git / GitHub", role: "Version control" },
];

const interests = [
  "Music", "Design", "Cybersecurity", "Accessibility",
  "Libraries & Public Service", "Emerging Tech", "Toastmasters", "UI Research",
];

function Section({ children, alt = false }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <section className={`relative py-24 ${alt ? "bg-bg-secondary" : "bg-bg"}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

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

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: "-80px" });
  const philosophyRef = useRef(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-80px" });
  const interestsRef = useRef(null);
  const interestsInView = useInView(interestsRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              Who I Am
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-2xl"
            >
              {personal.tagline}
            </motion.p>
          </div>
        </section>

        {/* Bio + Stats */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-start" ref={bioRef}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={bioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg text-fg/70 leading-relaxed mb-6">{personal.summary}</p>
              <p className="text-fg/50 leading-relaxed mb-8">
                Based in <span className="text-cyan-400">Irving, Texas</span>, I bridge the gap between
                technology and people — whether that&apos;s designing intuitive interfaces, analyzing data for
                business decisions, or helping a library patron navigate digital resources.
              </p>
              <div className="flex flex-wrap gap-3">
                {["IT Support", "Web Dev", "UI/UX", "Data Analysis", "Cybersecurity"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-cyan-400/30 text-cyan-400/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={bioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={bioInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-2xl border border-(--border) bg-fg/2 text-center"
                >
                  <p className="text-4xl font-black mb-1" style={{ color: "var(--accent)" }}>{s.value}</p>
                  <p className="text-fg/50 text-sm font-mono">{s.label}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={bioInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
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
        </Section>

        {/* Philosophy */}
        <Section alt>
          <SectionHeader eyebrow="Values" title="My Philosophy" />
          <div className="grid md:grid-cols-3 gap-6" ref={philosophyRef}>
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/30 transition-colors group"
              >
                <span className="text-2xl font-black text-cyan-400/60 font-mono mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-fg mb-2">{item.title}</h3>
                <p className="text-fg/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tools & Workflow */}
        <Section>
          <SectionHeader eyebrow="Stack" title="Tools & Workflow" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" ref={toolsRef}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-cyan-400 text-xs font-bold font-mono">{tool.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-semibold text-fg text-sm">{tool.name}</p>
                  <p className="text-fg/40 text-xs font-mono">{tool.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Outside the Code */}
        <Section alt>
          <SectionHeader eyebrow="Beyond Work" title="Outside the Code" />
          <div className="flex flex-wrap gap-3" ref={interestsRef}>
            {interests.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={interestsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07 }}
                className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400/70 text-sm font-mono hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center py-8">
            <p className="text-fg/40 text-sm font-mono uppercase tracking-widest mb-6">Ready to connect?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-fg mb-8">Want to work together?</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 font-mono text-sm uppercase tracking-widest transition-colors"
            >
              Get in touch
              <span>→</span>
            </Link>
          </div>
        </Section>
      </main>
    </>
  );
}
