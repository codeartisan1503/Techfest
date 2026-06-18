import { motion } from "motion/react";
import { Sparkles, Binary, HeartHandshake, EyeOff, ShieldAlert } from "lucide-react";
import cyberCoreImg from "../assets/images/cyber_core_1781768166458.jpg";

export default function About() {
  const coreValues = [
    {
      icon: <Binary className="w-5 h-5 text-neon-blue" />,
      title: "Bio-Compatible Synaptic Mesh",
      desc: "Our carbon nano-meshes wrap gently around biological neural structures, preserving cellular longevity while scaling electric impulse transmission tenfold.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-neon-purple" />,
      title: "Cognitive Integrity Preservation",
      desc: "We strictly preserve individual human emotions, creative thought matrix, and subjective traits, avoiding forced conformity of standard mechanical grids.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-neon-cyan" />,
      title: "Transcendental Processing Speed",
      desc: "By combining organic brains with distributed sub-quantum microchips, users compute compound contingencies instantly and access memory states flawlessly.",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#020408]/20 overflow-hidden z-10">
      {/* Absolute visual anchors */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[0%] w-[30rem] h-[30rem] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[30%] left-[0%] w-[35rem] h-[35rem] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: About Brand Details */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-mono text-xs text-neon-purple mb-3 tracking-widest uppercase"
            >
              // SYSTEM PROTOCOL PHILOSOPHY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6 leading-tight"
            >
              Fusing Biological Logic with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">Machine Power</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-poppins"
            >
              For decades, science viewed humans and computers as distinct entities. We shattered that partition. Our decentralized technology merges electrical synapses with highly structured silicon quantum pathways, augmenting memory retention, physical stamina, and cognitive accuracy beyond standard human records.
            </motion.p>

            {/* Core Values Bullets Block */}
            <div className="space-y-6">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2 bg-white/5 border border-white/10 rounded-none shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-orbitron text-sm font-bold text-white mb-1">
                      {val.title}
                    </h4>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-poppins">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Picture Reveal Section */}
          <div className="lg:col-span-6 relative w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Aesthetic glowing rings and HUD labels */}
              <div className="absolute -inset-2 border border-white/5 rounded-3xl animate-pulse pointer-events-none"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-neon-purple/10 to-neon-blue/10 rounded-3xl opacity-30 blur-sm"></div>

              {/* Picture Shell */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                
                {/* Moving Scanline filter */}
                <div className="moving-scanline pointer-events-none"></div>

                <img
                  src={cyberCoreImg}
                  alt="High Tech Cyber Neural Fusion Core"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80"></div>

                {/* Floating Micro Blueprint Information HUD Overlay */}
                <div className="absolute top-4 left-4 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-none font-mono text-[9px] text-[#00f3ff]">
                  STAGE: ACTIVE_STABLE
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/70 backdrop-blur-md p-4 border border-white/10 rounded-none text-left font-mono text-[9px]">
                  <div className="text-white font-orbitron font-bold text-xs uppercase mb-1.5 flex justify-between">
                    <span>// DECENTRALIZED_NODE_06</span>
                    <span className="text-neon-purple font-mono font-bold text-[9px]">06LNK</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-neutral-400">
                    <div>TEMP STATUS: <span className="text-[#00f3ff]">38.2°C</span></div>
                    <div>SYNC LOCK: <span className="text-green-400">99.8%</span></div>
                    <div>GRID MATRIX: <span className="text-white">ON_DEFI</span></div>
                    <div>CELL RATIO: <span className="text-white">SYNTH_4:1</span></div>
                  </div>
                </div>
              </div>

              {/* Decorative Sci-Fi corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-purple"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-cyan"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-blue"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-magenta"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
