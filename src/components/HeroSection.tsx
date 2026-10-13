import React from 'react';
import { Phone, ShieldCheck, Clock, Zap } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface HeroSectionProps {
  onOpenSchedule: () => void;
  onOpenServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSchedule,
}) => {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#071320]">
      {/* Background Photography with moody industrial treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroSwitchgear}
          alt="Action commercial electrical and mechanical contractors inspecting switchgear"
          className="w-full h-full object-cover object-center opacity-70 filter contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay matching screenshot */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#071320]/60 to-[#071320]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-black/40 to-black/70" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] max-w-4xl">
          RESPECT FOR{' '}
          <span className="text-[#22c55e] italic font-black tracking-normal">
            EVERY CONNECTION
          </span>
        </h1>

        {/* Subtitle Copy */}
        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
          Licensed Commercial Electrical &amp; Mechanical Contractors serving Northeast Florida and regional commercial facilities with engineered reliability.
        </p>

        {/* Hero CTA Button matching screenshot */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:9045552286"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/85 text-white font-mono text-base font-bold hover:bg-white hover:text-[#0b1c30] transition-all duration-200 shadow-lg hover:shadow-emerald-500/10 cursor-pointer active:scale-95"
          >
            <span>(904) 555-ACTN</span>
          </a>
        </div>

        {/* Subtle trust markers */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FL License EC13010299</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>GA License EN215151</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>24/7 Rapid Emergency MEP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
