import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { ScreenType } from '../types';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSchedule: () => void;
  onOpenCareers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSchedule,
  onOpenCareers,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Utility Ribbon */}
      <div className="bg-[#0b1c30] text-slate-300 text-[12px] font-medium tracking-wide py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              COMMERCIAL &amp; INDUSTRIAL DIVISION
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Emergency MEP Service</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => {
                onOpenCareers();
                setMobileMenuOpen(false);
              }}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>CAREERS</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.2 rounded-xs font-mono">
                Hiring
              </span>
            </button>
            <span className="text-slate-700">|</span>
            <a
              href="tel:9045552286"
              className="flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>(904) 555-ACTN</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#00652c] rounded-xs flex items-center justify-center text-white shadow-xs group-hover:bg-[#004e22] transition-colors">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-[#0b1c30] flex items-center gap-1 leading-none font-display">
              ACTION
            </div>
            <div className="text-[10px] font-semibold tracking-widest text-[#565e74] uppercase mt-0.5 font-mono">
              ELECTRICAL &amp; MECHANICAL
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#3f493f]">
          <button
            onClick={() => onNavigate('services')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap ${
              currentScreen === 'services' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            Commercial Services
          </button>
          <button
            onClick={() => onNavigate('why-action')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap ${
              currentScreen === 'why-action' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            Why Action
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap ${
              currentScreen === 'about' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('safety')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap ${
              currentScreen === 'safety' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            Safety Standards
          </button>
          <button
            onClick={() => onNavigate('careers')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              currentScreen === 'careers' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            <span>Careers</span>
            <span className="text-[10px] text-[#00652c] font-mono px-1 bg-emerald-50 rounded-xs">
              Hiring
            </span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors hover:text-[#00652c] cursor-pointer whitespace-nowrap ${
              currentScreen === 'contact' ? 'text-[#00652c] font-semibold' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:9045552286"
            className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#0b1c30] border border-slate-300 hover:border-slate-400 rounded-full transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#00652c]" />
            <span>(904) 555-2286</span>
          </a>

          <button
            onClick={onOpenSchedule}
            className="px-5 py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-sm font-semibold rounded-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            Schedule Service
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-black rounded-md border border-slate-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4">
          <div className="flex flex-col gap-3 font-medium text-slate-800">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Commercial Services
            </button>
            <button
              onClick={() => {
                onNavigate('why-action');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Why Action
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              About Us
            </button>
            <button
              onClick={() => {
                onNavigate('safety');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Safety Standards
            </button>
            <button
              onClick={() => {
                onNavigate('careers');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c] flex items-center justify-between"
            >
              <span>Careers</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-mono">
                Now Hiring
              </span>
            </button>
            <button
              onClick={() => {
                onNavigate('case-studies');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Case Studies &amp; Projects
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-base hover:text-[#00652c]"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="tel:9045552286"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-slate-300 text-sm font-semibold font-mono text-slate-900"
            >
              <Phone className="w-4 h-4 text-[#00652c]" />
              <span>(904) 555-2286</span>
            </a>
            <button
              onClick={() => {
                onOpenSchedule();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#00652c] text-white text-sm font-semibold rounded-xs shadow-xs"
            >
              Schedule Commercial Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
