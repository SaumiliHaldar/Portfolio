"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevTrackr",
    subtitle: "AI Analytics SaaS",
    description: "Built an AI-powered GitHub analytics platform with real-time repository sync, interactive dashboards, and neural productivity scoring.",
    tags: ["FastAPI", "React", "Prisma", "Gemini API"],
    github: "https://github.com/SaumiliHaldar/DevTrackr",
    demo: "https://devtrackrr.vercel.app",
    image: "/devtrackr.jpg",
  },
  {
    id: "02",
    title: "Lysn",
    subtitle: "AI Productivity App",
    description: "Engineered a PDF-to-audio web app with OAuth, GridFS storage, and high-fidelity text-to-speech conversion using gTTS.",
    tags: ["Next.js", "FastAPI", "MongoDB", "gTTS"],
    github: "https://github.com/SaumiliHaldar/Lysn",
    demo: "https://lysn.vercel.app/",
    image: "/lysn.jpg",
  },
  {
    id: "03",
    title: "NexGenie",
    subtitle: "Intelligence for LMS",
    description: "AI chatbot with personalized course recommendations, real-time coding assistance, and multilingual support using FastAPI and Redis.",
    tags: ["FastAPI", "React", "Gemini", "Redis"],
    github: "https://github.com/SaumiliHaldar/NexGenie",
    demo: "https://nexgenie.vercel.app/",
    image: "/nexgenie.jpg",
  },
  {
    id: "04",
    title: "MausamVibe",
    subtitle: "Weather Intelligence",
    description: "Built a Django-based weather application with real-time, location-based forecasts using OpenWeatherMap API.",
    tags: ["Django", "Python", "JS", "Weather API"],
    github: "https://github.com/SaumiliHaldar/MausamVibe",
    demo: "https://mausamvibe.onrender.com/",
    image: "/mausamvibe.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

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
              Featured Projects
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a
              href="https://github.com/SaumiliHaldar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-primary/50"
            >
              <FolderOpen className="h-4 w-4 text-foreground" />
              <span>View All</span>
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative flex flex-col h-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.98]"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                
                {/* Overlay on hover (Desktop only) */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex items-center justify-center gap-6 z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-[#1a1a1a]/90 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-2xl scale-75 group-hover:scale-100"
                    title="View Code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary/20 scale-75 group-hover:scale-100"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-background/60 backdrop-blur-sm border border-white/10 text-[9px] font-bold tracking-widest uppercase text-foreground/70">
                  {project.id}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-6 pt-5">
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1 block">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-auto flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-md bg-primary/5 border border-primary/10 text-primary/70 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Action Buttons (Visible only on mobile/tablet) */}
                <div className="grid lg:hidden grid-cols-2 gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-sm font-bold text-foreground transition-all active:scale-95 shadow-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all active:scale-95 shadow-lg shadow-primary/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
              
              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-700 group-hover:w-full group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button (visible only on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center lg:hidden"
        >
          <a
            href="https://github.com/SaumiliHaldar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/40 bg-card py-4 text-sm font-bold text-foreground transition-all active:scale-[0.98]"
          >
            <FolderOpen className="h-4 w-4" />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
