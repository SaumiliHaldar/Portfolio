"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFastapi,
  SiDjango,
  SiHuggingface,
  SiPostman,
  SiVercel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRender,
  SiJavascript,
  SiSwagger,
  SiDialogflow,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";

const skillCategories = [
  {
    title: "Frontend & Deployment",
    skills: [
      { name: "React", icon: FaReact, colorClass: "text-sky-400" },
      { name: "Next.js", icon: RiNextjsFill, colorClass: "text-foreground" },
      { name: "Vercel", icon: SiVercel, colorClass: "text-foreground" },
      { name: "Render", icon: SiRender, colorClass: "text-foreground" },
      { name: "VS Code", icon: VscVscode, colorClass: "text-blue-600" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", icon: FaPython, colorClass: "text-blue-500" },
      { name: "Java", icon: FaJava, colorClass: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-400" },
      { name: "FastAPI", icon: SiFastapi, colorClass: "text-teal-500" },
      { name: "Django", icon: SiDjango, colorClass: "text-emerald-900" },
    ],
  },
  {
    title: "Databases & API",
    skills: [
      { name: "MongoDB", icon: SiMongodb, colorClass: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-blue-600" },
      { name: "MySQL", icon: SiMysql, colorClass: "text-blue-400" },
      { name: "Postman", icon: SiPostman, colorClass: "text-orange-500" },
      { name: "Swagger", icon: SiSwagger, colorClass: "text-lime-400" },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Hugging Face", icon: SiHuggingface, colorClass: "text-yellow-400" },
      { name: "Dialogflow ES", icon: SiDialogflow, colorClass: "text-orange-500" },
      { name: "Git", icon: FaGitAlt, colorClass: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, colorClass: "text-neutral-800 dark:text-neutral-100" },
      { name: "Docker", icon: FaDocker, colorClass: "text-blue-500" },
    ],
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
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-[50vh] md:min-h-[70vh] flex-col items-center justify-center py-20 md:py-32 bg-secondary/20 overflow-hidden"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl font-semibold text-center text-foreground">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm transition-colors hover:border-primary/50 hover:shadow-lg w-24 h-24"
                    >
                      <Icon
                        className={`h-7 w-7 transition-colors ${skill.colorClass}`}
                      />
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
