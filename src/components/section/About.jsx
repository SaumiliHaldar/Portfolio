"use client";

import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

export default function About() {
  const mechanicalTransition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] };

  return (
<section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden bg-zinc-950 scroll-mt-20 selection:bg-primary selection:text-black"
    >
      {/* Background System - Subtle consistency with Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Content Reveal */}
          <div className="flex flex-col space-y-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={mechanicalTransition}
               className="space-y-6"
            >

              <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-white leading-[0.9] uppercase">
                 ABOUT <span className="text-primary italic">ME.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...mechanicalTransition, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-100 italic">
                Passionate Developer & Lifelong Learner
              </h3>
              
              <div className="text-neutral-400 text-base md:text-lg leading-relaxed font-medium space-y-4 max-w-xl">
                 <p>
                   I'm Saumili Haldar, a <span className="text-white font-bold">Computer Science & Engineering</span> graduate (Class of 2025). 
                 </p>
                 <p>
                   My journey evolved from engineering core Python functionalities in e-commerce to architecting complex AI integrations and real-time streaming tools.
                 </p>
                 <p>
                   Currently, as a <span className="text-primary font-bold">Software Developer</span> at <span className="text-white">RS Consultancy</span>, I specialize in building robust, low-latency MQTT data architectures with absolute reliability.
                 </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...mechanicalTransition, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-primary/20 shadow-xl group">
                <Code className="text-primary h-5 w-5" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Clean Code</span>
              </div>
              
              <div className="flex items-center gap-3 px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-primary/20 shadow-xl group">
                <Sparkles className="text-primary h-5 w-5" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Modern UI/UX</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Developer Config Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent p-1">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              <div className="w-full overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 px-3 py-5 sm:px-6 sm:py-8 flex flex-col gap-3 sm:gap-6">
                <div className="flex items-center gap-2 border-b border-border/50 pb-2 sm:pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-[10px] sm:text-xs font-mono text-muted-foreground">developer.config</span>
                </div>
                <div className="space-y-2.5 sm:space-y-4 font-mono text-[10px] sm:text-[13px] lg:text-sm leading-relaxed">
                  <div className="flex gap-2">
                    <span className="text-pink-500">const</span>
                    <span className="text-blue-500">profile</span>
                    <span className="text-foreground">=</span>
                    <span className="text-yellow-500">{"{"}</span>
                  </div>
                  <div className="pl-4 sm:pl-5 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-foreground/80">name:</span>
                    <span className="text-green-500">"Saumili Haldar"</span><span className="text-foreground/80">,</span>
                  </div>
                  <div className="pl-4 sm:pl-5 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-foreground/80">role:</span>
                    <span className="text-green-500">"Software Developer"</span><span className="text-foreground/80">,</span>
                  </div>
                  <div className="pl-4 sm:pl-5 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-foreground/80">traits:</span>
                    <span className="text-yellow-500">["Curious", "Creative", "Resilient"]</span><span className="text-foreground/80">,</span>
                  </div>
                  <div className="pl-4 sm:pl-5 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-foreground/80">loves:</span>
                    <span className="text-yellow-500">["Coffee", "Coding", "Innovation"]</span>
                  </div>
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="text-yellow-500">{"}"}</span><span className="text-foreground/80">;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
