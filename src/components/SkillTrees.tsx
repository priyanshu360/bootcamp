import React, { useState } from 'react';
import { BookOpen, Code2, Brain, Trophy } from 'lucide-react';

const tracks = [
  {
    id: 'basics',
    name: 'C++ Fundamentals',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'cyan',
    skills: [
      { name: 'Variables & Data Types', level: 3, description: 'Master basic C++ syntax and data types' },
      { name: 'Control Flow', level: 3, description: 'Learn loops, conditions, and program flow' },
      { name: 'Functions', level: 3, description: 'Create reusable code with functions' },
      { name: 'Arrays & Strings', level: 2, description: 'Work with collections of data' },
      { name: 'Object-Oriented Basics', level: 2, description: 'Introduction to classes and objects' },
    ]
  },
  {
    id: 'dsa',
    name: 'Data Structures',
    icon: <Code2 className="w-6 h-6" />,
    color: 'fuchsia',
    skills: [
      { name: 'Arrays & Vectors', level: 3, description: 'Dynamic arrays and vector operations' },
      { name: 'Linked Lists', level: 3, description: 'Create and manipulate linked data' },
      { name: 'Stacks & Queues', level: 2, description: 'LIFO and FIFO data structures' },
      { name: 'Trees & Graphs', level: 2, description: 'Hierarchical data organization' },
      { name: 'Hash Tables', level: 1, description: 'Efficient data lookup and storage' },
    ]
  },
  {
    id: 'algorithms',
    name: 'Algorithms',
    icon: <Brain className="w-6 h-6" />,
    color: 'green',
    skills: [
      { name: 'Searching', level: 2, description: 'Linear and binary search techniques' },
      { name: 'Sorting', level: 2, description: 'Basic and advanced sorting algorithms' },
      { name: 'Recursion', level: 2, description: 'Solve problems using recursive approach' },
      { name: 'Time Complexity', level: 2, description: 'Analyze algorithm efficiency' },
      { name: 'Problem Solving', level: 2, description: 'Apply DSA to solve real problems' },
    ]
  }
];

const SkillTrees = () => {
  const [activeTrack, setActiveTrack] = useState(tracks[0]);

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/20 to-slate-900/90 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-fuchsia-400">&lt;</span>
            WHAT YOU'LL LEARN
            <span className="text-fuchsia-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master essential programming concepts and problem-solving skills
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${activeTrack.id === track.id
                ? `bg-${track.color}-500/20 border-${track.color}-500 text-${track.color}-400`
                : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-gray-500'
                }`}
            >
              {track.icon}
              <span>{track.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className={`text-2xl font-bold mb-6 text-${activeTrack.color}-400`}>
              {activeTrack.name}
            </h3>
            <p className="text-gray-300 mb-4">
              Essential skills for every aspiring programmer
            </p>
            <div className="space-y-1 mb-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-fuchsia-400" />
                <span className="text-gray-400">Step-by-step learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-400">Hands-on practice</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Real-world examples</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Core Skills</h3>
            <div className="space-y-6">
              {activeTrack.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{skill.name}</h4>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-sm ml-1 ${i < skill.level
                            ? `bg-${activeTrack.color}-500`
                            : 'bg-slate-700'
                            }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                  <div className={`mt-2 w-full h-1 bg-slate-700 overflow-hidden rounded-full`}>
                    <div
                      className={`h-full bg-${activeTrack.color}-500`}
                      style={{ width: `${(skill.level / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTrees;
