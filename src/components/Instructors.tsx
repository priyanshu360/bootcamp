import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Code2, Trophy, Star } from 'lucide-react';

const instructors = [
  // {
  //   name: "Rajesh Kumar",
  //   title: "Lead DSA Instructor",
  //   specialty: "Dynamic Programming Expert",
  //   bio: "Ex-Google SDE with 6+ years of experience. Solved 1000+ DSA problems on LeetCode. Passionate about teaching algorithmic thinking.",
  //   image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   stats: {
  //     exp: 6,
  //     problems: 1000,
  //     students: 500
  //   },
  //   achievements: "Specialist @Codeforces | 6⭐ @CodeChef",
  //   social: {
  //     github: "github.com/rajeshkumar",
  //     twitter: "twitter.com/rajeshkumar",
  //     linkedin: "linkedin.com/in/rajeshkumar"
  //   }
  // },
  // {
  //   name: "Priya Sharma",
  //   title: "C++ & STL Expert",
  //   specialty: "Competitive Programming",
  //   bio: "ICPC World Finalist. Conducted 100+ workshops on C++ and DSA. Known for breaking down complex concepts into simple explanations.",
  //   image: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   stats: {
  //     exp: 5,
  //     problems: 800,
  //     students: 400
  //   },
  //   achievements: "Expert @Codeforces | 5⭐ @CodeChef",
  //   social: {
  //     github: "github.com/priyasharma",
  //     twitter: "twitter.com/priyasharma",
  //     linkedin: "linkedin.com/in/priyasharma"
  //   }
  // },
  {
    name: "Amit Patel",
    title: "Algorithms Specialist",
    specialty: "Graph Algorithms & Trees",
    bio: "Microsoft SDE with deep expertise in graph algorithms. Author of 'DSA Made Easy' blog series. Mentored 300+ students in competitive programming.",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600",
    stats: {
      exp: 4,
      problems: 750,
      students: 300
    },
    achievements: "Master @Codeforces | 6⭐ @CodeChef",
    social: {
      github: "github.com/amitpatel",
      twitter: "twitter.com/amitpatel",
      linkedin: "linkedin.com/in/amitpatel"
    }
  },
  {
    name: "Neha Gupta",
    title: "Interview Prep Expert",
    specialty: "Problem Solving Strategies",
    bio: "Ex-Amazon SDE. Helped 200+ students crack top tech interviews. Known for teaching systematic problem-solving approaches.",
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
    stats: {
      exp: 5,
      problems: 900,
      students: 200
    },
    achievements: "Expert @Codeforces | 5⭐ @CodeChef",
    social: {
      github: "github.com/nehagupta",
      twitter: "twitter.com/nehagupta",
      linkedin: "linkedin.com/in/nehagupta"
    }
  }
];

const Instructors = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative" id="instructors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">&lt;</span>
            MEET YOUR MENTORS
            <span className="text-green-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from competitive programmers and industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="relative perspective-1000"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative transition-all duration-500 transform-style-3d ${activeCard === index ? 'rotate-y-180' : ''
                }`}>
                {/* Card Front */}
                <div className={`bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg backface-hidden ${activeCard === index ? 'invisible' : 'visible'
                  }`}>
                  <div className="h-72 bg-slate-700 relative overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>

                    {/* Cyberpunk card frame */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-400"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-fuchsia-400"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400"></div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{instructor.title}</p>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-fuchsia-400 font-mono text-sm mb-2">
                      {instructor.achievements}
                    </p>
                    <p className="text-gray-400 text-sm h-20 overflow-hidden">
                      {instructor.bio}
                    </p>
                    <div className="text-xs font-mono text-gray-500 mt-3">Click to view stats</div>
                  </div>
                </div>

                {/* Card Back */}
                <div className={`absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl p-6 backface-hidden rotate-y-180 ${activeCard === index ? 'visible' : 'invisible'
                  }`}>
                  <h3 className="text-xl font-bold text-white mb-4">{instructor.name}</h3>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-slate-700 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-cyan-400">{instructor.stats.exp}+</p>
                      <p className="text-xs text-gray-400">Years Exp</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-fuchsia-400">{instructor.stats.problems}+</p>
                      <p className="text-xs text-gray-400">Problems</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-400">{instructor.stats.students}+</p>
                      <p className="text-xs text-gray-400">Students</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{instructor.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-fuchsia-400" />
                      <span className="text-gray-300">{instructor.achievements}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Active Mentor</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs text-gray-400 mb-2">Connect with {instructor.name.split(' ')[0]}:</p>
                    <div className="flex space-x-3">
                      <a href={`https://${instructor.social.github}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={`https://${instructor.social.twitter}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={`https://${instructor.social.linkedin}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
