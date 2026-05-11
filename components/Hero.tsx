"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { personal } from "@/lib/data";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const ROLES = [
  "IT Specialist",
  "Web Developer",
  "UI/UX Designer",
  "Data Analyst",
  "Problem Solver",
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export default function Hero() {
  const firstName = "Moses";
  const lastName = "Oni";

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-bg">
      <Scene isDark={isDark} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-bg pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400/70 font-mono"
        >
          {personal.location}
        </motion.p>

        {/* Name */}
        <div className="flex flex-wrap justify-center gap-x-5 mb-4">
          <div className="flex">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-7xl md:text-8xl font-black text-fg tracking-tight"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + firstName.length + 1}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-8 text-lg sm:text-2xl font-light text-fg/80"
        >
          <TypeWriter texts={ROLES} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group relative px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest overflow-hidden border border-cyan-400/50 text-fg transition-all duration-300 hover:border-cyan-400"
          >
            <span className="absolute inset-0 bg-accent/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative">Hire Me</span>
          </a>
          <Link
            href="/about"
            className="px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest bg-accent text-bg hover:opacity-90 transition-opacity"
          >
            View Work
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex gap-6"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/40 hover:text-cyan-400 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <span className="text-fg/20">·</span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/40 hover:text-cyan-400 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            GitHub
          </a>
          <span className="text-fg/20">·</span>
          <a
            href={`mailto:${personal.email}`}
            className="text-fg/40 hover:text-cyan-400 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToIntro}
      >
        <span className="text-fg/30 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-linear-to-b from-cyan-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
