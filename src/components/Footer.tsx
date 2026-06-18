import { Github, Twitter, Youtube, Linkedin, ShieldAlert, Cpu, ArrowUp, Send, Radio } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-4.5 h-4.5" />, href: "#", name: "GitHub" },
    { icon: <Twitter className="w-4.5 h-4.5" />, href: "#", name: "Twitter" },
    { icon: <Youtube className="w-4.5 h-4.5" />, href: "#", name: "YouTube" },
    { icon: <Linkedin className="w-4.5 h-4.5" />, href: "#", name: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const techStack = ["React 19", "Vite 6", "Tailwind v4", "Motion v12"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent border-t border-white/10 overflow-hidden z-10 pt-20 pb-10">
      {/* Animated cyber grid background inside footer */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] cyber-grid opacity-15 pointer-events-none"></div>
      
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-14 text-left">
          
          {/* Logo & Narrative column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="border border-neon-blue bg-[#020408] p-2 rounded-none text-[#00f3ff]">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-orbitron font-extrabold tracking-widest text-[#ffffff] text-xl">
                  SYNTH<span className="text-neon-purple">.AI</span>
                </span>
                <span className="block font-mono text-[8px] tracking-widest text-slate-500 uppercase mt-0.5">
                  Decentralized Cyborgs Inc.
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-poppins">
              Leading global cognitive and physical augmentation since 2026. Empowering humanity through biometric synchronization with standard digital intelligence.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  className="p-2.5 rounded-none border border-white/10 bg-white/5 text-slate-400 hover:text-neon-cyan hover:bg-white/10 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:scale-105 transition-all duration-300"
                  aria-label={`Visit our ${soc.name} page`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links columns */}
          <div>
            <h4 className="font-orbitron font-extrabold text-xs text-white tracking-widest uppercase mb-6">
              // SYSTEMS LINKS
            </h4>
            <ul className="space-y-3.5 font-poppins text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-neon-blue transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 text-neon-blue font-mono font-bold text-xs transition-all duration-300">
                      &gt;
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Environmental telemetry column */}
          <div>
            <h4 className="font-orbitron font-extrabold text-xs text-white tracking-widest uppercase mb-6">
              // STACK PROTOCOL
            </h4>
            <div className="space-y-4 font-mono text-[11px] text-neutral-400">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1.2 rounded-none bg-white/5 border border-white/10 text-neutral-400 uppercase tracking-wider text-[9px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600">SYS CORE_V:</span>
                  <span className="text-white">1.8.84</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">NET STATUS:</span>
                  <div className="flex items-center gap-1 text-green-400">
                    <Radio className="w-3 h-3 text-green-400 animate-pulse" />
                    <span>SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base bottom Copyright lines */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 font-mono text-[10px] text-neutral-500">
          <div className="text-center sm:text-left space-y-1">
            <div>
              &copy; {new Date().getFullYear()} SYNTH.AI COGNITIVE SYSTEMS. ALL RIGHTS RESERVED.
            </div>
            <div className="text-neutral-600">
              Handcrafted in the Silicon Grid. Powered by human carbon & cybernetic silicon.
            </div>
          </div>

          {/* Back up trigger button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-neon-blue bg-white/5 text-slate-400 hover:text-white rounded-none transition-all duration-300 text-[9px] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] group cursor-pointer"
            aria-label="Scroll Back to Top of Page"
          >
            <span>BACK_TO_CORE</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
