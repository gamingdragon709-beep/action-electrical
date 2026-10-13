import React from 'react';
import { ShieldCheck, MapPin, Building, Users, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface AboutScreenProps {
  onOpenSchedule: () => void;
  onNavigateToCareers: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onOpenSchedule,
  onNavigateToCareers,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            ESTABLISHED IN NORTHEAST FLORIDA
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            About Action Electrical &amp; Mechanical
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            Founded on the principle of &ldquo;Respect for Every Connection,&rdquo; Action has grown into one of the region&apos;s leading commercial and industrial multi-trade specialty contractors.
          </p>
        </div>

        {/* Split Section with Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] font-display">
              Engineered Precision, Grounded in Field Craft
            </h2>
            <p className="text-sm sm:text-base text-[#3f493f] leading-relaxed">
              We started with a single service van and an obsession with clean, safe, code-compliant craftsmanship. Today, Action fields dozens of master electricians, certified chiller mechanics, and controls automation engineers across manufacturing facilities, cold storage distribution centers, hospital campuses, and mission-critical data environments.
            </p>
            <p className="text-sm sm:text-base text-[#3f493f] leading-relaxed">
              We believe commercial contracting should be transparent, communicative, and dependable. When we make a schedule commitment to a general contractor or facility director, our superintendents hold that date as an absolute benchmark.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-700">
              <div className="p-3 bg-white rounded-xs border border-slate-200">
                <span className="block text-slate-400">Headquarters</span>
                <span className="font-bold text-slate-900">Jacksonville, FL</span>
              </div>
              <div className="p-3 bg-white rounded-xs border border-slate-200">
                <span className="block text-slate-400">Florida License</span>
                <span className="font-bold text-[#00652c]">EC13010299</span>
              </div>
              <div className="p-3 bg-white rounded-xs border border-slate-200">
                <span className="block text-slate-400">Georgia License</span>
                <span className="font-bold text-[#00652c]">EN215151</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl border border-slate-200">
              <img
                src={ASSET_IMAGES.bannerTeamHire}
                alt="Action craftsmen on site"
                className="w-full h-88 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Territory / Regional Coverage */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 mb-16 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#00652c] font-bold uppercase tracking-wider">
              REGIONAL MOBILIZATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1c30] font-display mt-1">
              Active Service Territories &amp; Response Zones
            </h3>
            <p className="text-xs sm:text-sm text-[#565e74] mt-2">
              Our fleet is radio-dispatched 24/7 with rapid mobilization across the entire First Coast and South Georgia corridor:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono">
            {[
              'Duval County (Jacksonville)',
              'St. Johns & St. Augustine',
              'Clay & Orange Park',
              'Nassau & Fernandina',
              'Alachua & Gainesville',
              'Camden & Glynn, GA',
            ].map((territory, i) => (
              <div key={i} className="p-3 bg-[#f8f9ff] border border-slate-200/80 rounded-xs text-center text-slate-800 font-semibold">
                <MapPin className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                {territory}
              </div>
            ))}
          </div>
        </div>

        {/* Culture & Hiring CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-[#0b1c30] font-display">
            Want to Join Our Craft Team?
          </h3>
          <p className="text-sm text-[#565e74] max-w-lg mx-auto">
            We are always looking for dedicated commercial journeymen, master mechanics, and passionate apprentices.
          </p>
          <button
            onClick={onNavigateToCareers}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-xs font-semibold rounded-xs shadow-xs"
          >
            <span>View Open Positions &amp; Apply</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
