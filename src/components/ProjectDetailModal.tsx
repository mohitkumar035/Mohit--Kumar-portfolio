import React from 'react';
import { X, ExternalLink, FolderGit2, CheckCircle2, Sliders, Laptop, Code2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ProjectDetailModal: React.FC = () => {
  const { activeProjectModal, setActiveProjectModal, setIsCustomizerOpen } = usePortfolio();

  if (!activeProjectModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {activeProjectModal.title}
            </h3>
          </div>
          <button
            onClick={() => setActiveProjectModal(null)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-video relative bg-slate-950">
            <img
              src={activeProjectModal.image}
              alt={activeProjectModal.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Description & Overview */}
          <div className="space-y-2">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {activeProjectModal.subtitle}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {activeProjectModal.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Key Features & Architecture</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeProjectModal.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
                >
                  <span className="text-cyan-400 font-mono font-bold">0{i + 1}.</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeProjectModal.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Customization Callout */}
          {activeProjectModal.isPlaceholder && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <p className="font-semibold text-cyan-300">Ready for your real project links</p>
                <p className="text-slate-400">
                  Update this card with your exact GitHub repository URL and live Netlify/Vercel URL.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveProjectModal(null);
                  setIsCustomizerOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap self-start sm:self-auto"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Customize Links</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <a
            href={activeProjectModal.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:text-white"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>Open GitHub Repo</span>
          </a>

          <button
            onClick={() => setActiveProjectModal(null)}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
