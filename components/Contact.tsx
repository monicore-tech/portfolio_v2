"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: "LinkedIn", sub: "/in/oni-moses-o", href: personal.linkedin },
    { label: "GitHub", sub: "/oni-moses-o", href: personal.github },
    { label: "Email", sub: personal.email, href: `mailto:${personal.email}` },
  ];

  return (
    <section id="contact" className="relative py-32 bg-bg-secondary" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">06 / Contact</p>
          <h2 className="text-4xl sm:text-6xl font-black text-fg mb-4">
            Let&apos;s Work{" "}
            <span style={{ color: "var(--accent)" }}>Together</span>
          </h2>
          <p className="text-fg/50 max-w-xl mx-auto text-lg">
            Whether you have a project, a job opportunity, or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all text-cyan-400 font-mono text-sm"
          >
            <span>{personal.email}</span>
            <motion.span animate={copied ? { scale: 1.3 } : { scale: 1 }} className="text-lg">
              {copied ? "✓" : "⧉"}
            </motion.span>
          </button>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-green-400 mt-2 font-mono"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center p-6 min-w-40 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/30 transition-all duration-300"
            >
              <span className="text-fg/50 text-xs font-mono uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">
                {link.label}
              </span>
              <span className="text-fg/30 text-xs font-mono">{link.sub}</span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-8 border-t border-(--border)"
        >
          <p className="text-fg/20 text-xs font-mono">
            Designed & Built by Moses Oni · Irving, Texas · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
