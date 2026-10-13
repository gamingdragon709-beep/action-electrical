import React, { useState } from 'react';
import { ShieldCheck, HardHat, AlertOctagon, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { SAFETY_STATS } from '../data/content';

interface SafetyStandardsScreenProps {
  onOpenSchedule: () => void;
}

export const SafetyStandardsScreen: React.FC<SafetyStandardsScreenProps> = ({
  onOpenSchedule,
}) => {
  const [downloadRequested, setDownloadRequested] = useState(false);

  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            UNCOMPROMISING SITE CULTURE
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Safety Standards &amp; Protocols
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            In high-voltage commercial electrical and heavy industrial mechanical environments, safety isn&apos;t an afterthought—it is the baseline of operational excellence.
          </p>
        </div>

        {/* 4 Safety Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {SAFETY_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xs border border-slate-200 shadow-xs text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00652c] font-display">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold text-[#0b1c30]">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-[#565e74] font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xs border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#00652c] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b1c30] font-display mb-3">
                NFPA 70E Electrical Safety
              </h3>
              <p className="text-sm text-[#565e74] leading-relaxed">
                Mandatory annual training on standard NFPA 70E requirements for electrical safety in the workplace. Every electrician is equipped with certified 40+ cal/cm² flash suits, insulated tools, and calibrated voltage testers.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-slate-700 font-mono border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Live-Work Exception Rule</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Documented Arc Flash Boundary Audits</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xs border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b1c30] font-display mb-3">
                OSHA 30 Supervisor Mandate
              </h3>
              <p className="text-sm text-[#565e74] leading-relaxed">
                Every Action job-site foreman and superintendent maintains current OSHA 30-Hour Construction Outreach credentials. Morning Job Hazard Analysis (JHA) is performed and logged before any tool strikes ground.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-slate-700 font-mono border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Daily Digital JHA Tailgate Briefings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Certified Rigging &amp; Signalers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xs border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-6">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b1c30] font-display mb-3">
                Action Standard: Zero Defect
              </h3>
              <p className="text-sm text-[#565e74] leading-relaxed">
                Trained to leave no mark. We respect occupied tenant facilities, maintain HEPA negative air enclosures during indoor conduit work, and deliver clean, labeled switchgear panels that pass first-time inspections.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-slate-700 font-mono border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Job Site Cleanliness Pledge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Full Torque &amp; Megohmmeter QA Logs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Manual Download Box */}
        <div className="bg-[#0b1c30] text-white rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest">
              GC &amp; FACILITY DIRECTOR COMPLIANCE PACKET
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Request Our Full Safety Manual &amp; COI Packet
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Includes our written safety program, EMR verification letter from our carrier, drug-free workplace certification, and sample certificate of insurance.
            </p>
          </div>

          <div className="shrink-0">
            {downloadRequested ? (
              <div className="flex items-center gap-2 px-5 py-3 bg-emerald-900/80 border border-emerald-500 text-emerald-200 text-xs font-mono rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Compliance Packet Dispatched to Estimating</span>
              </div>
            ) : (
              <button
                onClick={() => setDownloadRequested(true)}
                className="flex items-center gap-2 px-6 py-3 bg-[#00652c] hover:bg-[#004e22] text-white text-sm font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Safety Binder (.PDF)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
