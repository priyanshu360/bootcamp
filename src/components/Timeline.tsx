import { useEffect, useRef } from 'react';
import { Lightbulb, BookOpen, Code2, Brain, Trophy, Rocket } from 'lucide-react';


const timelineData = [
  {
    title: "📘  C++ Fundamentals & Programming Basics",
    description: "Kickstart your coding journey with C++ syntax, I/O, conditionals, loops, and debugging.",
    icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
    weeks: "Week 1"
  },
  {
    title: "🧮  Functions, Arrays & Strings",
    description: "Dive into functions, recursion, arrays, and string manipulation with real-world problems.",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    weeks: "Week 2"
  },
  {
    title: "🔁  Sorting, Searching & 2D Arrays",
    description: "Learn sorting algorithms, binary search, and hands-on practice with 2D arrays.",
    icon: <Brain className="w-6 h-6 text-fuchsia-400" />,
    weeks: "Week 3"
  },
  {
    title: "🚀  Pointers, STL & Final Project",
    description: "Understand pointers, master STL, and wrap up with a guided project and interview prep.",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    weeks: "Week 4"
  },
  {
    title: "🧠  Doubt Clearance & What’s Next",
    description: "Resolve your doubts, strengthen concepts with problem-solving sessions, and explore future learning paths.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    weeks: "Week 5"
  }
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-24 px-4 relative" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            BOOTCAMP ROADMAP
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your journey from basics to advanced DSA concepts
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-green-500 transform md:-translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item opacity-0 flex flex-col md:flex-row gap-8 md:gap-0 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <span className="ml-2 text-sm font-mono text-gray-400">{item.weeks}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center z-10">
                  <Trophy className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
