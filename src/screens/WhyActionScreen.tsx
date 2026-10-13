import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Phone, Zap } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface WhyActionScreenProps {
  onOpenSchedule: () => void;
}

export const WhyActionScreen: React.FC<WhyActionScreenProps> = ({
  onOpenSchedule,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            THE MULTI-TRADE ADVANTAGE
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Why Commercial Facilities Choose Action
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            In complex commercial facilities, electrical switchgear and mechanical HVAC do not live in silos. By uniting master electricians and industrial mechanics under one leadership team, Action eliminates contractor finger-pointing and keeps builds on schedule.
          </p>
        </div>

        {/* Feature Split 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] font-display">
              Single-Source Accountability
            </h2>
            <p className="text-sm sm:text-base text-[#3f493f] leading-relaxed">
              When a chiller drops offline or an emergency backup generator fails to synchronize, you don&apos;t need two separate sub-contractors arguing over whether it&apos;s a mechanical pipe valve issue or an electrical ATS control contactor.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Cross-trained field superintendents certified across high-voltage distribution and chiller thermodynamics.',
                'Direct coordination between electrical feeds and mechanical motor control centers (MCC).',
                'One point of contact, one master warranty, and one comprehensive safety program on your job site.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00652c] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl border border-slate-200">
              <img
                src={ASSET_IMAGES.bannerMachinery}
                alt="Chiller equipment room"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-7 rounded-xs border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-emerald-50 text-[#00652c] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30] font-display mb-2">
              Rapid Response Fleet
            </h3>
            <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed">
              Fully equipped mobile service rigs staged throughout Northeast Florida, loaded with specialized calibrated instrumentation, diagnostic testers, and emergency bypass materials.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xs border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-emerald-50 text-[#00652c] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30] font-display mb-2">
              Zero Defect Standard
            </h3>
            <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed">
              Every connection is torqued to manufacturer specifications with calibrated digital wrenches, verified with thermal cameras, and logged in your turnkey closeout package.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xs border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-emerald-50 text-[#00652c] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30] font-display mb-2">
              Master Licensing &amp; Bonding
            </h3>
            <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed">
              Holding Florida EC13010299 and Georgia EN215151 electrical contractor credentials, backed by $10M aggregate commercial liability and bonding capacity.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#184824] text-white rounded-lg p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Ready to Partner With an Engineered Contractor?
          </h3>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Contact our estimating team to review your drawings, plan-spec tenders, or plant upgrade requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSchedule}
              className="px-6 py-2.5 bg-white text-[#184824] hover:bg-emerald-50 text-sm font-semibold rounded-xs shadow-md"
            >
              Request Contractor Proposal
            </button>
            <a
              href="tel:9045552286"
              className="px-6 py-2.5 border border-white text-white hover:bg-white/10 text-sm font-mono font-semibold rounded-xs"
            >
              Call (904) 555-2286
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
