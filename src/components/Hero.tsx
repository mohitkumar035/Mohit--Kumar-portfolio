import React, { useState } from 'react';
import { ArrowRight, Terminal, Sparkles, FolderGit2, Play, CheckCircle2, Copy, Check } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { info } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'profile' | 'dsa' | 'stack'>('profile');
  const [hasCopiedTerminal, setHasCopiedTerminal] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [runOutput, setRunOutput] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      `const developer = {\n  name: "${info.name}",\n  role: "${info.role}",\n  year: "${info.status}",\n  focus: ["Web Development", "DSA", "Java", "C++"],\n  status: "Ready to build & solve problems"\n};`
    );
    setHasCopiedTerminal(true);
    setTimeout(() => setHasCopiedTerminal(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setRunOutput(`> Build compiled successfully (0 errors) \n> Mohit Kumar: 3rd Year B.Tech | Ready for Web & Software Opportunities!`);
    }, 450);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet status lead-in */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">Open for Internships & Projects</span>
              <span className="text-slate-500">·</span>
              <span className="text-cyan-400 font-mono text-[11px]">{info.status}</span>
            </div>

            <div className="space-y-3">
              <p className="text-cyan-400 font-mono text-sm tracking-wide">
                Hi, I'm {info.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
                Web Developer & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  B.Tech Student
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              {info.bio}
            </p>

            {/* Quick Unboxed Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 pt-1">
              <span>Web Development</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Data Structures & Algorithms</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Java</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>C++</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Problem Solving</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-lg transition-all hover:text-white hover:border-slate-600"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Micro stats banner without fake metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-xs text-slate-400">Current Standing</p>
                <p className="text-sm font-bold text-white mt-0.5 font-mono">3rd Year B.Tech</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Core Focus</p>
                <p className="text-sm font-bold text-cyan-400 mt-0.5 font-mono">Web & DSA</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Languages</p>
                <p className="text-sm font-bold text-slate-200 mt-0.5 font-mono">JS · Java · C++</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-1 shadow-2xl border border-slate-700/60 backdrop-blur-xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70 rounded-t-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">mohit-workspace</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded transition-colors"
                      title="Copy code snippet"
                    >
                      {hasCopiedTerminal ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={handleRunCode}
                      disabled={isRunningCode}
                      className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-800/60 rounded transition-colors disabled:opacity-50"
                      title="Simulate code run"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isRunningCode ? 'Compiling...' : 'Run'}</span>
                    </button>
                  </div>
                </div>

                {/* Tab selector */}
                <div className="flex items-center border-b border-slate-800 bg-slate-950/40 px-2 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-2 border-b-2 transition-colors ${
                      activeTab === 'profile'
                        ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Mohit.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('dsa')}
                    className={`px-3 py-2 border-b-2 transition-colors ${
                      activeTab === 'dsa'
                        ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    DSA_Tracker.cpp
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-2 border-b-2 transition-colors ${
                      activeTab === 'stack'
                        ? 'border-cyan-400 text-cyan-400 bg-slate-900/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Roadmap.json
                  </button>
                </div>

                {/* Code body */}
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed bg-slate-950/90 rounded-b-xl overflow-x-auto min-h-[260px]">
                  {activeTab === 'profile' && (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Personal developer object</p>
                      <p>
                        <span className="text-cyan-400">const</span>{' '}
                        <span className="text-indigo-300">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">name:</span>{' '}
                        <span className="text-emerald-400">"{info.name}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">education:</span>{' '}
                        <span className="text-emerald-400">"B.Tech 3rd Year"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">passions:</span> [
                        <span className="text-amber-300">"Web Dev"</span>,{' '}
                        <span className="text-amber-300">"DSA"</span>,{' '}
                        <span className="text-amber-300">"Problem Solving"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">languages:</span> [
                        <span className="text-sky-300">"JavaScript"</span>,{' '}
                        <span className="text-sky-300">"Java"</span>,{' '}
                        <span className="text-sky-300">"C++"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">seekingOpportunity:</span>{' '}
                        <span className="text-cyan-300">true</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-300">buildFuture:</span> () =&gt; &#123;
                      </p>
                      <p className="pl-8 text-slate-400">
                        return <span className="text-emerald-400">"Writing clean code & turning ideas into products"</span>;
                      </p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === 'dsa' && (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Daily algorithmic problem solving in C++</p>
                      <p className="text-indigo-400">#include &lt;iostream&gt;</p>
                      <p className="text-indigo-400">#include &lt;vector&gt;</p>
                      <p>
                        <span className="text-cyan-400">using namespace</span> std;
                      </p>
                      <p className="pt-1">
                        <span className="text-amber-300">void</span> solveProblems() &#123;
                      </p>
                      <p className="pl-4 text-slate-300">
                        vector&lt;string&gt; activeTopics = &#123;
                      </p>
                      <p className="pl-8 text-emerald-400">
                        "Arrays & Two Pointers", "Binary Search", "Linked Lists", "OOP Architecture"
                      </p>
                      <p className="pl-4 text-slate-300">&#125;;</p>
                      <p className="pl-4 text-slate-400">
                        cout &lt;&lt; <span className="text-emerald-400">"Progress: Practicing every single day!"</span> &lt;&lt; endl;
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-1 text-slate-300">
                      <p className="text-slate-500">// Active learning focus & goals</p>
                      <p>&#123;</p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"currentSemester"</span>: <span className="text-emerald-400">"6th (3rd Year)"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"primaryTargets"</span>: [
                      </p>
                      <p className="pl-8 text-amber-300">"Master Data Structures & Algorithms",</p>
                      <p className="pl-8 text-amber-300">"Build production-grade web applications",</p>
                      <p className="pl-8 text-amber-300">"Secure tech internship for Summer 2026/2027"</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"mindset"</span>: <span className="text-emerald-400">"Consistent growth & practical building"</span>
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {/* Terminal Execution Result Bar */}
                  {runOutput && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-emerald-400 text-[11px] animate-in fade-in duration-200">
                      <pre className="whitespace-pre-wrap font-mono leading-relaxed">{runOutput}</pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Quiet floating badge on visual corner */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 px-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Node.js / C++ / Web Environment</span>
                </span>
                <span>Ready to collaborate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
