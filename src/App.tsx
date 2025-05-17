import React, { useEffect } from 'react';
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
import BackgroundEffects from './components/BackgroundEffects';
import { FaRocket } from 'react-icons/fa';
function App() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX - 16 + 'px';
        cursor.style.top = e.clientY - 16 + 'px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 relative overflow-hidden cursor-none">
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
      
      <div id="custom-cursor" className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen">
        <FaRocket className="w-full h-full text-cyan-400 animate-pulse" />
      </div>

    </div>
  );
}

export default App;