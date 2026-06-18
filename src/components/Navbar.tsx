import { useState, useEffect } from "react";
import { Cpu, Menu, X, ShieldAlert, Radio } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPos = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          const height = (element as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.name.toLowerCase());
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020408]/40 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Futuristic Logo Tag */}
        <a href="#home" className="flex items-center gap-3 group relative">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-blue rounded-lg blur opacity-40 group-hover:opacity-70 transition-opacity duration-350"></div>
            {/* 45-degree rotated box template from Frosted Glass */}
            <div className="w-9 h-9 bg-gradient-to-br from-[#00f3ff] to-[#9d00ff] rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <div className="w-5.5 h-5.5 bg-[#020408] rounded-sm transform -rotate-45 flex items-center justify-center text-neon-blue">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="ml-1">
            <span className="font-orbitron font-extrabold tracking-widest text-[#ffffff] text-xl group-hover:text-neon-cyan duration-300">
              SYNTH<span className="text-neon-purple text-shadow">.AI</span>
            </span>
            <div className="flex items-center gap-1.5 text-[8px] font-mono tracking-widest text-slate-400">
              <Radio className="w-2 h-2 text-neon-blue animate-ping" />
              <span>CORE_V1.8_ENG</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Link Loops */}
        <nav className="hidden md:flex items-center gap-1.5">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-1.5 flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-orbitron text-xs font-semibold tracking-wider relative py-1 transition-colors duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-[#00f3ff]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.name.toLowerCase() && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 border border-[#00f3ff] text-[#00f3ff] text-[10px] font-bold uppercase tracking-widest hover:bg-[#00f3ff]/10 bg-transparent rounded-none transition-all duration-300"
          >
            CONNECT TERMINAL
          </a>
        </div>

        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border border-white/10 bg-white/5 p-2 rounded-lg text-slate-300 hover:text-neon-blue hover:border-neon-blue duration-300 transition-colors"
          aria-label="Toggle Navigation UI Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#020408]/95 border-b border-white/10 z-40 backdrop-blur-xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-orbitron text-lg font-bold tracking-wider py-2 border-b border-white/5 flex justify-between items-center ${
                    activeSection === link.name.toLowerCase()
                      ? "text-neon-blue"
                      : "text-slate-300 hover:text-neon-purple"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] font-mono text-neutral-600">
                    // 0{navLinks.indexOf(link) + 1}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="font-orbitron font-bold text-center text-black bg-[#00f3ff] py-3.5 rounded-none text-sm hover:opacity-90 transition-opacity duration-350"
              >
                CONNECT TO TERMINAL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
