import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Award, CheckCircle2, X } from 'lucide-react';
import { CAREER_ROLES } from '../data/content';
import { JobOpening } from '../types';

export const CareersScreen: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('3-5 Years');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (role: JobOpening) => {
    setSelectedRole(role);
    setSubmitted(false);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            WE HIRE (AND KEEP) THE BEST
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Careers in High-Performance MEP
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            Action Electrical &amp; Mechanical is powered by people, and we invest in every one of them. Paid training, top-of-market hourly wages, late-model service vehicles, and shared respect.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { title: '100% Paid Healthcare', desc: 'Full medical, dental & vision coverage for employee' },
            { title: '401(k) + 5% Match', desc: 'Immediate vesting on company retirement plan' },
            { title: 'Company Service Rig', desc: 'Late-model van/truck with fuel card & toll pass' },
            { title: 'Paid Apprenticeship', desc: '100% paid tuition for ABC & NEFBA trade schools' },
          ].map((b, i) => (
            <div key={i} className="bg-white p-5 rounded-xs border border-slate-200 shadow-xs">
              <div className="text-sm font-bold text-[#00652c] font-display">{b.title}</div>
              <div className="text-xs text-[#565e74] mt-1">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#0b1c30] font-display">
            Current Open Trade Roles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-white p-6 sm:p-7 rounded-xs border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                      {role.title}
                    </h3>
                    <span className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-xs font-mono shrink-0">
                      {role.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#00652c] font-semibold">
                      <DollarSign className="w-3.5 h-3.5" />
                      {role.compensation}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3f493f] leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Highlights:
                    </span>
                    {role.requirements.slice(0, 2).map((req, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleApply(role)}
                    className="w-full py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-xs font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
                  >
                    Apply For Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-[#00652c] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30] font-display">
                  Application Received!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {applicantName}. Our field talent superintendent will review your qualifications for the <strong>{selectedRole.title}</strong> role and contact you within 1 business day.
                </p>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-6 py-2 bg-[#00652c] text-white text-xs font-semibold rounded-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-[#00652c] font-semibold uppercase">
                    Direct Trade Application
                  </span>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    {selectedRole.title}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(904) 555-0123"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Years of Field Trade Experience
                  </label>
                  <select
                    value={applicantExperience}
                    onChange={(e) => setApplicantExperience(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs bg-white"
                  >
                    <option>0-1 Year (Apprentice Candidate)</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years (Journeyman)</option>
                    <option>5-10+ Years (Senior / Master)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 border border-slate-300 rounded-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#00652c] hover:bg-[#004e22] rounded-xs shadow-xs"
                  >
                    Submit Quick Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
