"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, ArrowRight, Layers } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevTrackr",
    subtitle: "Developer Analytics SaaS",
    description: "Built an AI-powered GitHub analytics platform with real-time repository sync, interactive dashboards, and neural productivity scoring.",
    tags: ["FastAPI", "React", "Prisma", "Gemini API"],
    github: "https://github.com/SaumiliHaldar/DevTrackr",
    demo: "https://devtrackrr.vercel.app",
    // image: "/devtrackr.jpg",
    color: "#1DB954",
  },
  {
    id: "02",
    title: "Lysn",
    subtitle: "PDF to Audio App",
    description: "Engineered a PDF-to-audio web app with OAuth, GridFS storage, and high-fidelity text-to-speech conversion using gTTS.",
    tags: ["Next.js", "FastAPI", "MongoDB", "gTTS"],
    github: "https://github.com/SaumiliHaldar/Lysn",
    demo: "https://lysn.vercel.app",
    // image: "/lysn.jpg",
    color: "#1ed760",
  },
  {
    id: "03",
    title: "NexGenie",
    subtitle: "Chatbot for LMS",
    description: "AI chatbot with personalized course recommendations, real-time coding assistance, and multilingual support using FastAPI and Redis.",
    tags: ["FastAPI", "React", "Gemini", "Redis"],
    github: "https://github.com/SaumiliHaldar/NexGenie",
    demo: "https://nexgenie.vercel.app",
    // image: "/nexgenie.jpg",
    color: "#19E68C",
  },
  {
    id: "04",
    title: "MausamVibe",
    subtitle: "Weather App",
    description: "Built a Django-based weather application with real-time, location-based forecasts using OpenWeatherMap API.",
    tags: ["Django", "Python", "JS", "Weather API"],
    github: "https://github.com/SaumiliHaldar/MausamVibe",
    demo: "https://mausamvibe.onrender.com",
    // image: "/mausamvibe.jpg",
    color: "#1ABC54",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-[#080808]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Section Title (Hidden on small screens) */}
        <div className="absolute top-20 left-10 z-0 opacity-[0.02] select-none pointer-events-none hidden lg:block">
           <h2 className="text-[20vw] font-black leading-none uppercase font-heading">
             WORK
           </h2>
        </div>

        <motion.div style={{ x: springX }} className="flex gap-8 px-10 md:px-20 items-center">
          {/* Intro Card */}
          <div className="flex h-[70vh] w-[80vw] md:w-[45vw] flex-col justify-center gap-6 p-4 shrink-0">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-6"
             >
                <div className="flex items-center gap-4 text-primary">
                   <Layers size={32} />
                   <span className="text-sm font-bold uppercase tracking-[0.3em]">Featured Work</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black font-heading tracking-tighter text-foreground leading-[0.9]">
                   SELECTED <br /> <span className="text-primary italic">PIECES.</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md italic">
                   A collection of engineered solutions, from AI-driven platforms to high-performance data systems.
                </p>
             </motion.div>
          </div>

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* Final Card */}
          <div className="group relative flex h-[75vh] w-[85vw] md:w-[60vw] lg:w-[50vw] flex-col shrink-0 overflow-hidden rounded-[3rem] bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors duration-700">
             {/* Background ID Number */}
             <div className="absolute top-8 right-12 text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                ++
             </div>

             <div className="flex flex-col h-full p-8 md:p-12 items-center justify-center text-center gap-8 relative z-10">
                <div className="space-y-4">
                   <h3 className="text-4xl md:text-6xl font-black font-heading text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors">More on GitHub</h3>
                   <p className="text-muted-foreground text-lg max-w-sm mx-auto">Explore 20+ other repositories, experimentations, and open-source contributions.</p>
                </div>
                
                <motion.a
                  href="https://github.com/SaumiliHaldar"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20"
                >
                   <Github size={20} />
                   Visit Profile
                   <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </motion.a>
             </div>

             {/* Visual Accent Gradient */}
             <div 
               className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[100px] pointer-events-none"
               style={{ background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)` }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group relative flex h-[75vh] w-[85vw] md:w-[60vw] lg:w-[50vw] flex-col shrink-0 overflow-hidden rounded-[3rem] bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all duration-700"
    >
      {/* Image Background Layer (Conditional) */}
      {project.image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:scale-110 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
        </div>
      )}

      {/* Background ID Number */}
      <div className="absolute top-8 right-12 text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/10 transition-colors z-10">
         {project.id}
      </div>

      <div className="flex flex-col h-full p-8 md:p-12 justify-between relative z-20">
        <div>
          <div className="flex items-center mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              {project.subtitle}
            </span>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black font-heading text-foreground tracking-tighter uppercase mb-6 group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-500">
            {project.description}
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:border-primary/20 group-hover:text-primary transition-all duration-500 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors"
          >
             Launch Experience
             <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:translate-x-2 transition-all bg-white/5 backdrop-blur-sm">
                <ArrowRight size={18} />
             </div>
          </motion.a>
        </div>
      </div>
      
      {/* Visual Accent Gradient */}
      <div 
        className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[100px] pointer-events-none z-10"
        style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}
