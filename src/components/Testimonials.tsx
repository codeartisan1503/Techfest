import { useState, useEffect } from "react";
import { Testimonial } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Binary } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list: Testimonial[] = [
    {
      id: "test-1",
      name: "Dr. Alexis Vance",
      role: "Lead Xenobiologist",
      avatarSeed: "alexis-vance-robot",
      quote: "The direct synaptic sensory stream has scaled my molecular mapping by over 400%. Complex chemical compounds are compiled directly inside my subconscious neural-link instantly. I don't think I can ever compute on old flat glass screens again.",
      neuralSync: "99.92%",
    },
    {
      id: "test-2",
      name: "Jax Thome",
      role: "Apex Mech Racer",
      avatarSeed: "jax-thome-cyborg",
      quote: "Myoelectric control over my carbon-fiber sports arm feels faster and more precise than my biological limb ever was. My reaction threshold decreased from 0.15s to less than 0.02s. Absolutely stellar calibration!",
      neuralSync: "99.85%",
    },
    {
      id: "test-3",
      name: "Sola Chen",
      role: "Senior Quantum Architect",
      avatarSeed: "sola-chen-circuit",
      quote: "Setting complex security scripts on cognitive automation has completely insulated me from digital burnout. It is like having an offline quantum firewall watching my dream cycles, preventing any malicious intrusion effortlessly.",
      neuralSync: "99.97%",
    },
  ];

  // Auto sliding carousel loop
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // rotates every 7 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const activeTest = list[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 bg-[#020408]/20 overflow-hidden z-10 border-t border-white/10">
      {/* Background patterns */}
      <div className="absolute inset-0 cyber-grid-blue opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-neon-blue mb-3 tracking-widest uppercase"
          >
            // VERIFIED SYNAPSE FEEDBACK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-extrabold text-3xl text-white tracking-tight"
          >
            Voices of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Augmented</span>
          </motion.h2>
        </div>

        {/* Carousel Slide Wrapper */}
        <div className="relative min-h-[360px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-none p-8 md:p-12 text-left relative overflow-hidden"
            >
              {/* Massive ambient decorative quotes */}
              <Quote className="absolute right-8 top-8 w-16 h-16 text-white/5 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                {/* Custom Avatar Container */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-neon-blue/20 rounded-2xl blur-md"></div>
                  <div className="relative w-20 h-20 rounded-none border border-white/10 bg-[#020408]/95 flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/bottts/svg?seed=${activeTest.avatarSeed}&backgroundColor=020408`}
                      alt={activeTest.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Sync status node badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#00f3ff] text-black font-mono text-[8px] font-bold px-2 py-0.5 rounded-none border border-white/10 shadow-md">
                    {activeTest.neuralSync} SYNC
                  </div>
                </div>

                {/* Feedback Body */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-poppins mb-6">
                    "{activeTest.quote}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-orbitron font-extrabold text-base text-white tracking-wide">
                        {activeTest.name}
                      </h4>
                      <p className="font-mono text-[10px] text-neon-cyan uppercase tracking-widest mt-0.5">
                        {activeTest.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-center sm:self-auto bg-white/5 border border-white/10 px-3 py-1.5 rounded-none text-[9px] font-mono text-neon-purple">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>OFFLINE SYNC SECURE // TYPE_S</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Borders */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Slides Triggers Buttons */}
        <div className="flex justify-between items-center max-w-xs mx-auto mt-8">
          <button
            onClick={handlePrev}
            className="p-2.5 border border-white/10 bg-white/5 text-slate-400 hover:text-neon-blue hover:bg-white/10 rounded-none active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Previous Testimonial Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicators Indicators */}
          <div className="flex gap-2.5">
            {list.map((test, idx) => (
              <button
                key={test.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 transition-all duration-300 cursor-pointer rounded-none ${
                  currentIndex === idx ? "w-8 bg-[#00f3ff] shadow-[0_0_8px_rgba(0,243,255,0.4)]" : "w-2.5 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 border border-white/10 bg-white/5 text-slate-400 hover:text-neon-purple hover:bg-white/10 rounded-none active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Next Testimonial Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
