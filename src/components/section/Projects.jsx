"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevTrackr",
    subtitle: "Developer Analytics SaaS",
    description:
      "An AI-powered GitHub analytics platform with real-time repository sync, interactive dashboards, and neural productivity scoring.",
    highlights: [
      "Real-time GitHub repository sync & commit analytics",
      "Neural productivity scoring with Gemini AI",
      "Interactive dashboards & contribution heatmaps",
    ],
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
    description:
      "A PDF-to-audio web app with OAuth, GridFS cloud storage, and high-fidelity text-to-speech conversion using gTTS.",
    highlights: [
      "OAuth-secured upload & user session management",
      "GridFS storage for large PDF document handling",
      "High-fidelity gTTS text-to-speech pipeline",
    ],
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
    description:
      "AI chatbot with personalized course recommendations, real-time coding assistance, and multilingual support using FastAPI and Redis.",
    highlights: [
      "Personalized course recommendations via AI context",
      "Real-time coding assistance with streaming responses",
      "Multilingual support with Redis-cached sessions",
    ],
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
    description:
      "A Django-based weather app with real-time location-based forecasts and intuitive data visualization using OpenWeatherMap API.",
    highlights: [
      "Live location-based weather & 5-day forecasting",
      "OpenWeatherMap API with real-time data refresh",
      "Intuitive data visualization & dynamic UI states",
    ],
    tags: ["Django", "Python", "JS", "Weather API"],
    github: "https://github.com/SaumiliHaldar/MausamVibe",
    demo: "https://mausamvibe.onrender.com",
    image: "/mausamvibe.jpg",
    color: "#1ABC54",
  },
];

// ── Feature bullet ─────────────────────────────────────────────────────────
function FeatureBullet({ text, color }) {
  return (
    <li className="flex items-start gap-3 group/bullet">
      <span
        className="mt-[7px] block h-[2px] w-4 shrink-0 rounded-full opacity-60 group-hover/bullet:opacity-100 transition-opacity duration-300"
        style={{ background: color }}
      />
      <span className="text-[11px] sm:text-[13px] text-neutral-500 leading-relaxed group-hover/bullet:text-neutral-300 transition-colors duration-300">
        {text}
      </span>
    </li>
  );
}

// ── Individual project card ────────────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <div
      className="group relative shrink-0 flex flex-col-reverse lg:flex-row w-[88vw] md:w-[72vw] lg:w-[65vw] xl:w-[60vw] rounded-2xl border border-white/[0.06] bg-[#181818] overflow-hidden hover:border-primary/20 transition-colors duration-500"
      style={{ minHeight: "420px" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(500px circle at 0% 80%, ${project.color}12, transparent 60%)`,
        }}
      />

      {/* ── TOP/LEFT: Info panel ── */}
      <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 lg:p-9 w-full lg:w-[45%] lg:shrink-0">
        <div className="space-y-5">
          {/* Title */}
          <div className="flex items-start gap-3">
            <div
              className="mt-2 h-7 w-[3px] shrink-0 rounded-full"
              style={{ background: project.color }}
            />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black font-heading text-white tracking-tight leading-none">
                {project.title}
              </h3>
              <p
                className="mt-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em]"
                style={{ color: project.color }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[11px] sm:text-[13px] text-neutral-500 leading-relaxed min-h-[60px]">
            {project.description}
          </p>

          {/* Highlights — desktop only */}
          <ul className="hidden lg:block space-y-2.5">
            {project.highlights.map((h) => (
              <FeatureBullet key={h} text={h} color={project.color} />
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-6 space-y-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-[5px] text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider rounded border border-white/[0.07] bg-white/[0.03] text-neutral-500 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Launch link */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-4 text-[11px] sm:text-sm font-black uppercase tracking-[0.28em] text-neutral-300 hover:text-primary transition-colors duration-300 font-bold"
          >
            Launch Project
            <div className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary/10 group-hover/btn:translate-x-1 transition-all duration-300">
              <ArrowRight size={14} className="text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* ── BOTTOM/RIGHT: Screenshot panel ── */}
      <div className="relative flex-1 min-h-[220px] lg:min-h-0 overflow-hidden bg-[#0f0f0f]">
        {/* Browser chrome bar */}
        <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-1.5 px-3 py-2.5 bg-[#141414] border-b border-white/[0.05]">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <div className="ml-2 flex-1 bg-white/[0.04] border border-white/[0.05] rounded px-2 py-0.5 text-[9px] font-mono text-neutral-700 truncate">
            {project.demo.replace("https://", "")}
          </div>
        </div>

        {/* Screenshot */}
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-[1.04] opacity-75 group-hover:opacity-100"
          style={{ paddingTop: "2rem" }}
          loading="lazy"
        />

        {/* Edge fade overlay */}
        <div className="absolute inset-0 shadow-[inset_-4px_0_40px_rgba(0,0,0,0.7),inset_0_-4px_40px_rgba(0,0,0,0.5)] pointer-events-none" />

        {/* Ghost index */}
        <div className="absolute bottom-3 right-4 text-[52px] font-black font-mono text-white/[0.04] select-none pointer-events-none leading-none">
          {project.id}
        </div>
      </div>
    </div>
  );
}

// ── GitHub CTA card ────────────────────────────────────────────────────────
function GithubCard() {
  return (
    <div className="group relative shrink-0 flex flex-col items-center justify-center w-[75vw] md:w-[38vw] lg:w-[30vw] rounded-2xl border border-white/[0.06] bg-[#181818] hover:border-primary/20 transition-colors duration-500 p-10 text-center gap-8">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(29,185,84,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

      {/* Ghost ++ */}
      <div className="absolute top-6 right-8 text-6xl font-black font-mono text-white/[0.03] select-none leading-none group-hover:text-primary/8 transition-colors">
        ++
      </div>

      <div className="relative z-10 space-y-3">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white tracking-tight leading-[0.95] uppercase">
          More on <br /> GitHub
        </h3>
        <p className="text-[10px] sm:text-xs font-mono text-neutral-600 max-w-[200px] mx-auto uppercase tracking-widest">
          20+ proprietary &amp; open source repositories.
        </p>
      </div>

      <a
        href="https://github.com/SaumiliHaldar"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[10px] font-black font-mono uppercase tracking-[0.25em] rounded-full hover:bg-primary transition-all duration-300 shadow-xl active:scale-95"
      >
        <Github size={16} />
        Visit Profile
        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
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
        const paddingRight =
          parseFloat(getComputedStyle(scrollRef.current).paddingRight) || 0;
        const targetDistance =
          fullWidth - paddingRight - lastCardWidth / 2 - viewportWidth / 2;
        setScrollDistance(targetDistance > 0 ? targetDistance : 0);
      }
    };

    updateDistance();
    const id = setTimeout(updateDistance, 150);
    window.addEventListener("resize", updateDistance);
    return () => {
      window.removeEventListener("resize", updateDistance);
      clearTimeout(id);
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
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.07) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* ── Section heading ── */}
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-6 md:pb-8 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-white leading-[0.9] uppercase">
              FEATURED <span className="text-primary italic">PROJECTS.</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Horizontal scroll strip ── */}
        <div className="flex-1 flex items-center overflow-hidden relative">
          <motion.div
            ref={scrollRef}
            style={{ x: springX }}
            className="flex gap-5 md:gap-7 px-5 md:px-16 items-stretch will-change-transform"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <GithubCard />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
