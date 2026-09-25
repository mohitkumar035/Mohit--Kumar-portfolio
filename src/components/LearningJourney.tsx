import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Coffee,
  Binary,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
} from 'lucide-react';
import { learningTopics } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);

  const pillars = [
    {
      title: 'Web Development',
      badge: 'Active & Building',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      description: 'Building responsive, modern, and high-performance websites and user interfaces.',
      focusAreas: [
        'Semantic HTML5 & Modern CSS3 (Grid & Flexbox)',
        'JavaScript ES6+, DOM manipulation & Async flows',
        'Mobile-first responsive design standards',
        'Clean UI architecture and component discipline',
      ],
      currentAction: 'Building real-world showcase websites and personal developer tooling.',
    },
    {
      title: 'C++ Programming',
      badge: 'Practicing & Problem Solving',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      description: 'Learning programming fundamentals, OOP principles, and competitive problem solving.',
      focusAreas: [
        'Standard Template Library (Vectors, Sets, Maps, Pairs)',
        'Memory management & pointer mechanics',
        'Algorithmic problem solving & fast I/O',
        'Clean procedural and OOP design',
      ],
      currentAction: 'Solving daily problems on coding platforms to sharpen algorithmic intuition.',
    },
    {
      title: 'Java Programming',
      badge: 'Practicing & OOP Concepts',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20',
      icon: <Coffee className="w-5 h-5 text-indigo-400" />,
      description: 'Mastering Java programming fundamentals, Object-Oriented concepts, and software design.',
      focusAreas: [
        'Class structures, inheritance, and encapsulation',
        'Polymorphism, abstraction & interface contracts',
        'Java Collections Framework (ArrayList, HashMap, LinkedList)',
        'Exception handling and robust error recovery',
      ],
      currentAction: 'Writing modular Java programs to strengthen Object-Oriented fundamentals.',
    },
    {
      title: 'Data Structures & Algorithms',
      badge: 'Currently Learning & Improving',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
      icon: <Binary className="w-5 h-5 text-amber-400" />,
      description: 'Currently studying Data Structures & Algorithms and improving core problem-solving efficiency.',
      focusAreas: [
        'Arrays, Strings & Two-Pointer techniques',
        'Linked Lists, Stacks & Queues',
        'Sorting & Searching (Binary search patterns)',
        'Time & Space Complexity analysis (Big-O notation)',
      ],
      currentAction: 'Dissecting algorithmic trade-offs and practicing structured problem breakdown.',
    },
  ];

  return (
    <section id="journey-learning" className="py-24 relative border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
            04. Continuous Growth
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            My Learning Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A transparent look into my daily studies, active skill development, and ongoing programming practice.
          </p>
          <div className="w-12 h-1 bg-cyan-400 rounded-full mt-4" />
        </div>

        {/* 4 Pillars Grid (Honest labels, no fake percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  </div>
                  {/* Honest status label */}
                  <span
                    className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-full border ${pillar.badgeColor}`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Focus areas */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Topics Covered:
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {pillar.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Current Status Footer */}
              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>
                  <strong className="text-slate-300">Currently:</strong> {pillar.currentAction}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Topic Explorer: Daily DSA & Core Topics */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Algorithmic & CS Topic Focus</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Specific problem-solving topics currently under study and practice
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-400">
              Daily Practice Routine
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningTopics.map((topic, index) => (
              <div
                key={topic.name}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold">
                    0{index + 1}.
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      topic.status === 'Practicing'
                        ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40'
                        : 'text-amber-300 bg-amber-950/40 border border-amber-800/40'
                    }`}
                  >
                    {topic.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{topic.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
