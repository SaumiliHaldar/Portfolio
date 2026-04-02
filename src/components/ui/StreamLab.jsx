"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Radio, Waves, ArrowRight } from "lucide-react";

export default function StreamLab() {
  const [dataPoints, setDataPoints] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const newDataPoint = {
        id: Math.random().toString(36).substr(2, 9),
        value: Math.floor(Math.random() * 100),
        timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      
      setDataPoints((prev) => [newDataPoint, ...prev.slice(0, 5)]);
    }, 1200);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col bg-secondary/10 rounded-2xl border border-white/5 overflow-hidden group font-sans backdrop-blur-3xl">
      <div className="flex items-center justify-between px-6 py-4 bg-background/40 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className={`h-2 w-2 rounded-full ${isActive ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Radio size={14} className={isActive ? "text-primary" : "text-muted-foreground"} /> MQTT Low-Latency Stream
          </span>
        </div>
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all border ${isActive ? "bg-primary/10 border-primary text-primary" : "bg-secondary/50 border-white/10 text-muted-foreground hover:text-foreground"}`}
        >
          {isActive ? "Disconnect" : "Connect"}
        </button>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4 font-mono overflow-hidden">
        <AnimatePresence mode="popLayout">
          {isActive ? (
            dataPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1 - index * 0.15, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-muted-foreground">{point.timestamp}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-primary font-bold">NODE_0{index + 1}</span>
                    <ArrowRight size={10} className="text-muted-foreground" />
                    <span className="text-xs text-white">val: {point.value}</span>
                  </div>
                </div>
                <div className="h-6 w-24 bg-secondary/50 rounded-md overflow-hidden relative">
                   <motion.div 
                     className="absolute inset-y-0 left-0 bg-primary/40"
                     initial={{ width: 0 }}
                     animate={{ width: `${point.value}%` }}
                     transition={{ duration: 1, ease: "easeOut" }}
                   />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
               <Activity size={40} className="text-muted-foreground/20 animate-pulse" />
               <p className="text-xs text-muted-foreground uppercase tracking-widest leading-loose max-w-[200px]">
                 Click connect to simulate real-time packet analysis 
               </p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Visual Depth Graph Background */}
      <div className="h-20 w-full relative overflow-hidden bg-black/20">
         <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
               <path 
                 d="M0 40 Q 50 10 100 40 T 200 40 T 300 40 T 400 40 T 500 40 T 600 40" 
                 fill="none" 
                 stroke="var(--primary)" 
                 strokeWidth="2" 
                 className={isActive ? "animate-waves" : ""} 
               />
            </svg>
         </div>
      </div>
    </div>
  );
}
