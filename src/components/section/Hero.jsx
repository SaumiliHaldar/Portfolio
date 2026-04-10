"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const skills = [
  { name: "Python", icon: "PY" },
  { name: "FastAPI", icon: "FA" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Git", icon: "GIT" },
];

export default function Hero() {
  const mechanicalTransition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-black">
      {/* Synchronized Background (Matching Experience Section) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,185,84,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Typography & Skills */}
        <div className="w-full lg:w-[65%] flex flex-col items-start space-y-8 md:space-y-12">
          
          <div className="space-y-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...mechanicalTransition, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-primary/40" />
              <span className="text-sm md:text-lg font-bold tracking-[0.3em] uppercase text-neutral-400">
                Hi, I'm
              </span>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...mechanicalTransition, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-8xl leading-[0.8] font-black tracking-tighter text-white uppercase whitespace-nowrap lg:whitespace-normal">
                Saumili <br className="hidden lg:block" />
                <span className="text-neutral-200 opacity-50 hover:opacity-100 transition-opacity duration-500">Haldar</span>
              </h1>
              
              <motion.div 
                className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                 <span className="text-xl md:text-3xl font-heading text-primary font-bold tracking-tight italic">
                    Software Developer
                 </span>
                 <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/30 to-transparent hidden md:block" />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-start lg:items-center gap-8 md:gap-12">
            {/* Skill Badges */}
            <motion.div 
              className="flex items-center -space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-[10px] font-bold text-white shadow-xl hover:translate-y-[-4px] hover:border-primary/50 transition-all cursor-default z-[10]"
                  style={{ zIndex: 10 - i }}
                >
                  {skill.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-sm md:text-lg text-neutral-400 max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I build <span className="text-primary font-bold italic">scalable backend architectures</span>, 
              <span className="text-white font-bold italic"> real-time data pipelines</span>, and 
              <span className="text-white font-bold italic"> AI-driven applications</span> that solve complex engineering problems.
            </motion.p>
          </div>

          {/* Call to Actions */}
          <motion.div
            className="flex flex-wrap items-center justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...mechanicalTransition, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-5 bg-primary text-black font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>

            <motion.a
              href="/Saumili-Haldar-Resume.pdf"
              download
              className="group flex items-center gap-2 px-10 py-5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Portrait & Decorative */}
        <motion.div 
          className="relative w-full lg:w-[30%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Portrait Container */}
          <div className="relative w-full aspect-[4/5] max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] group">
            <div className="absolute -inset-4 border border-white/5 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-700">
              <Image 
                src="/Saumili.jpg" 
                alt="Saumili Haldar"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000"
                priority
              />
            </div>

            {/* Rotating Badge */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 md:w-36 md:h-36 pointer-events-none">
                <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                    <defs>
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="text-[9.8px] lg:text-[8px] font-bold uppercase tracking-[0.1em] lg:tracking-[0.2em] fill-neutral-100">
                        <textPath xlinkHref="#circlePath">
                            • Software Developer • Based in India •
                        </textPath>
                    </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(29,185,84,0.2)] relative">
                         {/* Contracting Border Effect */}
                         <div className="absolute inset-0 rounded-full border border-primary/40 animate-[ping_3s_linear_infinite] scale-75" />
                         <Star className="w-4 h-4 md:w-6 md:h-6 text-primary animate-pulse fill-primary relative z-10" />
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
