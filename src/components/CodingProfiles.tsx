import React, { useState } from 'react';
import {
  FolderGit2,
  Linkedin,
  Terminal,
  Code2,
  ExternalLink,
  Copy,
  Check,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CodingProfiles: React.FC = () => {
  const { info, setIsCustomizerOpen, showToast } = usePortfolio();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const profiles = [
    {
      platform: 'GitHub',
      handle: info.githubUrl,
      role: 'Source Code & Repositories',
      description: 'Public projects, web applications, open source experiments, and git version history.',
      icon: <FolderGit2 className="w-6 h-6 text-sky-400" />,
      colorClass: 'hover:border-sky-500/50 group-hover:text-sky-400',
    },
    {
      platform: 'LinkedIn',
      handle: info.linkedinUrl,
      role: 'Professional Network',
      description: 'Academic updates, B.Tech milestones, web development discussions, and tech networking.',
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      colorClass: 'hover:border-blue-500/50 group-hover:text-blue-400',
    },
    {
      platform: 'LeetCode',
      handle: info.leetcodeUrl,
      role: 'DSA & Algorithmic Practice',
      description: 'Solving Data Structures and Algorithms problems in C++ and Java, focusing on array & string patterns.',
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      colorClass: 'hover:border-amber-500/50 group-hover:text-amber-400',
    },
    {
      platform: 'HackerRank',
      handle: info.hackerrankUrl,
      role: 'Skill Certification & Problem Solving',
      description: 'Language proficiency challenges in Java and C++, logic building, and problem-solving badges.',
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      colorClass: 'hover:border-emerald-500/50 group-hover:text-emerald-400',
    },
    {
      platform: 'GeeksforGeeks',
      handle: info.geeksforgeeksUrl,
      role: 'CS Theory & Practice',
      description: 'Practice questions on Core CS subjects (DBMS, OOP, Computer Networks) and foundational algorithms.',
      icon: <Code2 className="w-6 h-6 text-green-400" />,
      colorClass: 'hover:border-green-500/50 group-hover:text-green-400',
    },
  ];

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(platform);
    showToast(`Copied ${platform} link to clipboard`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="profiles" className="py-24 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              07. Online Presence
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Coding Profiles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Connect with me on coding platforms and developer communities where I push code and practice problem solving.
            </p>
          </div>

          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors hover:text-white"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Customize Profile URLs</span>
          </button>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => {
            const isPlaceholder = profile.handle.includes('YOUR_');

            return (
              <div
                key={profile.platform}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      {profile.icon}
                    </div>

                    {isPlaceholder ? (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-800/50 rounded">
                        Placeholder
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded">
                        Configured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {profile.platform}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                      {profile.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-slate-300 break-all flex items-center justify-between gap-2">
                    <span className="truncate">{profile.handle}</span>
                    <button
                      onClick={() => handleCopy(profile.handle, profile.platform)}
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white shrink-0"
                      title="Copy link"
                    >
                      {copiedKey === profile.platform ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={isPlaceholder ? '#profiles' : profile.handle}
                    target={isPlaceholder ? '_self' : '_blank'}
                    rel="noreferrer noopener"
                    onClick={(e) => {
                      if (isPlaceholder) {
                        e.preventDefault();
                        setIsCustomizerOpen(true);
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    <span>{isPlaceholder ? 'Set URL' : 'Visit Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setIsCustomizerOpen(true)}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/60"
                    title="Customize"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
