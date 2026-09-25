import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { CheckCircle2, CircleDot, Sparkles, Compass, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const DevelopmentJourney: React.FC = () => {
  const { setIsCustomizerOpen } = usePortfolio();

  return (
    <section id="journey" className="py-24 relative border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
            06. Evolution as an Engineer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Development Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Honest chronicle of my path into computer science, web development, and algorithmic problem solving — no fabricated employment titles.
          </p>
          <div className="w-12 h-1 bg-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10">
          {journeyMilestones.map((milestone, idx) => {
            const isCompleted = milestone.status === 'Completed';
            const isCurrent = milestone.status === 'In Progress' || milestone.status === 'Continuous';

            return (
              <div key={milestone.title} className="relative pl-6 sm:pl-8 group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-slate-950 border-cyan-400 group-hover:scale-125'
                      : isCurrent
                      ? 'bg-cyan-400 border-white ring-4 ring-cyan-500/20 animate-pulse'
                      : 'bg-slate-950 border-slate-600'
                  }`}
                />

                {/* Left Phase tag for wider screens */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono font-medium text-slate-400 block">
                    {milestone.phase}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      isCompleted
                        ? 'text-slate-500'
                        : isCurrent
                        ? 'text-cyan-400 font-bold'
                        : 'text-slate-400'
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 group-hover:border-slate-700 transition-colors space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {milestone.title}
                    </h3>
                    {/* Phase tag for mobile screens */}
                    <span className="sm:hidden text-[11px] font-mono text-cyan-400">
                      {milestone.phase} · {milestone.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {milestone.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-[11px] font-mono text-slate-300 bg-slate-950/70 border border-slate-800/80 px-2.5 py-0.5 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Step Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-indigo-950/30 border border-cyan-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Next Chapter: Tech Internship</h4>
            <p className="text-xs text-slate-300 mt-1">
              Currently preparing for upcoming software development and web development internship roles.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap self-start sm:self-auto transition-colors"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
