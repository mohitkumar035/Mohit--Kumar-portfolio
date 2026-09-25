import React from 'react';
import { BookOpen, GraduationCap, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { info } = usePortfolio();

  const corePillars = [
    {
      title: 'Responsive Web Development',
      desc: 'Crafting clean, accessible, and fast websites with HTML5, CSS3, and JavaScript, paying close attention to user experience across devices.',
    },
    {
      title: 'Problem Solving & DSA',
      desc: 'Practicing Data Structures and Algorithms with a focus on writing optimized, time-efficient code using C++ and Java.',
    },
    {
      title: 'Object-Oriented Design',
      desc: 'Building modular, maintainable code architectures by applying the four pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism).',
    },
    {
      title: 'Continuous Student Learning',
      desc: 'Actively participating in coding platforms, exploring emerging web technologies, and turning theoretical college concepts into working software.',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
            01. Background & Perspective
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            About Me
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I am <span className="text-white font-semibold">{info.name}</span>, a dedicated{' '}
                <span className="text-cyan-400 font-semibold">{info.status}</span> with a deep passion for web development and software engineering.
              </p>
              <p>
                My journey began with curiosity about how modern websites function behind the screen.
                That spark led me into web development, where I enjoy creating modern, responsive websites,
                learning modern web standards, and transforming creative ideas into functional digital products.
              </p>
              <p>
                Alongside web development, I dedicate significant time each day to strengthening my core
                computer science foundations — especially{' '}
                <span className="text-white font-medium">Data Structures & Algorithms</span>,{' '}
                <span className="text-white font-medium">Java</span>, and{' '}
                <span className="text-white font-medium">C++</span>. I love the mental rigor of breaking down challenging algorithmic problems and turning them into efficient, elegant solutions.
              </p>
              <p className="text-slate-400 text-sm">
                Whether working on a client website, crafting an interactive web interface, or practicing coding challenges on online platforms, my focus is always on clean code, continuous curiosity, and practical problem solving.
              </p>
            </div>

            {/* Core Values / What I Bring */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Required Accurate Statistics Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Profile Snapshot</span>
              </h3>

              {/* Exact 4 Required Clean Stats without fake numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-xs font-mono text-slate-400">B.Tech Standing</p>
                  <p className="text-xl font-bold text-white mt-1">3rd Year</p>
                  <p className="text-[11px] text-cyan-400/90 mt-1 font-mono">Current Student</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-xs font-mono text-slate-400">Primary Focus</p>
                  <p className="text-lg font-bold text-white mt-1 leading-tight">Web Development</p>
                  <p className="text-[11px] text-cyan-400/90 mt-1 font-mono">Building Projects</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-xs font-mono text-slate-400">Active Learning</p>
                  <p className="text-base font-bold text-white mt-1">DSA + Java + C++</p>
                  <p className="text-[11px] text-cyan-400/90 mt-1 font-mono">Problem Solving</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-xs font-mono text-slate-400">Career Goal</p>
                  <p className="text-base font-bold text-white mt-1">Software Developer</p>
                  <p className="text-[11px] text-cyan-400/90 mt-1 font-mono">Aspiring Engineer</p>
                </div>
              </div>

              {/* Academic Highlights Box */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Branch:</span>
                  <span className="text-slate-200 font-medium">{info.degree}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Target Role:</span>
                  <span className="text-cyan-300 font-medium">Web / Software Engineering Intern</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Availability:</span>
                  <span className="text-emerald-400 font-medium">Summer & Fall 2026/2027</span>
                </div>
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-300 text-sm italic">
              "I believe that consistent daily effort in writing code, solving algorithmic problems, and building tangible web projects is the true path to becoming an exceptional engineer."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
