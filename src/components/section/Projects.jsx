"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevTrackr",
    subtitle: "Developer Analytics SaaS",
    description: "Built an AI-powered GitHub analytics platform with real-time repository sync, interactive dashboards, and neural productivity scoring.",
    tags: ["FastAPI", "React", "Prisma", "Gemini API"],
    github: "https://github.com/SaumiliHaldar/DevTrackr",
    demo: "https://devtrackrr.vercel.app",
    image: "/devtrackr.jpg",
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
    image: "/lysn.jpg",
    color: "#1ED760",
  },
  {
    id: "03",
    title: "NexGenie",
    subtitle: "Chatbot for LMS",
    description: "AI chatbot with personalized course recommendations, real-time coding assistance, and multilingual support using FastAPI and Redis.",
    tags: ["FastAPI", "React", "Gemini", "Redis"],
    github: "https://github.com/SaumiliHaldar/NexGenie",
    demo: "https://nexgenie.vercel.app",
    image: "/nexgenie.jpg",
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
    image: "/mausamvibe.jpg",
    color: "#1ABC54",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      if (scrollRef.current) {
        const fullWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const lastCard = scrollRef.current.lastElementChild;
        const lastCardWidth = lastCard ? lastCard.offsetWidth : 0;
        const paddingRight = parseFloat(getComputedStyle(scrollRef.current).paddingRight) || 0;
        const targetDistance = (fullWidth - paddingRight - lastCardWidth / 2) - (viewportWidth / 2);
        setScrollDistance(targetDistance > 0 ? targetDistance : 0);
      }
    };
    updateDistance();
    const timeoutId = setTimeout(updateDistance, 100);
    window.addEventListener("resize", updateDistance);
    return () => {
      window.removeEventListener("resize", updateDistance);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* ── Section Heading ── */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-6 md:pb-8 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-foreground leading-[0.9] uppercase">
              FEATURED <span className="text-primary italic">PROJECTS.</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Cards — horizontal scroll ── */}
        <div className="flex-1 flex items-center overflow-hidden relative">
          <motion.div
            ref={scrollRef}
            style={{ x: springX }}
            className="flex gap-6 md:gap-8 px-6 md:px-20 items-center will-change-transform"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

            <GithubCard />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px -10% 0px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95, x: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[65vh] w-[85vw] md:w-[60vw] lg:w-[50vw] flex-col shrink-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-secondary/40 border border-white/5 hover:border-primary/30 transition-all duration-700"
    >
      {/* ── Image - masked softly to prevent overcrowding ── */}
      {project.image && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={project.image}
            alt={project.title}
            className="h-[80%] w-full object-cover object-top opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:scale-105 group-hover:grayscale-0"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      )}

      {/* ── Background Index ── */}
      <div className="absolute top-6 right-10 text-5xl md:text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/10 transition-colors z-10">
        {project.id}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col h-full p-6 md:p-10 justify-between relative z-20 pointer-events-none">
        
        {/* Top: Subtitle */}
        <div className="pointer-events-auto">
          <div className="flex items-center mb-4 md:mb-6">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Bottom: Text & CTAs */}
        <div className="pointer-events-auto mt-auto">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-3 leading-none group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-[14px] md:text-[15px] font-medium text-muted-foreground leading-relaxed max-w-[90%] md:max-w-[80%] group-hover:text-white/90 transition-colors duration-500 mb-6 md:mb-8">
            {project.description}
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0 mt-4">
            <div className="flex flex-wrap gap-2.5 max-w-sm">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider bg-secondary/50 text-foreground/70 border border-border rounded-full group-hover:border-primary/50 group-hover:bg-primary/20 hover:text-primary-foreground transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 md:gap-4 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors"
            >
              Launch Experience
              <div className="h-8 w-8 md:h-9 md:w-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:translate-x-2 transition-all bg-white/5">
                <ArrowRight size={15} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Ambient glow ── */}
      <div
        className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[40px] md:blur-[80px] pointer-events-none z-10"
        style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}

function GithubCard() {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px -10% 0px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95, x: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[65vh] w-[85vw] md:w-[60vw] lg:w-[50vw] flex-col shrink-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors duration-700"
    >
      <div className="absolute top-8 right-12 text-6xl md:text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/10 transition-colors">
        ++
      </div>
      <div className="flex flex-col h-full p-6 md:p-12 items-center justify-center text-center gap-8 relative z-10">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-6xl font-black font-heading text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors">
            More on GitHub
          </h3>
          <p className="text-[14px] md:text-[15px] font-medium text-muted-foreground max-w-sm mx-auto group-hover:text-white/90 transition-colors">
            Explore 20+ other repositories, experimentations, and open-source contributions.
          </p>
        </div>
        <a
          href="https://github.com/SaumiliHaldar"
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
        >
          <Github size={18} />
          Visit Profile
          <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
        </a>
      </div>
      <div
        className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[60px] pointer-events-none"
        style={{ background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}
