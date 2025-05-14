import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white group"
          >
            <Code className="text-cyan-400 w-6 h-6 group-hover:animate-spin transition-all duration-300" />
            <span className="font-mono tracking-tight">
              <span className="text-cyan-400">Pareeksha</span>
              <span className="text-fuchsia-400">GPT</span>
              <span className="text-fuchsia-400"> DSA-Bootcamp</span>
            </span>
          </a>

          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {['Courses', 'Instructors', 'Testimonials'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium tracking-wide transition-all duration-300 ${index === 4
                  ? 'text-black bg-cyan-400 px-4 py-2 rounded hover:bg-cyan-300 hover:shadow-glow-cyan text-sm'
                  : 'text-gray-300 hover:text-cyan-400 relative group text-sm'
                  }`}
              >
                {index !== 4 && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                )}
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-6 p-4">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {['About', 'Courses', 'Instructors', 'Testimonials', 'Apply Now'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium text-lg tracking-wide transition-all duration-300 ${index === 4
                  ? 'text-black bg-cyan-400 px-6 py-3 rounded-md hover:bg-cyan-300 w-full text-center'
                  : 'text-gray-300 hover:text-cyan-400 w-full text-center'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
