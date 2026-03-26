"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "ENTRY_01",
    location: "FULL-TIME • ON-SITE",
    duration: "APR 2025 - PRESENT",
    company: "RS CONSULTANCY",
    role: "SOFTWARE DEVELOPER",
    description: "Architected a specialized Windows desktop application and dynamic web interfaces. Engineered real-time data pipelines using MQTT protocols to enable highly reliable, low-latency data transfer.",
    tags: ["MQTT", "Real-Time", "Windows", "Web", "System Design"],
    keyResultLabel: "KEY RESULTS",
    keyResultValue: "Low-Latency Pipelines"
  },
  {
    id: "ENTRY_02",
    location: "INTERNSHIP • REMOTE",
    duration: "OCT 2024 - APR 2025",
    company: "WINSTREET INFOTECH",
    role: "PYTHON DEVELOPER",
    description: "Built and maintained core backend features for an enterprise e-commerce platform. Translated complex business requirements into robust technical implementations and executed comprehensive functional testing.",
    tags: ["Python", "E-Commerce", "Backend", "Testing"],
    keyResultLabel: "KEY RESULTS",
    keyResultValue: "High Reliability"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[50vh] flex-col items-center justify-center py-20 overflow-hidden scroll-mt-20 border-t border-border/50"
    >
      <div className="z-10 w-full max-w-7xl px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-left bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              Experience
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
            </motion.div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col relative group"
            >
              {/* Top Bar (Date & Location) */}
              <div className="flex justify-between items-center border-b border-border/50 pb-3 mb-6">
                 <span className="text-[11px] font-bold tracking-widest uppercase text-foreground">
                   {exp.duration}
                 </span>
                 <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                   {exp.location}
                 </span>
              </div>

              {/* Company & Role */}
              <h3 className="text-3xl font-black uppercase tracking-tight text-foreground mb-1 leading-none group-hover:text-primary transition-colors">
                {exp.company}
              </h3>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                {exp.role}
              </h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-[11px] font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Results */}
              <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5 rounded-r-md">
                 <span className="text-[10px] font-semibold tracking-widest uppercase text-primary block mb-1">
                   {exp.keyResultLabel}
                 </span>
                 <span className="text-lg font-bold tracking-tight text-foreground">
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
