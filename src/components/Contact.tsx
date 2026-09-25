import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sliders,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { info, setIsCustomizerOpen, showToast } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Internship Opportunity',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real interactive submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Thank you! Your message has been prepared.');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setHasCopiedEmail(true);
    showToast('Copied email address to clipboard');
    setTimeout(() => setHasCopiedEmail(false), 2000);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`[${formData.inquiryType}] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mohit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
            08. Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Have a project idea, internship opportunity, or collaboration in mind? Feel free to get in touch.
          </p>
          <div className="w-12 h-1 bg-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Editable Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-base font-semibold text-white">Contact Channels</h3>
                <button
                  onClick={() => setIsCustomizerOpen(true)}
                  className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Edit Contact Details</span>
                </button>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Email Address</p>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={`mailto:${info.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 truncate"
                    >
                      {info.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                      title="Copy Email"
                    >
                      {hasCopiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white mt-1 font-mono">
                    {info.phone}
                  </p>
                  {info.phone.includes('YOUR_') && (
                    <span className="text-[11px] text-amber-400/90 font-mono">
                      Editable placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {info.location}
                  </p>
                </div>
              </div>

              {/* Current Status Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Availability Status</span>
                </p>
                <p className="text-xs text-slate-300">
                  Actively considering summer 2026/2027 software & web internships and freelance web design projects.
                </p>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400">
              ⚡ I typically respond to all student and recruiter messages within 24–48 hours.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Would you like to launch your default email client to send this message directly to {info.email}?
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          inquiryType: 'Internship Opportunity',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Internship Opportunity">Tech / Web Internship Opportunity</option>
                      <option value="Freelance Web Project">Freelance Website / Client Project</option>
                      <option value="Collaborative Coding">Collaborative Project / Hackathon</option>
                      <option value="General Question">General Developer Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohit, I came across your portfolio and would like to connect regarding an opportunity..."
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
