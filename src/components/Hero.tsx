import { ArrowUpRight, Cpu, Zap, Activity, MessageSquareDot } from "lucide-react";
import { motion } from "motion/react";
import cyborgHeroImg from "../assets/images/cyborg_hero_1781768147370.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Absolute background cyber grid & neon circles */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 scanlines opacity-5 pb-10 pointer-events-none"></div>

      {/* Cyber gradient ambient lights */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-neon-blue/8 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Moving background cyber grid scanline */}
      <div className="moving-scanline pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Interactive Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Diagnostic Operational Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#00f3ff] uppercase">
              STATUS // MULTIVERSE_LINK_STABLE
            </span>
          </motion.div>

          {/* Futuristic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-orbitron font-medium tracking-tight text-neutral-400 text-sm block mb-1">
              // EVOLUTION STAGE_04
            </span>
            <h1 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-7xl text-white leading-none tracking-tighter mb-6">
              The Future is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple drop-shadow-[0_2px_15px_rgba(0,240,255,0.2)]">
                Human + Machine
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-poppins"
          >
            Unlock biometric transcendence. Synchronize neural synapsis with elite cybernetic engineering, machine-cognitive automation, and real-time quantum speed constructs. We engineer the fusion of biology and technology.
          </motion.p>

          {/* Call-to-action actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#technology"
              className="group font-orbitron font-bold text-xs tracking-widest text-black bg-[#00f3ff] px-8 py-4 rounded-none flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] active:scale-98 transition-all duration-350"
            >
              <span>EXPLORE TECHNOLOGY</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="font-orbitron font-bold text-xs tracking-widest text-white border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-none flex items-center justify-center gap-2 hover:border-[#9d00ff]/50 transition-all duration-350"
            >
              <Cpu className="w-4 h-4 text-neon-purple" />
              <span>SYNCHRONIZE NOW</span>
            </a>
          </motion.div>

          {/* Bio telemetry metrics inside Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-6 w-full text-left"
          >
            <div className="flex items-center gap-3">
              <div className="text-neon-blue p-2 bg-white/5 border border-white/10">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-neutral-400">BIOMETRIC SYNC</div>
                <div className="font-orbitron text-sm font-semibold text-white">99.88% COMPLETE</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-neon-purple p-2 bg-white/5 border border-white/10">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-neutral-400">NEURAL BANDWIDTH</div>
                <div className="font-orbitron text-sm font-semibold text-white">12.5 TB/SEC</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-neon-cyan p-2 bg-white/5 border border-white/10 font-sans">
                <MessageSquareDot className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <div className="font-mono text-xs text-neutral-400">COGNITION LEVEL</div>
                <div className="font-orbitron text-sm font-semibold text-white">GEN-V BIO_HYBRID</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Cyborg Illustration Column */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md aspect-square"
          >
            {/* Aesthetic geometric neon frame rings */}
            <div className="absolute -inset-4 border border-white/5 rounded-2xl pointer-events-none"></div>
            <div className="absolute -inset-2 border border-white/10 rounded-2xl pointer-events-none animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/30 via-transparent to-neon-purple/30 rounded-2xl opacity-30 blur-sm"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
              <img
                src={cyborgHeroImg}
                alt="Cybernetic Cyborg AI Humanoid"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Futuristic Glitch overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-85"></div>
              <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-[2px] transition-all pointer-events-none"></div>

              {/* Tactical Sci-Fi Telemetry Panel HUD */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/60 border border-white/10 backdrop-blur-md rounded-xl p-4 font-mono text-[10px] text-slate-300">
                <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                  <span className="text-neon-cyan font-bold tracking-widest">// COGNITIVE_ANALYSIS</span>
                  <span className="text-xs text-neutral-500 font-bold font-sans">SYS_04</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-2.5">
                  <div>HOLO STATE: <span className="text-green-400">STABLE</span></div>
                  <div>CPU FREQ: <span className="text-white">5.8 GHZ</span></div>
                  <div>BIO-LOAD: <span className="text-neon-purple font-bold">14.2%</span></div>
                  <div>MUTATOR: <span className="text-neon-cyan font-bold">ENABLED</span></div>
                </div>
                {/* Horizontal status line with motion simulation inside static code */}
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full animate-pulse w-[84%]"></div>
                </div>
              </div>

              {/* Floating diagnostic lines */}
              <div className="absolute top-4 left-4 bg-white/5 border border-white/10 backdrop-blur-md text-neon-blue text-[9px] font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                TARGET_ID: CY_8889_X
              </div>

              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 backdrop-blur-md text-neon-purple text-[9px] font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                REV: 04.992
              </div>
            </div>

            {/* Glowing corner brackets indicating HUD UI */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-blue"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-purple"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-magenta"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
