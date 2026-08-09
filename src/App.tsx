import React, { useState, useEffect } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { ViewMode } from './types';
import { HeaderNav } from './components/HeaderNav';
import { SlideViewer } from './components/SlideViewer';
import { GridOverview } from './components/GridOverview';
import { PresenterMode } from './components/PresenterMode';
import { TierCalculator } from './components/TierCalculator';
import { ApprovalModal } from './components/ApprovalModal';
import { GoogleSlidesModal } from './components/GoogleSlidesModal';
import { SlideVisuals } from './components/SlideVisuals';
import { NovagentecLogo } from './components/NovagentecLogo';
import { Shield } from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('presentation');
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isGoogleSlidesOpen, setIsGoogleSlidesOpen] = useState(false);
  const [selectedTierForApproval, setSelectedTierForApproval] = useState<string>('Tier 1 — Launch Foundation');

  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_DATA.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        setViewMode('presentation');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_DATA.length - 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSelectSlide = (id: number) => {
    const index = SLIDES_DATA.findIndex((s) => s.id === id);
    if (index !== -1) {
      setCurrentSlideIndex(index);
      setViewMode('presentation');
    }
  };

  const handleOpenApproval = (tierName?: string) => {
    if (tierName) {
      setSelectedTierForApproval(tierName);
    }
    setIsApprovalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A18] flex flex-col font-sans selection:bg-[#E31B23] selection:text-white">
      {/* Header Bar */}
      <HeaderNav
        viewMode={viewMode}
        setViewMode={setViewMode}
        onApproveProposal={() => handleOpenApproval()}
        onOpenGoogleSlidesModal={() => setIsGoogleSlidesOpen(true)}
      />

      {/* Main Content Area */}
      <main className="no-print flex-1 py-4 sm:py-6">
        {viewMode === 'presentation' && (
          <SlideViewer
            slide={currentSlide}
            totalSlides={SLIDES_DATA.length}
            onApproveProposal={() => handleOpenApproval()}
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
          />
        )}

        {viewMode === 'grid' && (
          <GridOverview
            slides={SLIDES_DATA}
            currentSlideId={currentSlide.id}
            onSelectSlide={handleSelectSlide}
          />
        )}

        {viewMode === 'presenter' && (
          <PresenterMode
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
            onApproveProposal={() => handleOpenApproval()}
          />
        )}

        {viewMode === 'tiers' && (
          <TierCalculator onApproveProposal={(tier) => handleOpenApproval(tier)} />
        )}
      </main>

      {/* Footer Branding Bar */}
      <footer className="no-print border-t border-[#1A1A18]/10 py-4 px-6 bg-white text-[#1A1A18]/70 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#E31B23]" />
            <span className="font-bold text-[#1A1A18] font-display">A1 Services Infrastructure Plan</span>
            <span className="text-[#1A1A18]/30">•</span>
            <span className="text-[#1A1A18]/70">10-Slide Proposal Deck</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Prepared by</span>
            <div className="bg-[#F8F7F4] px-2.5 py-1 rounded-xs border border-[#1A1A18]/15">
              <NovagentecLogo variant="full" markSize="w-4 h-4" wordmarkHeight="h-3" color="#1A1A18" />
            </div>
          </div>
        </div>
      </footer>

      {/* Printable Section for Exporting Proposal Deck as PDF */}
      <div className="print-only">
        {SLIDES_DATA.map((slide) => (
          <div key={slide.id} className="slide-printable text-[#1A1A18] bg-[#F8F7F4]">
            {/* Slide Printable Header */}
            <div className="flex justify-between items-center border-b border-[#1A1A18]/15 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#1A1A18] text-white font-mono text-xs font-bold rounded-xs">
                  SLIDE {slide.id} OF {SLIDES_DATA.length}
                </span>
                <span className="text-[#E31B23] font-bold font-mono text-xs tracking-wider">
                  A1 SERVICES BUSINESS INFRASTRUCTURE PLAN
                </span>
              </div>
              <NovagentecLogo variant="full" markSize="w-5 h-5" wordmarkHeight="h-3.5" color="#1A1A18" />
            </div>

            {/* Slide Body: Grid of Content + Visual Graphic */}
            <div className="grid grid-cols-12 gap-6 my-auto py-4 items-center">
              {/* Left Column (Details & Bullets) */}
              <div className="col-span-6 space-y-4">
                <div>
                  <span className="label-mono text-[#E31B23] font-bold block mb-1">{slide.category}</span>
                  <h2 className="text-2xl font-bold font-display text-[#1A1A18] leading-tight">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xs text-[#1A1A18]/70 font-medium mt-1">{slide.subtitle}</p>
                  )}
                </div>

                <div className="p-3 bg-white border-l-4 border-[#E31B23] border-y border-r border-[#1A1A18]/15 rounded-xs shadow-xs">
                  <p className="text-xs font-semibold text-[#1A1A18] italic">"{slide.mainMessage}"</p>
                </div>

                <ul className="space-y-2 text-xs text-[#1A1A18]/90">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E31B23] font-bold mt-0.5">•</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {slide.tagline && (
                  <div className="inline-block px-2.5 py-1 bg-[#1A1A18]/5 border border-[#1A1A18]/15 text-[10px] font-bold font-mono text-[#E31B23] rounded-xs">
                    {slide.tagline}
                  </div>
                )}
              </div>

              {/* Right Column (Slide Visual Graphic) */}
              <div className="col-span-6 bg-white p-4 rounded-sm border border-[#1A1A18]/15 shadow-xs flex items-center justify-center min-h-[300px]">
                <SlideVisuals visualType={slide.visualType} />
              </div>
            </div>

            {/* Slide Printable Footer */}
            <div className="border-t border-[#1A1A18]/15 pt-3 flex justify-between items-center text-xs text-[#1A1A18]/60">
              <span className="font-mono text-[10px]">A1 Services • Confidential Proposal Document</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px]">Prepared by</span>
                <NovagentecLogo variant="full" markSize="w-4 h-4" wordmarkHeight="h-3" color="#1A1A18" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <ApprovalModal
        isOpen={isApprovalOpen}
        onClose={() => setIsApprovalOpen(false)}
        defaultTier={selectedTierForApproval}
      />

      <GoogleSlidesModal
        isOpen={isGoogleSlidesOpen}
        onClose={() => setIsGoogleSlidesOpen(false)}
      />
    </div>
  );
}
