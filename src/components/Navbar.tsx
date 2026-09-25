import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, ArrowUpRight, Code2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { info, setIsCustomizerOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand mark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {info.name}
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-cyan-400 transition-colors hover:underline hover:underline-offset-8 decoration-cyan-400/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              title="Customize placeholders (College, CGPA, Profiles)"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors hover:text-white"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Customize Info</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 whitespace-nowrap"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              title="Customize Info"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Hire Me / Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
