"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const KineticCore = dynamic(() => import("./KineticCore"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/20 animate-pulse" />
});

const AmbientTexture = dynamic(() => import("./AmbientTexture"), {
  ssr: false
});

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <section id="hero" className="h-screen w-full bg-black" />;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black p-4 sm:p-6 md:p-8 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-4 gap-4 h-full w-full">

        {/* Cell 1: Identity */}
        <div className="md:col-span-8 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-end overflow-hidden group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#4E9BA6] font-mono tracking-widest mb-4 text-sm uppercase">Creative Lead / Developer</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              MOSES<br />
              OLUWADAMILARE<br />
              ONI
            </h1>
          </motion.div>
        </div>

        {/* Cell 2: Kinetic Core */}
        <div className="md:col-span-4 md:row-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden">
          <Suspense fallback={<div className="w-full h-full bg-black/20 animate-pulse" />}>
            <KineticCore />
          </Suspense>
          <div className="absolute bottom-6 left-6 z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4E9BA6] animate-pulse" />
              <span className="text-xs font-mono text-white/50 uppercase tracking-tighter">Interactive 3D Workspace</span>
            </div>
          </div>
        </div>

        {/* Cell 3: Ambient Texture */}
        <div className="md:col-span-5 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden">
          <Suspense fallback={null}>
            <AmbientTexture />
          </Suspense>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
            <p className="text-white/20 text-sm font-mono text-center leading-relaxed">
              Synthesizing complex data into elegant digital interfaces.
            </p>
          </div>
        </div>

        {/* Additional Info Cell (optional but helps Bento balance) */}
        <div className="md:col-span-3 md:row-span-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex items-center justify-between group hover:border-[#4E9BA6]/50 transition-colors">
          <div>
             <p className="text-white/40 text-xs font-mono uppercase">Location</p>
             <p className="text-white text-sm">{personal.location}</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#4E9BA6] transition-colors">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-black transition-colors">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
