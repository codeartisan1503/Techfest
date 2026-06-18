import React, { useState } from "react";
import { Send, Sparkles, AlertCircle, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    neuralId: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState<"idle" | "mapping" | "securing" | "success">("idle");
  const [generatedIdSuccess, setGeneratedIdSuccess] = useState(false);

  // Generate a procedural Cyber Neural ID
  const generateNeuralId = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    const alpha = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    const mockId = `CY-${num}-${alpha}`;
    
    setFormData((prev) => ({ ...prev, neuralId: mockId }));
    setFormErrors((prev) => ({ ...prev, neuralId: "" }));
    setGeneratedIdSuccess(true);
    setTimeout(() => setGeneratedIdSuccess(false), 2000);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        return value.trim().length < 3 ? "Biometric label must be at least 3 characters." : "";
      case "email": {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !regex.test(value) ? "Invalid global node destination address (Email)." : "";
      }
      case "message":
        return value.trim().length < 10 ? "Encryption packet (Message) must be at least 10 characters." : "";
      case "neuralId":
        if (value.trim() && !/^CY-\d{4}-[A-Z]$/.test(value.trim().toUpperCase())) {
          return "Neural ID must match CY-[digits 4]-[alpha 1] protocol format (e.g., CY-8092-A).";
        }
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation loop
    const errors: Partial<ContactFormData> = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key as keyof ContactFormData]);
      if (err) errors[key as keyof ContactFormData] = err;
    });

    if (Object.keys(errors).some((k) => errors[k as keyof ContactFormData])) {
      setFormErrors(errors);
      return;
    }

    // Step-by-step submitting simulation
    setIsSubmitting(true);
    setSubmitStep("mapping");

    setTimeout(() => {
      setSubmitStep("securing");
      setTimeout(() => {
        setSubmitStep("success");
        setIsSubmitting(false);
        // Clear Form inputs
        setFormData({
          fullName: "",
          neuralId: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#020408]/20 overflow-hidden z-10 border-t border-white/10">
      {/* Background neon grid lines */}
      <div className="absolute inset-0 cyber-grid-blue opacity-20 pointer-events-none"></div>
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-neon-blue mb-3 tracking-widest uppercase"
          >
            // DIGITAL TRANSMISSION PORTAL
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6"
          >
            Transmit Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple text-shadow">Coordinates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            Connect with our engineering divisions. Dispatch encryption packets to configure your upcoming cybernetic augmentations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto text-left">
          {/* Left: Terminal Console Logs panel info */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-md font-mono text-[11px] text-slate-300 rounded-none">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4 text-neon-blue">
                <Cpu className="w-4 h-4 animate-spin" />
                <span className="font-bold tracking-widest">// COGNITIVE_LOCATIONS</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-neutral-500">// LATENCY_ORIGIN</div>
                  <div className="text-white text-xs mt-0.5">Silicon District // Sector 07</div>
                  <div className="text-[10px] text-neutral-600">Grid Coordinates: 37.7749° N, 122.4194° W</div>
                </div>

                <div>
                  <div className="text-neutral-500">// PUBLIC_DECRYPT_KEY</div>
                  <div className="text-neutral-400 break-all text-[10px] bg-black/60 p-2 rounded-none border border-white/5 font-mono mt-0.5">
                    0x8892_FBEE_332A_DEE7_992C_00A1_9F2E
                  </div>
                </div>

                <div>
                  <div className="text-neutral-500">// SUPPORT_HOLO_NODE</div>
                  <div className="text-[#00f3ff] mt-0.5 font-semibold">telecoms@synth_core.internal</div>
                  <div className="text-[10px] text-neutral-600">Frequency Range: 142.80 MHz</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-8 space-y-2 text-neutral-500 text-[10px]">
              <div className="flex items-center gap-1.5 text-green-500 font-bold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span>SECURE TRACE COMPLETED</span>
              </div>
              <div>FIREWALL: RESIST_V12_OK</div>
            </div>
          </div>

          {/* Right: Stylish Reactive Form */}
          <div className="lg:col-span-8 p-6 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col justify-between rounded-none">
            {/* Absolute decor grid */}
            <div className="absolute inset-0 cyber-grid-blue opacity-5 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-[10px] font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                    Biometric Label *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rachel Tyrell"
                    className={`w-full bg-black/50 border px-4 py-3 font-poppins text-sm text-white focus:outline-none focus:ring-1 transition-all duration-300 rounded-none ${
                      formErrors.fullName
                        ? "border-[#ff0055] focus:ring-[#ff0055] focus:border-[#ff0055]"
                        : "border-white/10 focus:border-neon-blue focus:ring-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.15)]"
                    }`}
                    required
                  />
                  {formErrors.fullName && (
                    <div className="flex items-center gap-1 text-[11px] text-[#ff0055] font-mono mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Neural ID Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="neuralId" className="block text-[10px] font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                      Neural ID (Optional)
                    </label>
                    <button
                      type="button"
                      onClick={generateNeuralId}
                      className="text-[9px] font-mono text-[#00f3ff] hover:text-neon-purple transition-colors duration-300 flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      {generatedIdSuccess ? "GENERATING..." : "GEN ALLOCATOR"}
                    </button>
                  </div>
                  <input
                    type="text"
                    id="neuralId"
                    name="neuralId"
                    value={formData.neuralId}
                    onChange={handleInputChange}
                    placeholder="CY-XXXX-X"
                    className={`w-full bg-black/50 border px-4 py-3 font-mono text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all duration-300 rounded-none ${
                      formErrors.neuralId
                        ? "border-[#ff0055] focus:ring-[#ff0055] focus:border-[#ff0055]"
                        : "border-white/10 focus:border-neon-purple focus:ring-neon-purple focus:shadow-[0_0_12px_rgba(189,0,255,0.15)]"
                    }`}
                  />
                  {formErrors.neuralId && (
                    <div className="flex items-center gap-1 text-[11px] text-[#ff0055] font-mono mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.neuralId}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email destinations address link */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-[10px] font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                  Global Link Address (Email) *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@destination.com"
                  className={`w-full bg-black/50 border px-4 py-3 font-poppins text-sm text-white focus:outline-none focus:ring-1 transition-all duration-300 rounded-none ${
                    formErrors.email
                      ? "border-[#ff0055] focus:ring-[#ff0055] focus:border-[#ff0055]"
                      : "border-white/10 focus:border-neon-blue focus:ring-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.15)]"
                  }`}
                  required
                />
                {formErrors.email && (
                  <div className="flex items-center gap-1 text-[11px] text-[#ff0055] font-mono mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{formErrors.email}</span>
                  </div>
                )}
              </div>

              {/* Message subjects */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-[10px] font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                  Data Subject Link *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Augmentation Consultation, Bio-Sync Quote"
                  className="w-full bg-black/50 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.15)] px-4 py-3 font-poppins text-sm text-white focus:outline-none transition-all duration-300 rounded-none"
                  required
                />
              </div>

              {/* Messages Text block area */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-[10px] font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                  Encryption Message Packet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail your bio-mechanical augmentation configurations..."
                  className={`w-full bg-black/50 border px-4 py-3 font-poppins text-sm text-white focus:outline-none focus:ring-1 transition-all duration-300 rounded-none ${
                    formErrors.message
                      ? "border-[#ff0055] focus:ring-[#ff0055] focus:border-[#ff0055]"
                      : "border-white/10 focus:border-neon-purple focus:ring-neon-purple focus:shadow-[0_0_12px_rgba(189,0,255,0.15)]"
                  }`}
                  required
                ></textarea>
                {formErrors.message && (
                  <div className="flex items-center gap-1 text-[11px] text-[#ff0055] font-mono mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{formErrors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit triggers actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStep === "success"}
                  className={`w-full font-orbitron font-bold tracking-widest px-8 py-4 rounded-none flex items-center justify-center gap-3 transition-all duration-500 cursor-pointer ${
                    submitStep === "success"
                      ? "bg-green-500 text-black shadow-[0_0_20px_#4ade80]"
                      : isSubmitting
                      ? "bg-black/40 text-[#00f3ff] border border-[#00f3ff]/40 shadow-inner"
                      : "bg-[#00f3ff] text-black font-extrabold hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] active:scale-99"
                  }`}
                >
                  {submitStep === "idle" && (
                    <>
                      <span>TRANSMIT PACKET COORDS</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {submitStep === "mapping" && (
                    <>
                      <Cpu className="w-4 h-4 animate-spin text-neon-blue" />
                      <span className="font-mono text-xs text-neon-blue uppercase tracking-widest">
                        MAPPING BIOMETRIC COORDS...
                      </span>
                    </>
                  )}
                  {submitStep === "securing" && (
                    <>
                      <Cpu className="w-4 h-4 animate-bounce text-neon-purple" />
                      <span className="font-mono text-xs text-neon-purple uppercase tracking-widest">
                        SECURING INTEGRATIONS PATH...
                      </span>
                    </>
                  )}
                  {submitStep === "success" && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span className="uppercase tracking-widest">
                        TRANSMISSION COMPLETED // LINK_ONLINE
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {submitStep === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 border border-green-500/30 bg-green-500/10 text-center font-mono text-[11px] text-green-300 relative z-10 rounded-none animate-pulse"
                >
                  <p className="font-bold flex justify-center items-center gap-1.5 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    Handshake Complete!
                  </p>
                  <p className="mt-1 text-[10px] text-green-400/80">
                    Your parameters have been logged. A regional cybernetic coordinator will launch a diagnostic mental session within 12 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
