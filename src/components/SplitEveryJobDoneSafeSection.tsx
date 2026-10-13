import React from 'react';
import { ShieldCheck, Sparkles, Award, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface SplitEveryJobDoneSafeSectionProps {
  onOpenSchedule: () => void;
  onViewSafety: () => void;
}

export const SplitEveryJobDoneSafeSection: React.FC<SplitEveryJobDoneSafeSectionProps> = ({
  onOpenSchedule,
  onViewSafety,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arch-Topped Photography with Zero Defect Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[460px]">
              <div className="arch-frame w-full aspect-[3/4] shadow-2xl bg-slate-900 border-4 border-white relative">
                <img
                  src={ASSET_IMAGES.archCleanPlant}
                  alt="Action technicians walking in spotless modern industrial facility"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Badge matching screenshot */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-md px-4 py-3 text-white shadow-xl flex items-center gap-2">
                    <span className="text-[#f59e0b] font-bold font-display text-base">
                      Action
                    </span>
                    <span className="text-white font-semibold text-sm">
                      Standard: Zero Defect.
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative back framing */}
              <div className="absolute -bottom-3 -left-3 w-full h-full arch-frame border-2 border-emerald-500/20 -z-10" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#00652c] font-display leading-[1.15]">
              Every job done <br />
              <span className="italic font-normal text-[#c27803]">
                safe and sound.
              </span>
            </h2>

            <div className="mt-10 space-y-8">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Licensed and Insured
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    Every project we take on is backed by proper state licensing, full master bonding, and a commitment to strict code compliance. You&apos;re partnering with leaders you can trust to get the job done safely.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Trained to Leave No Mark
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    Our technicians are trained to work clean, respect active tenant spaces, and leave every job site cleaner than when we arrived. Professionalism and attention to detail are non-negotiable.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-[#c27803]">
                  <Award className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1c30] font-display">
                    Re-investing in Our People
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-[#565e74] leading-relaxed">
                    We believe that great work comes from a supported team. That&apos;s why we continually invest in NFPA 70E safety training, advanced master certifications, and career growth for every field craftsman.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs matching screenshot */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <button
                onClick={onOpenSchedule}
                className="px-7 py-3 bg-[#3f6d42] hover:bg-[#2e5330] text-white text-sm font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                Schedule Your Service
              </button>

              <button
                onClick={onViewSafety}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#0b1c30] hover:text-[#00652c] transition-colors cursor-pointer group"
              >
                <span>View Safety Standards &amp; Protocols</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00652c]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
