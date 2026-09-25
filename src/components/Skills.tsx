import React, { useState } from 'react';
import {
  FileCode,
  Palette,
  Braces,
  Layout,
  GitBranch,
  FolderGit2,
  Coffee,
  Terminal,
  Lightbulb,
  Binary,
  Boxes,
  Database,
  Network,
  Code2,
  CheckCircle2,
  Search,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'programming' | 'cs'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode':
        return <FileCode className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Braces':
        return <Braces className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'Binary':
        return <Binary className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: SkillItem['status']) => {
    switch (status) {
      case 'Working Knowledge':
        return {
          textColor: 'text-emerald-400',
          dotColor: 'bg-emerald-400',
          label: 'Working Knowledge',
        };
      case 'Familiar':
        return {
          textColor: 'text-cyan-400',
          dotColor: 'bg-cyan-400',
          label: 'Familiar',
        };
      case 'Currently Learning':
        return {
          textColor: 'text-amber-400',
          dotColor: 'bg-amber-400',
          label: 'Currently Learning',
        };
      case 'Practicing':
        return {
          textColor: 'text-indigo-400',
          dotColor: 'bg-indigo-400',
          label: 'Practicing',
        };
      default:
        return {
          textColor: 'text-slate-400',
          dotColor: 'bg-slate-400',
          label: status,
        };
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              02. Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Honest assessment of technologies I actively code in, study, and apply in real-world web development and problem solving.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'web'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setSelectedCategory('programming')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'programming'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setSelectedCategory('cs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'cs'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Computer Science
            </button>
          </div>
        </div>

        {/* Legend: Zero-Pill Unboxed Status Indicators */}
        <div className="mb-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-b border-slate-800/80 pb-4">
          <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">Proficiency Legend:</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">Working Knowledge</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-medium">Familiar</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-slate-300 font-medium">Practicing</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-300 font-medium">Currently Learning</span>
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const badge = getStatusBadge(skill.status);
            return (
              <div
                key={skill.name}
                className="group relative p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  {/* Clean unboxed status with dot */}
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dotColor}`} />
                    <span className={badge.textColor}>{badge.label}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category === 'cs' ? 'Computer Science' : skill.category}</span>
                  <span className="text-slate-600 group-hover:text-slate-400 transition-colors">Verified In Code</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Commitment Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400">
          <p>
            <strong className="text-slate-300">Commitment to Integrity:</strong> Skill levels reflect active coursework, personal coding projects, and algorithmic practice.
          </p>
          <a
            href="#journey"
            className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 hover:underline"
          >
            Explore Learning Timeline &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
