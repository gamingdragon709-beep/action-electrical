import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, Zap, ArrowRight, Wrench, Cpu, Activity } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesScreenProps {
  onOpenSchedule: () => void;
  selectedServiceInitial?: ServiceItem | null;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onOpenSchedule,
  selectedServiceInitial,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    selectedServiceInitial ? selectedServiceInitial.id : SERVICES[0].id
  );

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Screen Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            ENGINEERED MEP CAPABILITIES
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Commercial &amp; Industrial Services
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            Delivering integrated high-voltage electrical, heavy mechanical HVAC, automation controls, and standby generator systems with engineered reliability across Northeast Florida and Georgia.
          </p>
        </div>

        {/* Trade Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedServiceId(s.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                selectedServiceId === s.id
                  ? 'bg-[#00652c] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Detailed Service Deep-Dive View */}
        <div className="bg-white rounded-lg border border-slate-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Image & Media */}
          <div className="lg:col-span-5 bg-slate-900 relative min-h-[320px] lg:min-h-full">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-black/40 px-2 py-0.5 rounded-xs">
                Certified Trade Division
              </span>
              <h2 className="text-2xl font-bold font-display mt-2">
                {activeService.title}
              </h2>
              <p className="text-xs text-slate-200 mt-1">
                {activeService.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Technical Details & Capabilities */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0b1c30] font-display">
                  Core Engineering Scope
                </h3>
                <p className="mt-2 text-sm text-[#3f493f] leading-relaxed">
                  Our union-trained journeymen and master tradesmen execute safe, code-compliant installations tailored for mission-critical reliability and minimized commercial disruption.
                </p>
              </div>

              {/* Capabilities checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-3">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle className="w-4 h-4 text-[#00652c] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="bg-[#f8f9ff] border border-slate-200 rounded-md p-4 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1c30] font-mono mb-2">
                  Technical Specifications &amp; Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeService.specs.map((spec, i) => (
                    <div key={i} className="text-xs">
                      <div className="text-slate-500 font-mono text-[11px]">{spec.label}</div>
                      <div className="font-semibold text-slate-900 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-medium text-slate-500 font-mono mr-1">
                  Certifications:
                </span>
                {activeService.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-mono"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Defect Guarantee on all installs</span>
              </div>

              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-sm font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                Schedule {activeService.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
