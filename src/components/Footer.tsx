import React from 'react';
import { Code2, ArrowUp, FolderGit2, Linkedin, Terminal } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { info, setIsCustomizerOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Persona */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{info.name}</span>
            </div>
            <p className="text-xs text-slate-400">
              Web Developer | B.Tech 3rd Year Student
            </p>
            <p className="text-xs text-slate-500 max-w-sm">
              Passionate about creating modern responsive web applications and mastering Data Structures & Algorithms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors hover:border-slate-700"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Editable note */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {info.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="text-cyan-400/80 hover:text-cyan-300 transition-colors hover:underline"
            >
              Customize Placeholders
            </button>
            <span className="text-slate-700">·</span>
            <span className="font-mono text-[11px]">Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
