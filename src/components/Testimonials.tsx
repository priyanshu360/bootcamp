import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MinusSquare, Maximize2, Pause, Play } from 'lucide-react';


const testimonials = [
  {
    name: "Arjun Sharma",
    role: "12th Pass (CBSE) - Joining ABES Engineering College, Ghaziabad",
    image: "/1.jpeg",
    text: "I was honestly clueless about coding after 12th boards. Couldn't tell the difference between C++ and HTML! This bootcamp was a lifesaver - they actually made pointers make sense (if you know, you know 😅). Now I'm chilling while my future classmates are panicking about their first programming class.",
    company: "abes.ac.in"
  },
  {
    name: "Shruti Deshmukh",
    role: "12th Pass (CBSE) - Joining College of Engineering, Pune",
    image: "/3.jpeg",
    text: "Coming from a bio background, I was lowkey terrified about engineering coding classes. This bootcamp started so basic (thank goodness!) and the instructors never made me feel stupid for asking 'dumb' questions. I went from 'what's a for-loop?' to implementing my own linked list in C++.",
    company: "coep.org.in"
  },
  {
    name: "Uday Kumar",
    role: "B.Tech CSE, 1st Year - PES University, Bangalore",
    image: "/2.jpeg",
    text: "The weekend sessions were perfect for my packed schedule. My college prof would fly through sorting algorithms in 10 minutes flat, but the bootcamp actually showed WHY they work with visualizations. My favorite part was the Discord group where we'd help each other debug code at midnight before assignments were due!",
    company: "pes.edu"
  },
  {
    name: "Meera Sharma",
    role: "12th Pass (State Board) - Joining SSN College of Engineering, Chennai",
    image: "/4.jpeg",
    text: "I had literally ZERO coding knowledge after 12th. Like, The bootcamp instructors never judged and explained everything step by step. The Hindi explanations alongside English were so helpful! My brother (who's a software engineer) was shocked at how quickly I picked things up.",
    company: "ssn.edu.in"
  },
  {
    name: "Mukul Nambiar",
    role: "12th Pass (CBSE) - Joining Manipal Institute of Technology, Karnataka",
    image: "/5.jpeg",
    text: "Took this during my drop year and honestly it kept me sane. The instructors make learning fun with their random jokes and real-life examples. They explained pointers better than any YouTube video I watched (and trust me, I watched MANY). Now I'm solving medium LeetCode problems!",
    company: "manipal.edu"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maximized, setMaximized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);
  const intervalTime = 5000; // Time between auto-scrolls (5 seconds)

  // Setup auto-scroll
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, intervalTime);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  // Pause auto-scroll when hovering
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    // Reset timer when manually navigating
    if (timerRef.current) {
      clearInterval(timerRef.current);
      if (isPlaying) {
        timerRef.current = setInterval(() => {
          setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, intervalTime);
      }
    }
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    // Reset timer when manually navigating
    if (timerRef.current) {
      clearInterval(timerRef.current);
      if (isPlaying) {
        timerRef.current = setInterval(() => {
          setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, intervalTime);
      }
    }
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
            Students who leveled up their skills through our bootcamp
          </p>
        </div>

        <div
          className={`relative mx-auto transition-all duration-300 ${maximized ? 'max-w-4xl' : 'max-w-2xl'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
                  onClick={togglePlayPause}
                  className="text-gray-400 hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
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

            {/* Navigation controls with progress bar */}
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
                    className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-cyan-400' : 'bg-gray-500'}`}
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

            {/* Auto-scroll progress bar */}
            {isPlaying && (
              <div className="bg-slate-900 h-1 w-full">
                <div
                  className="bg-fuchsia-500 h-full transition-all duration-300"
                  style={{
                    width: '100%',
                    animation: `progressAnimation ${intervalTime}ms linear infinite`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>

        {/* CSS for progress bar animation */}
        <style jsx>{`
          @keyframes progressAnimation {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
