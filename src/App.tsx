/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#020408] min-h-screen text-slate-100 flex flex-col font-poppins relative overflow-x-hidden selection:bg-neon-blue/30 selection:text-neon-cyan">
      {/* Background Animated-style Elements (Static) from Frosted Glass theme */}
      <div className="absolute top-[5%] right-[-100px] w-[600px] h-[600px] bg-[#9d00ff] rounded-full blur-[160px] opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[-100px] w-[600px] h-[600px] bg-[#00f3ff] rounded-full blur-[160px] opacity-15 pointer-events-none"></div>
      <div className="absolute inset-0 radial-dots opacity-70 pointer-events-none"></div>

      {/* Decorative HUD Sidebars from the theme */}
      <div className="fixed left-2 top-1/2 -translate-y-1/2 flex flex-col space-y-4 opacity-25 z-40 hidden lg:flex pointer-events-none">
        <div className="w-[1px] h-22 bg-white"></div>
        <div className="w-[1px] h-12 bg-[#00f3ff]"></div>
        <div className="w-[1px] h-44 bg-white"></div>
      </div>
      <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col space-y-4 opacity-25 z-40 hidden lg:flex pointer-events-none">
        <div className="w-[1px] h-44 bg-white"></div>
        <div className="w-[1px] h-12 bg-[#9d00ff]"></div>
        <div className="w-[1px] h-22 bg-white"></div>
      </div>

      {/* Main Structural Navbar */}
      <Navbar />

      {/* Combined Single Page Layout Blocks */}
      <main className="flex-1 w-full relative flex flex-col">
        <Hero />
        <Features />
        <Technology />
        <About />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Credentials Info */}
      <Footer />
    </div>
  );
}
