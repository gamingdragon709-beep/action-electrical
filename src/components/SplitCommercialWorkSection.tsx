import React from 'react';
import { Building2, Wrench, Clock } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

export const SplitCommercialWorkSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00652c] font-display leading-[1.15]">
              Commercial work <br />
              <span className="italic font-normal text-[#c27803]">
                done the right way.
              </span>
            </h2>

            <div className="mt-10 space-y-8">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <Building2 className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Commercial &amp; Industrial Systems
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    Safe, high-efficiency electrical and mechanical infrastructure for manufacturing facilities, logistics hubs, and commercial complexes.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <Wrench className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Precision Mechanical Installations
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    Integrated process chillers, boiler plants, rooftop air handling units, and industrial ductwork engineered for minimal operational disruption.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <Clock className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Help When You Need It (24/7)
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    Critical outages and equipment trips don&apos;t work business hours. Action provides round-the-clock emergency crews to safeguard facility uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Arch-Topped Photography */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <div className="arch-frame w-full aspect-[3/4] shadow-2xl bg-slate-900 border-4 border-white">
                <img
                  src={ASSET_IMAGES.archPanelWork}
                  alt="Action electrician terminating switchgear panel wires"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Subtle back decorative frame accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full arch-frame border-2 border-emerald-500/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
