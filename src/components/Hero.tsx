
import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Brain, Trophy } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
  const [text, setText] = useState('');
  const finalText = 'CRACK THE CODE: MASTER DSA WITH C++';
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(finalText.substring(0, index));
      index++;

      if (index > finalText.length) {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#3c6a8c_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6 flex-wrap gap-2">
            <Code2 className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8" />
            <p className="font-mono text-sm sm:text-lg text-cyan-400">4-week program | 3 classes/week | 2 hours/class</p>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 tracking-tight text-white px-2">
            <span className="relative">
              {text}
              <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-cyan-400`}>|</span>
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-fuchsia-400 mb-6 px-2">
            Sharpen your algorithms, optimize your logic, and dominate coding rounds
          </div>

          <div className="relative mb-8 max-w-2xl mx-auto px-4">
            <p className="text-base sm:text-xl text-gray-300">
              🗓️ New batch starts June 2nd
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 sm:p-6 hover:border-cyan-500 transition-colors duration-300">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Master algorithmic thinking and optimization techniques</p>
            </div>
            <div className="bg-slate-800/50 border border-fuchsia-500/30 rounded-lg p-4 sm:p-6 hover:border-fuchsia-500 transition-colors duration-300">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-fuchsia-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Certification</h3>
              <p className="text-gray-400 text-sm">Get a certificate of completion to showcase resumes, LinkedIn, and coding profiles.</p>
            </div>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4 sm:p-6 hover:border-green-500 transition-colors duration-300">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Competitive Edge</h3>
              <p className="text-gray-400 text-sm">Get ahead in contests and placements</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 px-4">
            <p className="text-sm text-white-600 mt-4 italic">
              🔔 No payment is required during registration. Our team will contact you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button
                onClick={() => setShowRegistration(true)}
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center justify-center group"
              >
                REGISTER NOW
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="w-full sm:w-auto border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-300">
                VIEW CURRICULUM
              </button>
            </div>
          </div>
        </div>
      </section>
      <RegistrationForm
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </>
  );
};

export default Hero;
