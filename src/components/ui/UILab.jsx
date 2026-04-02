"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Check, Layout, MousePointer2 } from "lucide-react";

export default function UILab() {
  const [borderRadius, setBorderRadius] = useState(12);
  const [isPrimary, setIsPrimary] = useState(true);
  const [isGlass, setIsGlass] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col bg-secondary/20 rounded-2xl border border-white/5 overflow-hidden font-sans group">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <Settings size={14} className="text-primary" /> Component Configurator
        </span>
      </div>
      
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card/10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
             <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Border Radius: {borderRadius}px</label>
             <input 
               type="range" 
               min="0" 
               max="50" 
               value={borderRadius} 
               onChange={(e) => setBorderRadius(parseInt(e.target.value))}
               className="w-full accent-primary bg-secondary h-1.5 rounded-full appearance-none cursor-pointer"
             />
          </div>
          
          <div className="flex flex-col gap-3">
             <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Toggles</label>
             <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setIsPrimary(!isPrimary)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all ${isPrimary ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground border border-white/10"}`}
                >
                   {isPrimary && <Check size={10} />} Primary Color
                </button>
                <button 
                  onClick={() => setIsGlass(!isGlass)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all ${isGlass ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground border border-white/10"}`}
                >
                   {isGlass && <Check size={10} />} Glassmorphism
                </button>
             </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-8 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden">
          {/* Component Preview */}
          <motion.div
            className={`w-full max-w-[200px] p-6 flex flex-col gap-4 shadow-2xl relative z-10`}
            style={{
              borderRadius: borderRadius,
              backgroundColor: isPrimary ? "var(--primary)" : "var(--secondary)",
              backdropFilter: isGlass ? "blur(12px)" : "none",
              border: isGlass ? "1px solid rgba(255,255,255,0.1)" : "none",
              color: isPrimary ? "var(--primary-foreground)" : "var(--foreground)",
            }}
            layout
          >
            <div className="h-4 w-12 bg-black/20 rounded-full" />
            <div className="space-y-2">
               <div className="h-2 w-full bg-black/10 rounded-full" />
               <div className="h-2 w-3/4 bg-black/10 rounded-full" />
            </div>
            <div className="flex justify-end mt-4">
               <div className="h-8 w-8 rounded-full bg-black/20 flex items-center justify-center">
                  <span className="text-[10px]">OK</span>
               </div>
            </div>
          </motion.div>
          
          {/* Background Grid for depth */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
          {/* Small Cursor Indicator */}
          <motion.div 
            className="absolute bottom-4 right-4 text-primary opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <MousePointer2 size={16} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
