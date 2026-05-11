"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { personal } from "@/lib/data";

const openTo = [
  {
    icon: "⚙",
    title: "Full-Time Roles",
    desc: "IT Specialist, Web Developer, UI/UX Designer, or Data Analyst positions — remote or DFW-area.",
  },
  {
    icon: "💼",
    title: "Freelance Projects",
    desc: "Web design, development, branding, and data analysis projects of any scope.",
  },
  {
    icon: "🤝",
    title: "Collaborations",
    desc: "Open-source contributions, hackathons, research projects, and community work.",
  },
];

const faqs = [
  {
    q: "How soon do you respond?",
    a: "Within 24–48 hours for initial contact. Urgent matters can be flagged in the subject line.",
  },
  {
    q: "Are you open to remote work?",
    a: "Yes — fully remote or hybrid roles based in the DFW area are both welcome.",
  },
  {
    q: "What's your preferred tech stack?",
    a: "Next.js + TypeScript + Tailwind for web; Python + SQL for data work. Open to other stacks.",
  },
  {
    q: "Are you available for short-term contracts?",
    a: "Yes — freelance and fixed-scope contracts are fine alongside my current part-time availability.",
  },
];

const links = [
  { label: "LinkedIn", sub: "/in/oni-moses-o", href: personal.linkedin },
  { label: "GitHub", sub: "/oni-moses-o", href: personal.github },
  { label: "Email", sub: personal.email, href: `mailto:${personal.email}` },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-(--border) last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-fg text-sm">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-cyan-400 text-xl leading-none shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-fg/50 text-sm pb-4 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const emailRef = useRef(null);
  const emailInView = useInView(emailRef, { once: true, margin: "-80px" });
  const openToRef = useRef(null);
  const openToInView = useInView(openToRef, { once: true, margin: "-80px" });

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navigation />
      <main className="bg-bg min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-bg overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent/10 blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6" ref={heroRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-4"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-fg mb-6 leading-none"
            >
              Let&apos;s Work<br />
              <span style={{ color: "var(--accent)" }}>Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fg/50 max-w-xl mx-auto"
            >
              Whether you have a project, a job opportunity, or just want to connect — my inbox is always open.
            </motion.p>
          </div>
        </section>

        {/* Email CTA + Socials */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6 text-center" ref={emailRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={emailInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-fg/40 text-xs font-mono uppercase tracking-widest mb-6">Reach me directly</p>
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
                  className="text-xs text-green-400 mt-2 font-mono"
                >
                  Copied to clipboard!
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={emailInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center p-6 min-w-40 rounded-2xl border border-(--border) bg-bg hover:border-cyan-400/30 transition-all duration-300"
                >
                  <span className="text-fg/50 text-xs font-mono uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-fg/30 text-xs font-mono">{link.sub}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What I'm Open To */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">Opportunities</p>
              <h2 className="text-3xl sm:text-4xl font-black text-fg">What I&apos;m Open To</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6" ref={openToRef}>
              {openTo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={openToInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="p-6 rounded-2xl border border-(--border) bg-fg/2 hover:border-cyan-400/20 transition-colors"
                >
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-fg mb-2">{item.title}</h3>
                  <p className="text-fg/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">Status</p>
              <h2 className="text-3xl sm:text-4xl font-black text-fg">Availability</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-lg p-8 rounded-2xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </span>
                <span className="text-green-400 font-semibold">Open to new opportunities</span>
              </div>
              <div className="space-y-3 text-sm font-mono text-fg/50">
                <div className="flex items-center gap-3">
                  <span className="text-fg/30">⏱</span>
                  <span>Usually responds within 24–48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-fg/30">📍</span>
                  <span>Irving, Texas — CT (UTC−6 / −5)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-fg/30">💻</span>
                  <span>Remote-first, DFW hybrid welcome</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/70 mb-3">Common Questions</p>
              <h2 className="text-3xl sm:text-4xl font-black text-fg">FAQs</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl p-6 rounded-2xl border border-(--border) bg-fg/2"
            >
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6 text-center border-t border-(--border) pt-8">
            <p className="text-fg/20 text-xs font-mono">
              Designed & Built by Moses Oni · Irving, Texas · {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
