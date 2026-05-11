"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { education, certifications, community } from "@/lib/data";

const coursework = [
  "Database Management Systems", "Web Development", "Human-Computer Interaction",
  "Ethical Hacking", "Data Structures & Algorithms", "Operating Systems",
  "Software Engineering", "Computer Networks", "Object-Oriented Programming",
];

const academicStats = [
  { label: "Grade", value: "2nd Class Upper" },
  { label: "CWA Score", value: "69.43" },
  { label: "Duration", value: "3 Years 10 Months" },
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

export default function EducationPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-80px" });
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: "-80px" });
  const communityRef = useRef(null);
  const communityInView = useInView(communityRef, { once: true, margin: "-80px" });
  const courseworkRef = useRef(null);
  const courseworkInView = useInView(courseworkRef, { once: true, margin: "-80px" });
  const capstoneRef = useRef(null);
  const capstoneInView = useInView(capstoneRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              Background
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              Education &<br />Credentials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-2xl"
            >
              A Computer Science degree from Accra, professional certifications, and community service in Irving, TX.
            </motion.p>
          </div>
        </section>

        {/* Degrees */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Academic" title="Degrees" />
            <div className="space-y-4" ref={eduRef}>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={eduInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="p-6 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="font-bold text-fg text-lg mb-1">{edu.degree}</h4>
                      <p className="text-cyan-400 text-sm mb-1">{edu.institution}</p>
                      <p className="text-fg/40 text-xs font-mono">{edu.location} · {edu.period}</p>
                    </div>
                    {edu.grade && (
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.highlights.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-fg/30 mb-2">Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h) => (
                          <span key={h} className="px-2 py-1 text-xs rounded bg-fg/5 text-fg/50 border border-(--border)">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {edu.capstone && (
                    <div className="mt-4 pt-4 border-t border-(--border)">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-fg/30 mb-1">Capstone Project</p>
                      <p className="text-sm text-fg/60">{edu.capstone}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Professional" title="Certifications" />
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl" ref={certRef}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={certInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="p-5 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{cert.badge}</span>
                  <h4 className="font-semibold text-fg text-sm leading-tight mb-1">{cert.name}</h4>
                  <p className="text-fg/40 text-xs font-mono mb-3">{cert.issuer}</p>
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${
                    cert.status === "Completed"
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                  }`}>
                    {cert.status === "Completed" ? `✓ ${cert.year}` : `⏳ ${cert.year}`}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Service" title="Community & Volunteering" />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl" ref={communityRef}>
              {community.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={communityInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="p-5 rounded-2xl border border-(--border) bg-bg flex gap-4"
                >
                  <div className="w-1 rounded-full bg-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-fg text-sm">{c.role}</p>
                    <p className="text-cyan-400 text-xs mb-1">{c.org}</p>
                    <p className="text-fg/40 text-xs font-mono mb-2">{c.period}</p>
                    <p className="text-fg/50 text-xs">{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Relevant Coursework */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="BSc Computer Science" title="Relevant Coursework" />
            <p className="text-fg/40 text-sm font-mono mb-8">Regent University College of Science and Technology, Accra, Ghana</p>
            <div className="flex flex-wrap gap-3" ref={courseworkRef}>
              {coursework.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={courseworkInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.07 }}
                  className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400/70 text-sm font-mono hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Capstone Deep Dive */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader eyebrow="Final Year" title="Capstone Project" />
            <motion.div
              ref={capstoneRef}
              initial={{ opacity: 0, y: 20 }}
              animate={capstoneInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-2xl p-8 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black text-fg">School Management System</h3>
                <span className="text-[10px] font-mono text-fg/30 uppercase tracking-widest shrink-0 mt-2">Academic · 2021</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["PHP", "MySQL", "Bootstrap", "HTML/CSS", "XAMPP"].map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-fg/5 text-fg/50 border border-(--border)">{t}</span>
                ))}
              </div>
              <ul className="space-y-3">
                {[
                  "Full-stack web application managing student records, course enrollment, and academic reporting.",
                  "Built on a XAMPP stack with PHP backend, MySQL database, and Bootstrap-powered responsive UI.",
                  "Applied core CS concepts: session management, CRUD operations, relational database design, and form validation.",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-fg/60">
                    <span className="text-cyan-400 mt-1 shrink-0">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              {academicStats.map((s) => (
                <div key={s.label} className="px-5 py-3 rounded-xl border border-(--border) bg-bg">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-fg/30 mb-1">{s.label}</p>
                  <p className="font-bold text-fg text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-fg/40 text-sm font-mono uppercase tracking-widest mb-6">Want to connect?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-fg mb-8">Let&apos;s discuss your next hire</h2>
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
