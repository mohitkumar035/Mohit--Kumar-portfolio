import React from 'react';
import { Sliders, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const FloatingTools: React.FC = () => {
  const { setIsCustomizerOpen, toastMessage } = usePortfolio();

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-white text-xs shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Discrete floating quick customizer launcher button */}
      <aside aria-label="Portfolio Tools" className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          title="Customize College, CGPA & Profile Links"
        >
          <Sliders className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-mono font-medium hidden sm:inline">Customize Info</span>
        </button>
      </aside>
    </>
  );
};
