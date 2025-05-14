import React from 'react';
import { BookOpen, Users, Code2, Trophy, Brain, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      title: "Structured Learning Path",
      description: "Progressive curriculum from basics to advanced DSA concepts"
    },
    {
      icon: <Users className="w-8 h-8 text-fuchsia-400" />,
      title: "Small Batch Size",
      description: "Limited seats ensure personalized attention and better learning"
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: "Live Coding Sessions",
      description: "Learn by doing with interactive problem-solving sessions"
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "1:1 Doubt Solving",
      description: "Dedicated mentors to clear your concepts and queries"
    },
    {
      icon: <Trophy className="w-8 h-8 text-fuchsia-400" />,
      title: "Mock Interviews",
      description: "Practice technical interviews with industry experts"
    },
    {
      icon: <Star className="w-8 h-8 text-green-400" />,
      title: "Completion Certificate",
      description: "Get certified and showcase your DSA expertise"
    }
  ];

  return (
    <section className="py-24 px-4 relative" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">&lt;</span> 
            WHY CHOOSE US 
            <span className="text-green-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Accelerate your learning with our unique features and support system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;