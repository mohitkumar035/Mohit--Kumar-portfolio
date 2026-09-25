import React from 'react';
import { GraduationCap, Calendar, Award, Building, BookMarked, Sliders, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Education: React.FC = () => {
  const { info, setIsCustomizerOpen } = usePortfolio();

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              05. Academic Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Education
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Formal undergraduate coursework in computer science, software design principles, algorithms, and core engineering mathematics.
            </p>
          </div>

          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors hover:text-white"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Edit College & CGPA Details</span>
          </button>
        </div>

        {/* Education Card & Academic Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Degree Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {info.degree}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{info.collegeName}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{info.university}</span>
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono">
                <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-full">
                  {info.currentYear}
                </span>
                <p className="text-xs text-slate-400 mt-1.5 flex items-center sm:justify-end gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduation Year: {info.graduationYear}</span>
                </p>
              </div>
            </div>

            {/* Editable Information Notice */}
            {(info.collegeName.includes('YOUR_') || info.cgpa.includes('YOUR_')) && (
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-semibold text-cyan-300">Editable Placeholders Active:</span>
                  <p className="text-slate-400">
                    College Name and CGPA are set as editable placeholders. Click the button to add your actual university details.
                  </p>
                </div>
                <button
                  onClick={() => setIsCustomizerOpen(true)}
                  className="px-3 py-1.5 font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap"
                >
                  Quick Fill
                </button>
              </div>
            )}

            {/* Academic Specs & Coursework */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-cyan-400" />
                <span>Relevant Coursework & Subjects</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (Java/C++)',
                  'Database Management Systems (DBMS)',
                  'Computer Networks',
                  'Operating Systems Fundamentals',
                  'Software Engineering Principles',
                ].map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Details & CGPA Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Academic Record</span>
              </h3>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <p className="text-xs font-mono text-slate-400">Current CGPA / Grade</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">{info.cgpa}</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Editable placeholder — add your official score
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Program:</span>
                  <span className="text-white font-medium">B.Tech</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Current Standing:</span>
                  <span className="text-cyan-300 font-medium">3rd Year</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Expected Year:</span>
                  <span className="text-white font-medium">{info.graduationYear}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400 font-medium">Full-time Regular</span>
                </div>
              </div>
            </div>

            {/* Student Credo */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400 leading-relaxed">
              Balancing rigorous academic coursework with self-directed software development and practical project engineering.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
