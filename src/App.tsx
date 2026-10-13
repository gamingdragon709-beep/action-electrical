import React, { useState, useEffect } from 'react';
import { ScreenType, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DrivenByResultsBanner } from './components/DrivenByResultsBanner';
import { SplitCommercialWorkSection } from './components/SplitCommercialWorkSection';
import { HiringCraftBanner } from './components/HiringCraftBanner';
import { SplitEveryJobDoneSafeSection } from './components/SplitEveryJobDoneSafeSection';
import { ClientReviewsSection } from './components/ClientReviewsSection';
import { Footer } from './components/Footer';

import { ServicesScreen } from './screens/ServicesScreen';
import { WhyActionScreen } from './screens/WhyActionScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SafetyStandardsScreen } from './screens/SafetyStandardsScreen';
import { CareersScreen } from './screens/CareersScreen';
import { CaseStudiesScreen } from './screens/CaseStudiesScreen';
import { ContactScreen } from './screens/ContactScreen';

import { ScheduleServiceModal } from './components/ScheduleServiceModal';
import { NeedAHandWidget } from './components/NeedAHandWidget';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleSelectServiceFromHome = (service: ServiceItem) => {
    setSelectedService(service);
    setCurrentScreen('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Top Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
        onOpenCareers={() => setCurrentScreen('careers')}
      />

      {/* Main Content Area based on Active Screen */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenSchedule={() => setIsScheduleModalOpen(true)}
              onOpenServices={() => setCurrentScreen('services')}
            />

            {/* 2. Services Showcase ("How Can We Help?") */}
            <ServicesSection
              onSelectService={handleSelectServiceFromHome}
              onOpenSchedule={() => setIsScheduleModalOpen(true)}
              onViewAllServices={() => setCurrentScreen('services')}
              onOpenAssistant={() => setIsAssistantOpen(true)}
            />

            {/* 3. Driven by Results Banner */}
            <DrivenByResultsBanner
              onLearnMore={() => setCurrentScreen('about')}
            />

            {/* 4. Split: Commercial Work Done The Right Way */}
            <SplitCommercialWorkSection />

            {/* 5. Team & Craft Banner ("We hire (and keep) the best electricians & mechanics") */}
            <HiringCraftBanner
              onExploreCareers={() => setCurrentScreen('careers')}
            />

            {/* 6. Split: Every Job Done Safe and Sound */}
            <SplitEveryJobDoneSafeSection
              onOpenSchedule={() => setIsScheduleModalOpen(true)}
              onViewSafety={() => setCurrentScreen('safety')}
            />

            {/* 7. Client Reviews Section */}
            <ClientReviewsSection
              onViewCaseStudies={() => setCurrentScreen('case-studies')}
            />
          </>
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onOpenSchedule={() => setIsScheduleModalOpen(true)}
            selectedServiceInitial={selectedService}
          />
        )}

        {currentScreen === 'why-action' && (
          <WhyActionScreen
            onOpenSchedule={() => setIsScheduleModalOpen(true)}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onOpenSchedule={() => setIsScheduleModalOpen(true)}
            onNavigateToCareers={() => setCurrentScreen('careers')}
          />
        )}

        {currentScreen === 'safety' && (
          <SafetyStandardsScreen
            onOpenSchedule={() => setIsScheduleModalOpen(true)}
          />
        )}

        {currentScreen === 'careers' && (
          <CareersScreen />
        )}

        {currentScreen === 'case-studies' && (
          <CaseStudiesScreen
            onOpenSchedule={() => setIsScheduleModalOpen(true)}
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={(screen) => setCurrentScreen(screen)} />

      {/* Interactive Schedule & Emergency Dispatch Modal */}
      <ScheduleServiceModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />

      {/* 24/7 "Need a Hand?" Dispatch Chat Widget */}
      <NeedAHandWidget
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
      />

      {/* Floating 24/7 Emergency Quick Action Button for Mobile / Viewport Bottom Corner */}
      {!isAssistantOpen && (
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="fixed bottom-5 right-5 z-40 bg-[#00652c] hover:bg-[#004e22] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg border border-emerald-400/30 flex items-center gap-2 text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95"
          aria-label="Open 24/7 Dispatch Desk"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
          <span className="hidden sm:inline">24/7 MEP Dispatch</span>
          <span className="sm:hidden">💬</span>
        </button>
      )}
    </div>
  );
}
