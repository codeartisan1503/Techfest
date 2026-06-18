import { useState, useEffect } from "react";
import { TimelineEvent, StatItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Database, CalendarDays, Activity, CheckCircle2, ChevronRight, Binary } from "lucide-react";

export default function Technology() {
  const [activeStageId, setActiveStageId] = useState<string>("stage-4");

  const timelineStages: TimelineEvent[] = [
    {
      id: "stage-1",
      year: "2021",
      title: "Biomimetic Synapse Synthesis",
      description: "First stable bi-directional synchronization of synthetic carbon fibers with cerebral gray matter. Reached full motor controls command link in virtual testing chambers.",
      status: "completed",
    },
    {
      id: "stage-2",
      year: "2023",
      title: "Tactical HUD Neural Interlink",
      description: "Integrated real-time augmented HUD visuals streaming directly into the user's ocular neural pathways, avoiding physical ocular glass screens.",
      status: "completed",
    },
    {
      id: "stage-3",
      year: "2025",
      title: "Quantum Bio-Cores Testing",
      description: "Implemented standard 5,000 Qubit microprocessors into human synthetic chest armor layers to balance extreme background mathematical loads offline.",
      status: "testing",
    },
    {
      id: "stage-4",
      year: "2026",
      title: "Holographic Neural Consciousness Integration",
      description: "Current stage: Seamless full-system consciousness backup and hive-mesh grid synchronization. Completely secures cognitive continuity over cloud arrays.",
      status: "operational",
    },
  ];

  const statItems: StatItem[] = [
    {
      id: "stat-1",
      label: "AI CRITICAL ACCURACY",
      value: "99.99%",
      subtext: "Validated in high-stress tactical simulations.",
    },
    {
      id: "stat-2",
      label: "TOTAL MAPPED SYNAPSES",
      value: "10M+",
      subtext: "Active neural fiber data points tracked.",
    },
    {
      id: "stat-3",
      label: "CONTINUOUS COGNITIVE BACKUPS",
      value: "24/7/365",
      subtext: "Guaranteed cloud memory state synchronization.",
    },
    {
      id: "stat-4",
      label: "DECISION TRIGGER SPEED",
      value: "< 0.05s",
      subtext: "Faster than standard human reflex channels.",
    },
  ];

  // Selected stage details
  const currentStage = timelineStages.find((s) => s.id === activeStageId) || timelineStages[3];

  return (
    <section id="technology" className="relative py-28 bg-[#020408]/20 overflow-hidden z-10">
      {/* Background neon grid lines */}
      <div className="absolute inset-0 cyber-grid-blue opacity-15 pointer-events-none"></div>
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#00f3ff] mb-3 tracking-widest uppercase"
          >
            // PERFORMANCE CORE SHOWCASE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6"
          >
            Futuristic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple text-shadow">Technology Array</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            Witness the operational evolution timeline and high-performance metrics running on our decentralized neural synap networks.
          </motion.p>
        </div>

        {/* 1. Animated statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-[#00f3ff]/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] transition-all duration-300 rounded-none"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/5 rounded-full blur-2xl pointer-events-none"></div>

              {/* Stat Value with Glowing effect */}
              <div className="font-orbitron font-black text-4xl text-white tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,243,255,0.4)]">
                {stat.value}
              </div>

              {/* Label */}
              <div className="font-mono text-[10px] text-[#00f3ff] tracking-wider font-bold mb-1">
                {stat.label}
              </div>

              {/* Description subtext */}
              <p className="text-neutral-400 text-xs font-poppins leading-snug">
                {stat.subtext}
              </p>

              {/* Miniature telemetry nodes style decorations */}
              <div className="absolute bottom-2 right-3 font-mono text-[8px] text-neutral-600">
                SYS_BLOCK_0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-6">
          {/* Left: Milestones Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-orbitron font-bold text-xl text-white text-left mb-6 flex items-center gap-2">
              <Binary className="text-neon-purple w-5 h-5" />
              <span>EVOLUTIONARY ROADMAP</span>
            </h3>

            <div className="space-y-4 text-left">
              {timelineStages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left p-4 border transition-all duration-300 flex items-center gap-4 rounded-none ${
                      isActive
                        ? "bg-white/10 border-[#9d00ff] shadow-[0_0_15px_rgba(157,0,255,0.15)]"
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {/* Glowing year circle badge */}
                    <div className={`font-orbitron font-extrabold text-xs px-3 py-1.5 rounded-none text-center tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "bg-neon-purple text-white shadow-[0_0_8px_var(--color-neon-purple)]"
                        : "bg-[#020408] text-slate-400 border border-white/10"
                    }`}>
                      {stage.year}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-orbitron text-xs font-bold text-white tracking-wide truncate">
                        {stage.title}
                      </div>
                      <div className="font-mono text-[9px] text-neutral-500 flex items-center gap-1 mt-1">
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          stage.status === "operational"
                            ? "bg-green-400 shadow-[0_0_4px_#4ade80]"
                            : stage.status === "testing"
                            ? "bg-yellow-400 shadow-[0_0_4px_#facc15]"
                            : "bg-[#00f3ff] shadow-[0_0_4px_#00f3ff]"
                        }`}></span>
                        <span className="uppercase tracking-widest">{stage.status}</span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 text-neutral-600 ${
                      isActive ? "translate-x-1 text-neon-purple" : ""
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Milestone Blueprint Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 relative flex flex-col justify-between p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-left rounded-none">
              {/* Abs grid inside display container */}
              <div className="absolute inset-0 cyber-grid opacity-[0.08] pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Header display node */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-6 gap-4">
                      <div>
                        <div className="font-mono text-[10px] text-[#9d00ff] tracking-widest mb-1.5 font-bold">
                          // DEVELOPMENT STAGE {currentStage.year}
                        </div>
                        <h4 className="font-orbitron font-extrabold text-xl text-white">
                          {currentStage.title}
                        </h4>
                      </div>

                      {/* Diagnostic year badge display */}
                      <span className="font-orbitron text-xs font-bold text-center self-start sm:self-center px-4 py-2 border border-white/10 text-neon-cyan bg-white/5 rounded-none shadow-[0_0_8px_rgba(0,243,255,0.1)]">
                        CORE_REV.{currentStage.year}.01
                      </span>
                    </div>

                    {/* Stage descriptions */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="font-mono text-[9px] text-neutral-500 tracking-wider">
                          SYSTEM_SUMMARY_STREAM
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-poppins">
                          {currentStage.description}
                        </p>
                      </div>

                      {/* Architectural blueprints checklist mock representation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 p-3 rounded-none text-xs text-neutral-400 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          <span>SYNAPSE RESIST_SYNC_OK</span>
                        </div>
                        <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 p-3 rounded-none text-xs text-neutral-400 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          <span>POLYNOMIAL MATRIX_ENG_OK</span>
                        </div>
                        <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 p-3 rounded-none text-xs text-neutral-400 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          <span>HUD_OVERLAY FREQ RANGE_OK</span>
                        </div>
                        <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 p-3 rounded-none text-xs text-neutral-400 font-mono">
                          {currentStage.status === "testing" ? (
                            <Activity className="w-4 h-4 text-yellow-400 shrink-0 animate-pulse" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          )}
                          <span>
                            {currentStage.status === "testing"
                              ? "BACKUP MINDER_CALIB_LIVE"
                              : "BACKUP MINDER STATE_OK"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operational diagnostics system terminal simulation info */}
                  <div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-neutral-500">
                    <div className="flex gap-4 items-center">
                      <span>LOAD_FACTOR: 0.12ms</span>
                      <span>SEC_ENCRYPT: HYBRID_G_5K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                      </span>
                      <span>HIVE SECURE SYNC OK</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative brackets */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
