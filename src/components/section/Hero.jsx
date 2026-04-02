"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const mechanicalTransition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-28 pb-12 overflow-hidden bg-black selection:bg-primary selection:text-black">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        
        {/* Subtle Grid System */}


        {/* Ambient Spotify Green Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        

      </div>

      <div className="z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 lg:gap-16">
        
        {/* Mobile Image (Visible on smaller screens, top-aligned) */}
        <motion.div 
          className="md:hidden w-full max-w-[280px] mb-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={mechanicalTransition}
        >
           <div 
            className="relative aspect-square bg-primary/20 overflow-hidden shadow-2xl"
            style={{ clipPath: "url(#blob-clip-mobile)" }}
          >
            <img 
              src="/Saumili.jpg" 
              alt="Saumili Haldar" 
              className="w-full h-full object-cover brightness-110"
            />
          </div>
          {/* Subtle Mobile Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl -z-10" />
        </motion.div>

        {/* Text Content Area */}
        <div className="w-full lg:w-3/5 flex flex-col items-start pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-xl md:text-2xl font-bold font-heading tracking-widest text-neutral-400">
              Hi, I'm
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black font-heading tracking-tighter leading-[0.85] mb-8 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 0.3 }}
          >
            Saumili <span className="text-primary italic">Haldar</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-bold font-heading text-neutral-100 italic mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 0.4 }}
          >
            Software Developer
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-neutral-400 font-medium max-w-xl mb-12 leading-relaxed border-l-2 border-primary/30 pl-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 0.5 }}
          >
            I build <span className="text-primary font-bold italic">scalable backend architectures</span>, 
            <span className="text-white font-bold italic"> real-time data pipelines</span>, and 
            <span className="text-white font-bold italic"> AI-driven applications</span> that solve complex engineering problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(29,185,84,0.2)] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] flex items-center gap-3"
              whileHover={{ y: -2 }}
            >
              View my Work
            </motion.a>

            <motion.a
              href="/Saumili-Haldar-Resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3"
              whileHover={{ y: -2 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop Visual/Image Area */}
        <motion.div 
          className="relative z-10 hidden md:flex lg:w-[40%] items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Large Blob Background Glow */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
          
          <div 
            className="relative w-full aspect-square max-w-[440px] bg-primary/5 overflow-hidden shadow-[0_0_80px_rgba(29,185,84,0.1)] transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_0_100px_rgba(29,185,84,0.2)]"
            style={{ clipPath: "url(#blob-clip)" }}
          >
            <img 
              src="/Saumili.jpg" 
              alt="Saumili Haldar" 
              className="w-full h-full object-cover brightness-[1.05] contrast-[1.05]"
            />
          </div>
          
          {/* Engineering Decorative Frames (Blob-shaped) */}
          <div 
            className="absolute -inset-10 -z-10 bg-primary/5 animate-[pulse_6s_linear_infinite]" 
            style={{ clipPath: "url(#blob-clip)" }}
          />
          <div 
            className="absolute -inset-20 -z-20 bg-white/[0.02] animate-[pulse_8s_linear_infinite]" 
            style={{ clipPath: "url(#blob-clip)" }}
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">
          Scroll Down
        </span>
        <div className="relative h-10 w-6 rounded-full border-2 border-white/10 flex justify-center p-1.5 bg-black/50 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="h-1.5 w-1.5 bg-primary rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Blob Clip Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.468,0.037 C0.692,0.037 0.969,0.231 0.969,0.492 C0.969,0.754 0.723,0.954 0.462,0.954 C0.2,0.954 0.031,0.738 0.031,0.462 C0.031,0.185 0.246,0.037 0.468,0.037 Z" />
          </clipPath>
          <clipPath id="blob-clip-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0.468,0.037 C0.692,0.037 0.969,0.231 0.969,0.492 C0.969,0.754 0.723,0.954 0.462,0.954 C0.2,0.954 0.031,0.738 0.031,0.462 C0.031,0.185 0.246,0.037 0.468,0.037 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}
