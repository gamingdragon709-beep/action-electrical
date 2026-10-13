import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface DrivenByResultsBannerProps {
  onLearnMore: () => void;
}

export const DrivenByResultsBanner: React.FC<DrivenByResultsBannerProps> = ({
  onLearnMore,
}) => {
  return (
    <section className="relative w-full py-20 lg:py-24 overflow-hidden bg-[#184824]">
      {/* Background industrial chiller equipment with deep green tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.bannerMachinery}
          alt="Action commercial chiller plant and mechanical piping"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-35 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Rich Green Gradient Wash matching screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c4e27]/95 via-[#235e30]/90 to-[#194522]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display">
          We&apos;re driven by results.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-emerald-50/95 leading-relaxed font-normal max-w-3xl">
          At Action Electrical &amp; Mechanical Contractors, we deliver more than power, we deliver peace of mind. As one of the region&apos;s trusted licensed multi-trade contractors, we serve commercial and industrial clients with safe, code-compliant work backed by a team that takes pride in doing the job right the first time. Whether it&apos;s a high-voltage switchgear replacement or a multi-ton chiller plant install, we bring the same attention to detail, clear communication, and commitment to long-term performance.
        </p>

        <div className="mt-8">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#184824] hover:bg-emerald-50 text-sm font-semibold rounded-full shadow-md transition-all active:scale-98 cursor-pointer group"
          >
            <span>About Our Company</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
