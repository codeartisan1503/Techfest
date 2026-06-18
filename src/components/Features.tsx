import { useState } from "react";
import { Brain, Shield, Network, Dna, Orbit, Cpu, ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Feature } from "../types";

export default function Features() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const featuresList: Feature[] = [
    {
      id: "neural",
      title: "Neural Intelligence",
      description: "Direct synaptic-to-silicon neural linking. Stream raw machine intelligence straight into your subconscious, unlocking cognitive expansion.",
      iconName: "Brain",
      details: ["Latency: < 0.2ms", "Synapse Density: 100M/mm²", "Dual-Hemisphere Sync", "Bi-directional Sensory stream"],
    },
    {
      id: "security",
      title: "Cyber Security",
      description: "Military-grade quantum-resistant firewalls. Real-time cognitive shielding designed to protect your biological consciousness from external hacking.",
      iconName: "Shield",
      details: ["Quantum Key Distribution", "Biometric Encryption", "Intrusion Auto-Isolation", "Anti-Phishing Neural Block"],
    },
    {
      id: "ml",
      title: "Machine Learning",
      description: "Proactive cognitive expansion through machine intelligence. The system continuously adapts to your thought patterns and predicts bio-inputs.",
      iconName: "Network",
      details: ["Pattern Predictor: 99.4%", "Unsupervised Node Learning", "Dynamic Synaptic Mapping", "Auto-Pruned Redundancies"],
    },
    {
      id: "augmentation",
      title: "Human Augmentation",
      description: "Upgrade biological efficiency. Integrate synthetic limbs, ocular lenses, and muscle motor fibers controlled with standard brainwave impulses.",
      iconName: "Dna",
      details: ["Myoelectric Interface V4", "4K HUD Retinal Overlays", "Bio-Synthetic Muscle Grip", "Toxin Auto-Filtering Nodes"],
    },
    {
      id: "quantum",
      title: "Quantum Processing",
      description: "Harness sub-atomic superposition. Calculate infinite multi-variable contingencies instantly inside your biological headpiece unit.",
      iconName: "Orbit",
      details: ["Qubit Count: 5,000 SP", "Superposition Stability", "Thermal Decoherence Guards", "Infinite Parallel Threads"],
    },
    {
      id: "automation",
      title: "Smart Automation",
      description: "Set your daily biosynchronous habits on autopilot. Seamlessly dispatch schedules, communication, and complex systems via neural thought triggers.",
      iconName: "Cpu",
      details: ["Syncs 150+ Smart Devices", "Automated Ambient Cycles", "Smart Nutrition Dispensers", "Emergency Defense Auto-Trigger"],
    },
  ];

  // Helper function to return the correct icon component
  const renderIcon = (name: string, colorClass: string) => {
    const props = { className: `w-8 h-8 ${colorClass} transition-transform duration-300 group-hover:scale-110` };
    switch (name) {
      case "Brain":
        return <Brain {...props} />;
      case "Shield":
        return <Shield {...props} />;
      case "Network":
        return <Network {...props} />;
      case "Dna":
        return <Dna {...props} />;
      case "Orbit":
        return <Orbit {...props} />;
      case "Cpu":
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <section id="features" className="relative py-28 bg-cyber-bg overflow-hidden z-10">
      {/* Background aesthetics */}
      <div className="absolute inset-0 cyber-grid-blue opacity-25 pointer-events-none"></div>

      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-neon-blue mb-3 tracking-widest uppercase"
          >
            // DISCOVER CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6 tracking-tight"
          >
            Enhanced Cybernetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            Equip yourself with next-tier neural, mechanical, and informational protocols engineered to survive and dominate the cybernetic age.
          </motion.p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat, index) => {
            const isSelected = selectedId === feat.id;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedId(isSelected ? null : feat.id)}
                className={`group relative text-left p-6 sm:p-8 border bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? "border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.25)] bg-white/10"
                    : isEven
                    ? "border-white/10 hover:border-[#00f3ff]/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                    : "border-white/10 hover:border-[#9d00ff]/50 hover:shadow-[0_0_15px_rgba(157,0,255,0.1)]"
                }`}
              >
                {/* Visual hover background spotlight gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon and Corner Diagnostic Tech Numbers */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 border ${
                        isEven 
                          ? "bg-[#00f3ff]/5 border-white/10 text-neon-blue group-hover:border-[#00f3ff]/30" 
                          : "bg-[#9d00ff]/5 border-white/10 text-neon-purple group-hover:border-[#9d00ff]/30"
                      } transition-colors duration-300 rounded-none`}>
                        {renderIcon(feat.iconName, isEven ? "text-neon-blue" : "text-neon-purple")}
                      </div>
                      <span className="font-mono text-[9px] text-white/40 tracking-wider">
                        // SEC_ID:{feat.id.toUpperCase()}_v8.32
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-orbitron font-bold text-lg text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-poppins">
                      {feat.description}
                    </p>
                  </div>

                  {/* Sub-Parameters Expandable Drawdown Grid */}
                  <div>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 hover:text-white transition-colors duration-350">
                        <span className="flex items-center gap-1.5 font-bold tracking-widest text-[9px]">
                          <Zap className="w-3 h-3 text-neon-purple animate-pulse" />
                          SPEC_TELEMETRY
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px]">
                            {isSelected ? "CONSOLIDATE" : "EXPAND PROTOCOL"}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "rotate-90 text-neon-purple" : ""}`} />
                        </div>
                      </div>

                      {/* Display detail items */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-2 pt-4 font-mono text-[10px]">
                          {feat.details.map((detail, idx) => (
                             <div key={idx} className="flex items-center gap-1 bg-black/40 p-2 rounded border border-white/5 text-slate-300">
                              <span className="h-1 w-1 bg-neon-blue rounded-full"></span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Cyber style corner brackets inside absolute scope */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-neon-blue"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-neon-blue"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-neon-blue"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-neon-blue"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
