"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, FolderOpen } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A comprehensive analysis tool leveraging machine learning to predict market trends with high accuracy.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/SaumiliHaldar",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Creative Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring a unique sidebar layout.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/SaumiliHaldar",
    demo: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "EcoTracker App",
    description:
      "A mobile-first web application designed to help users track their carbon footprint and suggest eco-friendly habits.",
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/SaumiliHaldar",
    demo: "#",
    image: "https://images.unsplash.com/photo-1542601906990-24d4c16419d4?q=80&w=2070&auto=format&fit=crop",
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
      className="relative flex md:min-h-screen flex-col items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="z-10 w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <LayoutGrid className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A selection of projects that showcase my skills in problem-solving and
            software development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                 {/*  Use next/image for production, standard img for easy URL usage in demo */}
                 <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:scale-110"
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
              
              <div className="flex flex-1 flex-col p-6 items-center text-center">
                <h3 className="text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-12 flex justify-center"
        >
           <a
             href="https://github.com/SaumiliHaldar"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
           >
              <FolderOpen className="h-4 w-4" />
              View All Projects on GitHub
           </a>
        </motion.div>
      </div>
    </section>
  );
}
