import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MinusSquare, Maximize2, X } from 'lucide-react';


const testimonials = [
  {
    name: "Riya Mehta",
    role: "B.Tech CSE, 2nd Year - VIT Vellore",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I joined the bootcamp during my summer break after 1st year, and it completely changed my approach to coding. By 2nd year, I was already solving DSA problems on LeetCode and contributing to college hackathons.",
    company: "vit.ac.in"
  },
  {
    name: "Sneha Reddy",
    role: "MCA 1st Year - Osmania University",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "This bootcamp helped me bridge the gap between theory and actual coding. I used to struggle with recursion and STL, but the live sessions and assignments made them clear. It's been a game-changer in my MCA journey.",
    company: "osmania.ac.in"
  },
  {
    name: "Raghav Nair",
    role: "B.Tech IT, Final Year - SRM Institute of Science and Technology",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I took this bootcamp before my placement season. The mock interviews, resume guidance, and DSA practice helped me land multiple shortlists. I wish I had done this earlier during my 2nd year.",
    company: "srmist.edu.in"
  }
];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maximized, setMaximized] = useState(false);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-4 relative" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-fuchsia-400">&lt;</span>
            TESTIMONIALS
            <span className="text-fuchsia-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real developers who leveled up their careers through our bootcamp
          </p>
        </div>

        <div className={`relative mx-auto transition-all duration-300 ${maximized ? 'max-w-4xl' : 'max-w-2xl'
          }`}>
          {/* Retro computer window */}
          <div className="bg-slate-800 border-2 border-slate-600 rounded-lg overflow-hidden shadow-xl">
            {/* Window title bar */}
            <div className="bg-slate-700 px-4 py-2 flex justify-between items-center border-b border-slate-600">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-300 font-mono text-sm ml-2">
                  ./testimonials/user_{activeIndex + 1}.sh
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setMaximized(!maximized)}
                  className="text-gray-400 hover:text-white"
                >
                  {maximized ? <MinusSquare className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button className="text-gray-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Window content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-fuchsia-500 flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline mb-1">
                    <h3 className="text-xl font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h3>
                    <span className="ml-3 text-cyan-400 font-mono text-xs">
                      @{testimonials[activeIndex].company}
                    </span>
                  </div>
                  <p className="text-fuchsia-400 font-mono text-sm mb-3">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-gray-300">
                    {testimonials[activeIndex].text}
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-600 my-6"></div>

              {/* Terminal-like info */}
              <div className="font-mono text-xs text-gray-400">
                <div className="mb-1">
                  <span className="text-green-400">user@cybercode</span>:<span className="text-blue-400">~</span>$ cat success_story.md
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400">[STATUS]</span>
                  <span className="ml-2">Career transformation complete. New abilities unlocked.</span>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="bg-slate-700 px-4 py-3 flex justify-between border-t border-slate-600">
              <button
                onClick={goToPrev}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="font-mono text-sm">Previous</span>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-cyan-400' : 'bg-gray-500'
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <span className="font-mono text-sm">Next</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
