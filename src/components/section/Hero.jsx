"use client";

import { motion } from "motion/react";
import { Rocket, ArrowBigDownDash } from "lucide-react";
import { useState, useEffect } from "react";
import { useResponsive } from "@/lib/responsive";

function TypewriterText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text]);

  return (
    <>
      {displayText}
      {/* {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{
            display: "inline-block",
            width: "3px",
            // height: "1em",
            height: "calc(1em * var(--cursor-scale, 1))",
            background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
            marginLeft: "4px",
            // verticalAlign: "",
            verticalAlign: "middle",
          }}
        />
      )} */}
    </>
  );
}

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hiddenbg-slate-900 w-full rounded-md z-0">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold dark:text-slate-700 md:text-4xl lg:text-7xl">
          {"Hi, I'm".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}

          {/* Line break for mobile */}
          <br className="block md:hidden md:mt-4" />

          {/* Typewriter effect on name */}
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-blue-100 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundSize: "200% 200%",
              display: "inline-block",
            }}
          >
            <TypewriterText text="Saumili Haldar" />
          </motion.span>
        </h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          I am a Computer Science and Engineering graduate from OmDayal Group of
          Institutions with hands-on experience in Python development, Machine
          Learning, and scalable API design. Currently, I am working as a
          Software Developer at RS Consultancy, where I contribute to building
          robust software solutions and driving technical innovation.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => window.open("https://github.com/SaumiliHaldar")}
            className="w-60 transform rounded-full bg-gray-900 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <Rocket className="inline-block mr-2 h-5 w-5" />
            View My Work
          </button>
          <motion.a
            href="./Saumili Haldar-Resume.pdf"
            download="Saumili Haldar-Resume.pdf"
            className="w-60 flex items-center justify-center gap-2 transform rounded-full border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            <ArrowBigDownDash className="h-5 w-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
