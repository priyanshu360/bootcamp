import { useEffect, useRef, useState } from 'react';
import { Code2, FileDown, Mail } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const characters = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0fa';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 40);
    return () => clearInterval(interval);
  }, []); return (
    <>
      <footer className="relative bg-slate-900 pt-20 pb-10 border-t border-slate-800 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-20 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="text-cyan-400 w-8 h-8" />
                <span className="font-mono text-2xl font-bold tracking-tight">
                  <span className="text-cyan-400">DSA</span>
                  <span className="text-fuchsia-400">Bootcamp</span>
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 font-mono">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'FAQs', 'Terms & Conditions', 'Privacy Policy'].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group flex items-center font-mono"
                    >
                      <span className="text-fuchsia-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">$</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 font-mono">Next Batch Info</h3>
              <ul className="space-y-4 font-mono">
                <li className="text-cyan-400">🚀 Starts June 2nd</li>
                <li className="text-gray-400">⏳ 4 Weeks</li>
                <li className="text-gray-400">📚 3 Classes/Week</li>
                <li className="text-gray-400">⌚ 2 Hours/Class</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 font-mono">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setShowRegistration(true)}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Register Now
                </button>              <button className="w-full border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 font-bold py-2 px-4 rounded transition-all duration-300 flex items-center justify-center gap-2 font-mono">
                  <FileDown className="w-4 h-4" />
                  Syllabus PDF
                </button>
                <div className="flex items-center gap-2 text-gray-400 font-mono">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:code@bootcamp.dev" className="hover:text-cyan-400 transition-colors duration-300">
                    code@bootcamp.dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-mono mb-4 md:mb-0">
              © 2025 DSABootcamp Inc. | Made with 💻 & ☕ by geeks, for geeks.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 font-mono">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 font-mono">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <RegistrationForm
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </>
  );
};

export default Footer;
