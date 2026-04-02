"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Play, RotateCcw } from "lucide-react";

const codeSteps = [
  { input: "import data_processor", output: "Checking modules... OK" },
  { input: "processor = data_processor.Stream(port=1883)", output: "MQTT Stream Initialized." },
  { input: "processor.analyze(mode='low_latency')", output: "Analyzing stream: 124 packets/sec" },
  { input: "print(processor.status)", output: "Status: OPTIMIZED" },
];

export default function TerminalLab() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState([]);

  const runNextStep = () => {
    if (currentStep < codeSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setLogs((prev) => [...prev, { type: "input", text: codeSteps[nextStep].input }]);
      
      setTimeout(() => {
        setLogs((prev) => [...prev, { type: "output", text: codeSteps[nextStep].output }]);
      }, 600);
    }
  };

  const reset = () => {
    setCurrentStep(-1);
    setLogs([]);
  };

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-2">
            <TerminalIcon size={12} /> main.py
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={runNextStep}
            disabled={currentStep >= codeSteps.length - 1}
            className="p-1.5 rounded hover:bg-white/5 text-primary transition-colors disabled:opacity-30"
          >
            <Play size={14} fill="currentColor" />
          </button>
          <button 
            onClick={reset}
            className="p-1.5 rounded hover:bg-white/5 text-muted-foreground transition-colors"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={log.type === "input" ? "text-white" : "text-primary/80 pl-4"}
            >
              {log.type === "input" ? (
                <span className="flex gap-2">
                  <span className="text-primary font-bold">{">>>"}</span>
                  {log.text}
                </span>
              ) : (
                log.text
              )}
            </motion.div>
          ))}
          {currentStep === -1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground italic">
              Click play to run the system analysis...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
