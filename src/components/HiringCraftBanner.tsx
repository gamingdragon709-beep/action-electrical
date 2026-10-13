import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface HiringCraftBannerProps {
  onExploreCareers: () => void;
}

export const HiringCraftBanner: React.FC<HiringCraftBannerProps> = ({
  onExploreCareers,
}) => {
  return (
    <section className="relative w-full py-20 lg:py-24 overflow-hidden bg-[#184824]">
      {/* Background trade crew photography with green wash */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.bannerTeamHire}
          alt="Action electrical and mechanical trade craft team"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-30 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Rich Green Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#174623]/95 via-[#235e30]/90 to-[#174623]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display max-w-3xl">
          We hire (and keep){' '}
          <span className="italic font-normal">
            the best electricians &amp; mechanics
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-emerald-50/95 leading-relaxed font-normal max-w-3xl">
          Action Electrical &amp; Mechanical is powered by people, and we invest in every one of them. From paid training and safety certifications to real opportunities for growth, our team is built on trust, respect, and shared responsibility. Whether you&apos;re starting your career or taking it to the next level, this is a place where your craft matters.
        </p>

        <div className="mt-8">
          <button
            onClick={onExploreCareers}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#184824] hover:bg-emerald-50 text-sm font-semibold rounded-full shadow-md transition-all active:scale-98 cursor-pointer group"
          >
            <span>Explore Careers &amp; Open Roles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
