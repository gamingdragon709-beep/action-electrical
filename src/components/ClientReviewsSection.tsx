import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface ClientReviewsSectionProps {
  onViewCaseStudies: () => void;
}

export const ClientReviewsSection: React.FC<ClientReviewsSectionProps> = ({
  onViewCaseStudies,
}) => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#f8f9ff] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#565e74] font-mono">
            CLIENT REVIEWS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0b1c30] tracking-tight font-display">
            Built on Real Relationships
          </h2>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 sm:p-8 rounded-xs border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#f59e0b] mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-[15px] text-[#3f493f] leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Role */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <div className="font-bold text-[#0b1c30] text-sm font-display">
                  {review.author}
                </div>
                <div className="text-xs text-[#565e74] mt-0.5">
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link Centered Below */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewCaseStudies}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b1c30] hover:text-[#00652c] transition-colors cursor-pointer group"
          >
            <span>Read More Client Stories &amp; Project Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00652c]" />
          </button>
        </div>
      </div>
    </section>
  );
};
