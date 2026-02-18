"use client";

import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[40vh] md:min-h-[60vh] flex-col items-center justify-center py-12 md:py-20 overflow-hidden scroll-mt-20"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-left">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6 text-left"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Developer & Lifelong Learner
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Saumili Haldar, a <span className="text-foreground font-medium">Computer Science & Engineering</span> graduate (Class of 2025) currently working as a <span className="text-primary font-medium">Software Developer</span> at <span className="text-foreground font-medium">RS Consultancy</span>. I specialize in building scalable web applications and high-performance REST APIs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in <span className="text-primary font-medium">Python, FastAPI, React, and Next.js</span>, I am dedicated to writing clean, maintainable code. 
              I leverage databases such as <span className="text-primary font-medium">MongoDB and PostgreSQL</span> to deliver robust, high-quality software solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="flex items-center justify-start gap-3 rounded-lg border border-border p-4 bg-card/50">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Clean Code</span>
               </div>
               <div className="flex items-center justify-start gap-3 rounded-lg border border-border p-4 bg-card/50">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Modern UI/UX</span>
               </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center justify-center p-4"
          >
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent p-1">
               <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
               <div className="h-full w-full overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 border-b border-border/50 pb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-[10px] sm:text-xs font-mono text-muted-foreground">developer.config</span>
                  </div>
                  <div className="space-y-2 sm:space-y-3 font-mono text-[11px] sm:text-sm">
                    <div className="flex gap-2">
                       <span className="text-pink-500">const</span>
                       <span className="text-blue-500">profile</span>
                       <span className="text-foreground">=</span>
                       <span className="text-yellow-500">{"{"}</span>
                    </div>
                    <div className="pl-4 flex gap-2">
                       <span className="text-foreground">name:</span>
                       <span className="text-green-500">"Saumili Haldar"</span>,
                    </div>
                    <div className="pl-4 flex gap-2">
                       <span className="text-foreground">role:</span>
                       <span className="text-green-500">"Software Developer"</span>,
                    </div>
                    <div className="pl-4 flex gap-2">
                       <span className="text-foreground">traits:</span>
                       <span className="text-yellow-500">["Curious", "Creative", "Resilient"]</span>,
                    </div>
                    <div className="pl-4 flex gap-2">
                       <span className="text-foreground">loves:</span>
                       <span className="text-yellow-500">["Coffee", "Coding", "Innovation"]</span>
                    </div>
                    <div className="flex gap-2">
                       <span className="text-yellow-500">{"}"}</span>;
                    </div>
                  </div>
               </div>
            </div>
            
             {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -top-6 -right-6 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
