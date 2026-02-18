"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
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
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { BiCodeBlock, BiData, BiServer, BiGlobe, BiTerminal } from "react-icons/bi";

const skillCategories = [
  {
    title: "Languages",
    icon: BiCodeBlock,
    class: "lg:col-span-2",
    skills: [
      { name: "Python", icon: FaPython, colorClass: "text-blue-500" },
      { name: "Java", icon: FaJava, colorClass: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, colorClass: "text-blue-600" },
    ],
  },
  {
    title: "Frontend Development",
    icon: BiGlobe,
    class: "lg:col-span-1",
    skills: [
      { name: "HTML5", icon: FaHtml5, colorClass: "text-orange-600" },
      { name: "CSS3", icon: FaCss3Alt, colorClass: "text-blue-500" },
      { name: "React.js", icon: FaReact, colorClass: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, colorClass: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-cyan-500" },
    ],
  },
  {
    title: "Database & Deployment",
    icon: BiData,
    class: "lg:col-span-2",
    skills: [
      { name: "MongoDB", icon: SiMongodb, colorClass: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-blue-600" },
      { name: "MySQL", icon: SiMysql, colorClass: "text-blue-400" },
      { name: "Vercel", icon: SiVercel, colorClass: "text-foreground" },
      { name: "Render", icon: SiRender, colorClass: "text-foreground" },
    ],
  },
  {
    title: "Backend & API",
    icon: BiServer,
    class: "lg:col-span-1",
    skills: [
      { name: "FastAPI", icon: SiFastapi, colorClass: "text-teal-500" },
      { name: "Django", icon: SiDjango, colorClass: "text-emerald-900" },
      { name: "Postman", icon: SiPostman, colorClass: "text-orange-500" },
      { name: "Swagger", icon: SiSwagger, colorClass: "text-lime-500" },
    ],
  },
  {
    title: "Tools & AI",
    icon: BiTerminal,
    class: "lg:col-span-3",
    skills: [
      { name: "Git", icon: FaGitAlt, colorClass: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, colorClass: "text-foreground" },
      { name: "Hugging Face", icon: SiHuggingface, colorClass: "text-yellow-400" },
      { name: "Dialogflow ES", icon: SiDialogflow, colorClass: "text-orange-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-fit flex-col items-center justify-center py-10 md:py-16 bg-secondary/5 overflow-hidden scroll-mt-20"
    >
      <div className="z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-left">
            Technical Skills
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            let spanClass = "";
            let layoutClass = "grid grid-cols-3 sm:grid-cols-4"; // Default layout

            // Adjusted logic based on User's resize (Database=Wide, Tools=Small)
            if (index === 0) { // Languages (2x1)
              spanClass = "lg:col-span-2 lg:row-span-1 bg-card/40";
              layoutClass = "grid grid-cols-4 sm:grid-cols-4 gap-4";
            }
            else if (index === 1) { // Frontend (2x1)
              spanClass = "lg:col-span-2 lg:row-span-1 bg-card/20";
              layoutClass = "grid grid-cols-4 sm:grid-cols-5 gap-3";
            }
            else if (index === 2) { // Database (2x1) - Wide now
              spanClass = "lg:col-span-2 lg:row-span-1 bg-card/20";
              layoutClass = "grid grid-cols-4 sm:grid-cols-5 gap-3";
            }
            else if (index === 3) { // Backend (1x1) - Small
              spanClass = "lg:col-span-1 lg:row-span-1 bg-card/20";
              layoutClass = "grid grid-cols-4 gap-4 md:grid-cols-2 md:gap-3";
            }
            else if (index === 4) { // Tools (1x1) - Small now
              spanClass = "lg:col-span-1 lg:row-span-1 bg-card/30";
              layoutClass = "grid grid-cols-4 gap-4 md:grid-cols-2 md:gap-3";
            }

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                        relative group flex flex-col gap-4 p-5 rounded-2xl
                        backdrop-blur-md border border-white/5 dark:border-white/5
                        hover:border-primary/20 hover:bg-card/60 transition-all duration-500
                        overflow-hidden
                        ${spanClass}
                    `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Gradient Bloom */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-[40px] group-hover:bg-primary/20 transition-all duration-500" />

                <div className="relative z-10 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                      {CategoryIcon && <CategoryIcon className="text-base" />}
                    </div>
                    <h3 className="text-base font-bold text-foreground/90 tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className={`${layoutClass} relative z-10 w-full pt-1`}>
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group/icon flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <div className={`
                                        flex items-center justify-center 
                                        h-10 w-10 sm:h-12 sm:w-12 rounded-xl 
                                        bg-background/40 border border-white/10 shadow-sm
                                        group-hover/icon:bg-background/60 group-hover/icon:border-primary/30 group-hover/icon:shadow-md 
                                        transition-all duration-300
                                     `}>
                          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${skill.colorClass} opacity-90 group-hover/icon:opacity-100 transition-opacity`} />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover/icon:text-foreground text-center line-clamp-none">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
