"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, FolderOpen } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Lysn",
    description:
      "Lysn is an innovative PDF-to-audio platform that uses advanced text-to-speech to turn documents into natural-sounding audio you can listen to anytime, anywhere.",
    tags: ["FastAPI", "Next.js", "MongoDB", "TailwindCSS", "Framer Motion", "gTTS", "PyPDF2"],
    github: "https://github.com/SaumiliHaldar/Lysn",
    demo: "https://lysn.vercel.app/",
    image: "/lysn.jpg",
  },
  {
    title: "NexGenie",
    description:
      "NexGenie is an AI-powered chatbot for the LearnNexus LMS that delivers real-time academic help, coding support, and personalized learning guidance.",
    tags: ["FastAPI", "Python", "React", "MongoDB", "FAISS", "Dialogflow"],
    github: "https://github.com/SaumiliHaldar/NexGenie",
    demo: "https://nexgenie.vercel.app/",
    image: "/nexgenie.jpg",
  },
  {
    title: "MausamVibe",
    description:
      "MausamVibe is an intuitive weather app that provides real-time, location-based updates, forecasts, and visual weather insights to help users stay prepared.",
    tags: ["Django", "Python", "Weather API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SaumiliHaldar/MausamVibe",
    demo: "https://mausamvibe.onrender.com/",
    image: "/mausamvibe.jpg",
  },
  {
    title: "VibeStream",
    description:
      "VibeStream is a live streaming platform that enables real-time interaction, customizable streams, and seamless engagement through a responsive, user-friendly experience.",
    tags: ["Django", "Python", "PostgreSQL", "JavaScript", "OAuth", "ZegoCloud"],
    github: "https://github.com/SaumiliHaldar/VibeStream",
    demo: "https://vibestream-dt4t.onrender.com",
    image: "/vibestream.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-[40vh] md:min-h-[60vh] flex-col items-center justify-center py-12 md:py-20 overflow-hidden scroll-mt-20"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-left">
              Featured Projects
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of projects that showcase my skills in problem-solving and
              software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden sm:block"
          >
            <a
              href="https://github.com/SaumiliHaldar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <FolderOpen className="h-4 w-4" />
              View All
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 h-full"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                {/*  Use next/image for production, standard img for easy URL usage in demo */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-transform hover:scale-110"
                    title="View Code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 items-start text-left">
                <h3 className="text-lg font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-xs text-muted-foreground line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Links - Only visible on small screens */}
                <div className="mt-6 flex w-full gap-3 sm:hidden">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-800 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center sm:hidden"
        >
          <a
            href="https://github.com/SaumiliHaldar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <FolderOpen className="h-4 w-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
