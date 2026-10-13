import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenSchedule: () => void;
  onViewAllServices: () => void;
  onOpenAssistant: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenSchedule,
  onViewAllServices,
  onOpenAssistant,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top interactive bubble: "Need a Hand?" */}
        <div className="flex justify-start mb-4">
          <button
            onClick={onOpenAssistant}
            className="group flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full shadow-xs hover:shadow-md hover:border-emerald-600 transition-all cursor-pointer text-left"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xs">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Need a Hand?
            </span>
          </button>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00652c] tracking-tight font-display">
            How Can We Help?
          </h2>
        </div>

        {/* 5 Circular Services Grid / Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="flex flex-col items-center text-center group cursor-pointer transition-transform hover:-translate-y-1"
            >
              {/* Circular Photo Frame */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-slate-200 to-slate-300 group-hover:from-emerald-500 group-hover:to-[#00652c] transition-all duration-300 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base sm:text-lg font-bold text-[#0b1c30] group-hover:text-[#00652c] transition-colors font-display leading-snug">
                {service.title}
              </h3>

              {/* Description snippet */}
              <p className="mt-1.5 text-xs sm:text-[13px] text-[#565e74] leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action CTAs Centered below matching screenshot */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <button
            onClick={onOpenSchedule}
            className="px-7 py-3 bg-[#3f6d42] hover:bg-[#2e5330] text-white text-sm font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
          >
            Schedule Your Service
          </button>

          <button
            onClick={onViewAllServices}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#0b1c30] hover:text-[#00652c] transition-colors cursor-pointer group"
          >
            <span>View All Commercial Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00652c]" />
          </button>
        </div>
      </div>
    </section>
  );
};
