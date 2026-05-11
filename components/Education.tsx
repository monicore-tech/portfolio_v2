"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications, community } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">05 / Background</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg">Education & Credentials</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-fg/40 mb-6">Education</h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="p-6 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
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
                        <span key={h} className="px-2 py-1 text-xs rounded bg-fg/5 text-fg/50 border border-(--border)">
                          {h}
                        </span>
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

            {/* Community */}
            <h3 className="text-xs font-mono uppercase tracking-widest text-fg/40 mt-8 mb-4">Community & Volunteering</h3>
            {community.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-5 rounded-2xl border border-(--border) bg-fg/2 flex gap-4"
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

          {/* Certifications sidebar */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-fg/40 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="p-5 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{cert.badge}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-fg text-sm leading-tight mb-1">{cert.name}</h4>
                      <p className="text-fg/40 text-xs font-mono mb-2">{cert.issuer}</p>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${
                          cert.status === "Completed"
                            ? "bg-green-500/15 text-green-400 border border-green-500/20"
                            : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {cert.status === "Completed" ? `✓ ${cert.year}` : `⏳ ${cert.year}`}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-5 rounded-2xl border border-(--border) bg-fg/2"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-fg/40 mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Music", "Design", "Cybersecurity", "Accessibility", "Libraries & Public Service", "Emerging Tech"].map((item) => (
                  <span key={item} className="px-3 py-1 text-xs rounded-full border border-cyan-400/20 text-cyan-400/70">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
