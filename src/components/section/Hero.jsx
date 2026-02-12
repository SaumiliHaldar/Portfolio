"use client";

import { motion } from "framer-motion";
import { ArrowBigDownDash, Code2, Github, Rocket } from "lucide-react";


export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative md:min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-20 md:px-12 md:py-32 gap-12 overflow-hidden">
      {/* Mobile Image (Moved to Top) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden w-full max-w-[280px] mb-4"

      >
         <div 
          className="relative aspect-square bg-primary/10 overflow-hidden"
          style={{
            clipPath: "url(#blob-clip)",
          }}

        >
          <img 
            src="/Saumili.jpg" 
            alt="Saumili Haldar" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="z-10 w-full max-w-2xl text-center md:text-left">
        <motion.h1 
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Hi, I'm{" "}
          <span className="text-primary">Saumili Haldar</span>
        </motion.h1>
        
        <motion.h2 
          className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Software Developer & Machine Learning Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed"
        >
          I am a Computer Science and Engineering graduate with hands-on experience in 
          <span className="font-semibold text-foreground"> Python</span>, 
          <span className="font-semibold text-foreground"> Machine Learning</span>, and 
          <span className="font-semibold text-foreground"> Scalable API Design</span>. 
          Currently working at <span className="text-primary">RS Consultancy</span>, 
          building robust software solutions.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
        >
          <motion.a
            href="https://github.com/SaumiliHaldar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <Rocket className="h-4 w-4" />
            View my Work
          </motion.a>
          
          <motion.a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Code2 className="h-4 w-4" />
             See Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 hidden md:flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div 
          className="relative w-80 h-80 md:w-[480px] md:h-[480px] bg-primary/10 overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.05]"

          style={{
            clipPath: "url(#blob-clip)",
            borderRadius: "0" 
          }}

        >
          <img 
            src="/Saumili.jpg" 
            alt="Saumili Haldar" 
            className="w-full h-full object-cover transition-all duration-700 brightness-110 hover:brightness-100"
          />
        </div>
        
        {/* Floating Decorative Elements around image */}
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-500/30 blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-primary/40 blur-3xl -z-10 animate-pulse delay-1000" />
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.468,0.037 C0.692,0.037 0.969,0.231 0.969,0.492 C0.969,0.754 0.723,0.954 0.462,0.954 C0.2,0.954 0.031,0.738 0.031,0.462 C0.031,0.185 0.246,0.037 0.468,0.037 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>



  );
}
