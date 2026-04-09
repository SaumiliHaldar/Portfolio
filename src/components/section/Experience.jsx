"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "ENTRY_01",
    location: "FULL-TIME • ON-SITE",
    duration: "APR 2025 - PRESENT",
    company: "RS CONSULTANCY",
    role: "SOFTWARE DEVELOPER",
    description: (
      <>
        Architecting a <span className="font-bold italic text-white/90">Windows-based desktop application</span> alongside high-performance <span className="font-bold italic text-white/90">web interfaces</span>. Implementing <span className="font-bold italic text-white/90">MQTT-based communication</span> protocols to ensure seamless, <span className="font-bold italic text-white/90">real-time data exchange</span> across multiple client systems.
      </>
    ),
    tags: ["MQTT", "Windows", "Web", "Real-Time"],
    keyResultLabel: "KEY RESULTS",
    keyResultValue: "Real-Time Data Pipelines"
  },
  {
    id: "ENTRY_02",
    location: "INTERNSHIP • REMOTE",
    duration: "OCT 2024 - APR 2025",
    company: "WINSTREET INFOTECH",
    role: "PYTHON DEVELOPER",
    description: (
      <>
        Developed and maintained a <span className="font-bold italic text-white/90">Python-based e-commerce platform</span>, translating client requirements into scalable <span className="font-bold italic text-white/90">functional features</span>. Enhanced production stability through rigorous <span className="font-bold italic text-white/90">cross-module testing</span> and high-quality <span className="font-bold italic text-white/90">code reviews.</span>
      </>
    ),
    tags: ["Python", "E-Commerce", "Testing", "Documentation"],
    keyResultLabel: "KEY RESULTS",
    keyResultValue: "Optimized System Stability"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[50vh] flex-col items-center justify-center py-24 overflow-hidden bg-black scroll-mt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,185,84,0.1),transparent_70%)]" />
      </div>

      <div className="z-10 w-full max-w-7xl px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-foreground leading-[0.9] uppercase">
               PROFESSIONAL <span className="text-primary italic">EXPERIENCE.</span>
            </h2>
          </motion.div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col relative group"
            >
              {/* Background Index (Premium Polish) */}
              <span className="absolute -top-12 -left-6 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none leading-none group-hover:text-primary/[0.05] transition-colors duration-500">
                0{index + 1}
              </span>

              {/* Top Bar (Date & Location) */}
              <div className="flex justify-between items-center border-b border-border pb-4 mb-8">
                 <div className="flex items-center gap-3">
                   <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground">
                     {exp.duration}
                   </span>
                 </div>
                 <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                   {exp.location}
                 </span>
              </div>

              {/* Company & Role */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-2 leading-none group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-sm font-semibold tracking-widest uppercase text-primary italic">
                  {exp.role}
                </h4>
              </div>

              {/* Description */}
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 group-hover:text-white/90 transition-colors max-w-[90%] font-medium">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-10 mt-auto">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider bg-secondary/50 text-foreground/70 border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Results */}
              <div className="relative overflow-hidden border-l-2 border-primary/30 pl-6 py-3 bg-secondary/20 rounded-r-xl transition-all group-hover:border-primary group-hover:bg-primary/[0.03]">
                 <span className="text-[9px] font-black tracking-[0.3em] uppercase text-primary/60 block mb-2">
                   {exp.keyResultLabel}
                 </span>
                 <span className="text-xl font-black tracking-tight text-foreground italic">
                   {exp.keyResultValue}
                 </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
