import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillTrees from './components/SkillTrees';
import Features from './components/Features';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Terminal } from 'lucide-react';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Timeline />
        <SkillTrees />
        <Instructors />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      
      <div id="custom-cursor" className="hidden md:block fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen">
        <Terminal className="w-full h-full text-cyan-400 animate-pulse" />
      </div>
    </div>
  );
}

export default App;