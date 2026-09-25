import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Edit3,
  CheckCircle2,
  Layers,
  Sparkles,
  Eye,
  Info,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../types/portfolio';

export const Projects: React.FC = () => {
  const { projects, setActiveProjectModal, setIsCustomizerOpen } = usePortfolio();
  const [filter, setFilter] = useState<'all' | 'web' | 'dsa'>('all');
  const [showAllModal, setShowAllModal] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              03. Selected Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Real-world web projects and software experiments. Each project demonstrates clean code structure, responsive layouts, and problem solving.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-cyan-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filter === 'web'
                    ? 'bg-cyan-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Web Dev
              </button>
              <button
                onClick={() => setFilter('dsa')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filter === 'dsa'
                    ? 'bg-cyan-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                DSA / Core
              </button>
            </div>
          </div>
        </div>

        {/* Clear Notice Banner regarding Placeholder & Customization */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Developer Note:</strong> Projects below represent real-world templates and starter architectures ready to connect to your live GitHub repositories and hosted demos.
            </span>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] whitespace-nowrap hover:underline flex items-center gap-1"
          >
            <span>Edit Project Links</span>
            &rarr;
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Styled CSS fallback container
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium text-slate-200 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 rounded-md">
                    {project.category === 'web' ? 'Web Application' : 'Developer Project'}
                  </span>

                  {project.isPlaceholder && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-amber-300 bg-amber-950/80 border border-amber-800/60 rounded-md">
                      Editable Template
                    </span>
                  )}
                </div>

                {/* Quick inspect button */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono text-cyan-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies: Clean Unboxed Separators */}
                <div className="pt-2 border-t border-slate-800/60">
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-300">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-slate-300">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Project Links / Action Buttons */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 rounded-lg transition-colors hover:text-white"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all hover:border-slate-600 hover:text-white"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>View All Projects & Pipeline</span>
          </button>
        </div>
      </div>

      {/* Modal for "View All Projects & Pipeline" */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">All Projects & Development Pipeline</h3>
                <p className="text-xs text-slate-400 mt-0.5">Projects built and active ideas currently in progress</p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white text-sm">Business Showcase Website</h4>
                  <span className="text-[11px] font-mono text-emerald-400">Completed · Live</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Responsive corporate portal with quote calculators and modern semantic structure.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white text-sm">Elite Fitness & Gym Website</h4>
                  <span className="text-[11px] font-mono text-emerald-400">Completed · Live</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Gym services, trainer schedule, gallery, contact section and Google Maps integration.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white text-sm">DSA Algorithm Visualizer</h4>
                  <span className="text-[11px] font-mono text-cyan-400">Active · In Development</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Visualizing sorting algorithms and binary search tree operations step-by-step.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-300 text-sm">Personal Developer Portfolio</h4>
                  <span className="text-[11px] font-mono text-emerald-400">Current Site</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Modern portfolio showcasing B.Tech journey, skills, and contact channels.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/40 border border-dashed border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-400 text-sm">Next Concept: College Student Portal / CLI Manager</h4>
                  <span className="text-[11px] font-mono text-amber-400">Upcoming</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Planning a Java-based CLI or web-based task & coursework tracker for engineering students.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg"
              >
                Close Pipeline
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
