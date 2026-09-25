import React, { useState } from 'react';
import { X, Check, RotateCcw, Copy, Sliders, ExternalLink, Save } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CustomizerModal: React.FC = () => {
  const { isCustomizerOpen, setIsCustomizerOpen, info, updateInfo, resetInfo, showToast } =
    usePortfolio();

  const [formData, setFormData] = useState(info);
  const [activeTab, setActiveTab] = useState<'education' | 'profiles' | 'contact'>('education');
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isCustomizerOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateInfo(formData);
    setIsCustomizerOpen(false);
  };

  const handleCopyJson = () => {
    const jsonString = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(`export const initialPersonalInfo = ${jsonString};`);
    setCopiedJson(true);
    showToast('Copied TypeScript data object to clipboard!');
    setTimeout(() => setCopiedJson(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Customize Portfolio Placeholders</h3>
              <p className="text-xs text-slate-400">
                Personalize your education, contact, and profile links anytime.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/40 px-6">
          <button
            onClick={() => setActiveTab('education')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'education'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Education & CGPA
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'profiles'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Coding Profiles (GitHub, LeetCode)
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'contact'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Contact Information
          </button>
        </div>

        {/* Body Fields */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  College / Institute Name
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="e.g. Delhi Technological University / ABC Institute of Tech"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  University / Affiliation
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="e.g. State Technical University"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-slate-300 mb-1">
                    Current CGPA / Percentage
                  </label>
                  <input
                    type="text"
                    name="cgpa"
                    value={formData.cgpa}
                    onChange={handleChange}
                    placeholder="e.g. 8.4 / 10"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-300 mb-1">
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    placeholder="e.g. 2027"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Degree & Branch
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {activeTab === 'profiles' && (
            <div className="space-y-4">
              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/mohit-kumar"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/mohit-kumar"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  LeetCode Profile URL
                </label>
                <input
                  type="text"
                  name="leetcodeUrl"
                  value={formData.leetcodeUrl}
                  onChange={handleChange}
                  placeholder="https://leetcode.com/u/mohit_kumar"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  HackerRank Profile URL
                </label>
                <input
                  type="text"
                  name="hackerrankUrl"
                  value={formData.hackerrankUrl}
                  onChange={handleChange}
                  placeholder="https://hackerrank.com/mohit_kumar"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  GeeksforGeeks Profile URL
                </label>
                <input
                  type="text"
                  name="geeksforgeeksUrl"
                  value={formData.geeksforgeeksUrl}
                  onChange={handleChange}
                  placeholder="https://geeksforgeeks.org/user/mohit_kumar"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">
                  Location / City
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Delhi NCR, India"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                resetInfo();
                setFormData(info);
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
              title="Reset to default placeholders"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Placeholders</span>
            </button>

            <button
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
              title="Copy TypeScript config for code"
            >
              {copiedJson ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>Copy Config</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-500/20"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Apply Live</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
