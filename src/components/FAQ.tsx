import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can join this bootcamp?",
      answer: "This bootcamp is perfect for school students (Grades 9-12) and college CS freshers who want to build a strong foundation in DSA with C++. No prior programming experience is required!"
    },
    {
      question: "What is the class schedule?",
      answer: "Classes are held 2 times a week, 2 hours per session. The schedule is designed to accommodate both school/college timings and provides enough time for practice between sessions."
    },
    {
      question: "How will the classes be conducted?",
      answer: "All classes are live and interactive, conducted online. You'll have access to live coding sessions, doubt clearing, and one-on-one mentoring."
    },
    {
      question: "Will I get support after course completion?",
      answer: "Yes, after completing the course, you'll be added to our dedicated Discord channel where you can continue to ask questions, seek clarification on concepts, and connect with other students and instructors for ongoing support."
    },
    {
      question: "What if I miss a class?",
      answer: "All sessions are recorded and made available to enrolled students. You can also attend doubt-clearing sessions to catch up on missed concepts."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 100% refund if you're not satisfied with the first two classes. No questions asked!"
    }
  ];

  return (
    <section className="py-24 px-4 relative" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-fuchsia-400">&lt;</span>
            FAQ
            <span className="text-fuchsia-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ${openIndex === index ? 'py-4 border-t border-slate-700' : 'max-h-0 overflow-hidden'
                  }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
