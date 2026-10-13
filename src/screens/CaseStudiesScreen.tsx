import React from 'react';
import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

interface CaseStudiesScreenProps {
  onOpenSchedule: () => void;
}

export const CaseStudiesScreen: React.FC<CaseStudiesScreenProps> = ({
  onOpenSchedule,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            VERIFIABLE FIELD PERFORMANCE
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Project Case Studies
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            Real outcomes from manufacturing lines, cold storage distribution centers, and mission-critical commercial facilities.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-10 mb-16">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-lg border border-slate-200/90 shadow-xs overflow-hidden p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-xs">
                      {cs.facilityType}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Client: {cs.client}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0b1c30] font-display">
                    {cs.title}
                  </h2>

                  <p className="text-sm text-[#3f493f] leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Key Technical Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {cs.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#00652c] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 text-xs font-mono text-slate-500 border-t border-slate-100">
                    <span className="font-semibold text-slate-700">Scope of Contract: </span>
                    {cs.scope}
                  </div>
                </div>

                {/* Metric Card */}
                <div className="lg:col-span-4 bg-[#f8f9ff] rounded-md border border-slate-200/80 p-6 sm:p-8 text-center flex flex-col justify-center items-center">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Measurable Result
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#00652c] font-display my-2">
                    {cs.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 max-w-[200px]">
                    {cs.metricLabel}
                  </div>
                  <button
                    onClick={onOpenSchedule}
                    className="mt-6 w-full py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
                  >
                    Discuss Similar Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
