import React from 'react';
import { Phone, MapPin, Shield } from 'lucide-react';
import { ScreenType } from '../types';
import { LogoWhite } from './LogoWhite';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#355f39] text-white pt-16 pb-8 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-700/50">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Action Electrical &amp; Mechanical Contractors - Home"
            >
              <LogoWhite className="h-11 sm:h-12 w-auto" />
            </button>

            <p className="text-sm text-emerald-100/90 leading-relaxed max-w-sm">
              Engineered Precision for Every Connection
            </p>
            <p className="text-xs text-emerald-200/80 leading-relaxed max-w-sm">
              Licensed commercial &amp; industrial multi-trade specialists delivering zero-defect electrical infrastructure, mission-critical power, and heavy mechanical HVAC systems.
            </p>
          </div>

          {/* Col 2: Social & Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-200 font-mono mb-3">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#social-facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 hover:border-white hover:bg-white/10 flex items-center justify-center text-emerald-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#social-instagram"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 hover:border-white hover:bg-white/10 flex items-center justify-center text-emerald-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#social-linkedin"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 hover:border-white hover:bg-white/10 flex items-center justify-center text-emerald-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-200 font-mono mb-3">
                REGIONAL ELECTRICIANS
              </h4>
              <ul className="space-y-1.5 text-sm text-emerald-100">
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('careers')}
                    className="hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white hover:underline transition-all cursor-pointer"
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Contact & Licensing */}
          <div className="lg:col-span-4 space-y-3 text-sm text-emerald-100">
            <div>
              <a
                href="tel:9045552286"
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-200 font-mono flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call (904) 555-2286</span>
              </a>
            </div>

            <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
              <div>
                11762 Industrial Parkway Drive<br />
                Suite 6<br />
                Jacksonville, FL 32224
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-emerald-200/90 space-y-1 border-t border-emerald-700/40">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-300" />
                <span>Florida EC13010299</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-300" />
                <span>Georgia EN215151</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Ribbon matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/90">
          <div>
            &copy; {new Date().getFullYear()} Action Electrical &amp; Mechanical Contractors | Privacy Policy | Accessibility
          </div>
          <div className="font-mono tracking-wider uppercase text-emerald-100 text-[11px]">
            Engineered for Reliability
          </div>
        </div>
      </div>
    </footer>
  );
};
