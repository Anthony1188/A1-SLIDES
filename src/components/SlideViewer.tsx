import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../types';
import { SlideVisuals } from './SlideVisuals';
import { Shield, ChevronRight, Check } from 'lucide-react';
import { NovagentecLogo } from './NovagentecLogo';

interface SlideViewerProps {
  slide: SlideData;
  totalSlides: number;
  onApproveProposal: () => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  totalSlides,
  onApproveProposal,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      {/* 16:9 Presentation Stage Card */}
      <div className="w-full bg-white border border-[#1A1A18]/15 rounded-sm shadow-xl overflow-hidden flex flex-col justify-between relative min-h-[580px] lg:min-h-[640px] text-[#1A1A18]">
        
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-[#E31B23]" />

        {/* Slide Header */}
        <div className="px-6 py-3.5 border-b border-[#1A1A18]/10 flex flex-wrap items-center justify-between gap-3 bg-[#F8F7F4]">
          <div className="flex items-center gap-3">
            {/* A1 Services Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[#1A1A18]/15 rounded-xs shadow-xs">
              <Shield className="w-4 h-4 text-[#E31B23]" />
              <span className="text-xs font-bold font-display tracking-tight text-[#1A1A18]">A1 SERVICES</span>
            </div>

            <span className="hidden sm:inline text-[#1A1A18]/20">|</span>

            {/* Category Tag */}
            <div className="label-mono text-[#E31B23] font-bold">
              {slide.category}
            </div>
            
            {slide.tierBadge && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-xs bg-[#1A1A18] text-white">
                {slide.tierBadge}
              </span>
            )}
          </div>

          {/* Slide Number Counter */}
          <div className="flex items-center gap-2 label-mono text-[#1A1A18]/60">
            <span className="text-[#1A1A18] font-bold">{String(slide.id).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Slide Body Container */}
        <div className="p-6 md:p-8 flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full"
            >
              {/* Left Column: Title, Main Message, Bullets (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
                {/* Slide Title */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-[#1A1A18] leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base text-[#1A1A18]/70 font-medium mt-1">
                      {slide.subtitle}
                    </p>
                  )}
                </motion.div>

                {/* Main Message Callout Box */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="p-4 rounded-xs bg-[#F8F7F4] border-l-4 border-[#E31B23] border-y border-r border-[#1A1A18]/10 shadow-xs"
                >
                  <p className="text-sm sm:text-base font-semibold text-[#1A1A18] leading-relaxed">
                    "{slide.mainMessage}"
                  </p>
                </motion.div>

                {/* 3 to 5 Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.15 }}
                  className="space-y-2.5"
                >
                  <div className="label-mono text-[#1A1A18]/60 font-bold">
                    Key Takeaways
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1A1A18]/90">
                    {slide.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="p-1 rounded-xs bg-[#E31B23]/10 text-[#E31B23] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tagline */}
                {slide.tagline && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="label-mono text-[#E31B23] font-bold flex items-center gap-1.5 pt-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                    {slide.tagline}
                  </motion.div>
                )}
              </div>

              {/* Right Column: High-Impact Visual Graphic (6 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="lg:col-span-6 w-full h-full flex items-center justify-center"
              >
                <SlideVisuals visualType={slide.visualType} onApproveProposal={onApproveProposal} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Footer with Small NOVAGENTEC Mark on Each Slide */}
        <div className="px-6 py-3 border-t border-[#1A1A18]/10 bg-[#F8F7F4] flex flex-wrap items-center justify-between text-xs text-[#1A1A18]/70">
          
          {/* Left Footer: A1 Services Title */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1A1A18]">A1 Services Infrastructure Proposal</span>
          </div>

          {/* Center Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevSlide}
              disabled={slide.id === 1}
              className="px-3 py-1 rounded-xs bg-white border border-[#1A1A18]/20 hover:bg-[#1A1A18] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-[#1A1A18] font-medium transition-colors cursor-pointer"
            >
              ← Prev
            </button>
            <span className="label-mono px-2 text-[#1A1A18]/70 font-bold">
              {slide.id} / {totalSlides}
            </span>
            <button
              onClick={onNextSlide}
              disabled={slide.id === totalSlides}
              className="px-3 py-1 rounded-xs bg-white border border-[#1A1A18]/20 hover:bg-[#1A1A18] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-[#1A1A18] font-medium transition-colors cursor-pointer"
            >
              Next →
            </button>
          </div>

          {/* Right Footer: Official NOVAGENTEC Logo Mark on Every Slide */}
          <div className="flex items-center gap-2 text-[11px]">
            <span className="label-mono text-[#1A1A18]/50 text-[10px]">PREPARED BY</span>
            <div className="bg-white px-2.5 py-1 rounded-xs border border-[#1A1A18]/15 shadow-2xs">
              <NovagentecLogo variant="full" markSize="w-4 h-4" wordmarkHeight="h-3" color="#1A1A18" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
