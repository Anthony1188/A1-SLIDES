import React from 'react';
import { SlideData } from '../types';
import { Shield, ChevronRight } from 'lucide-react';
import { NovagentecLogo } from './NovagentecLogo';

interface GridOverviewProps {
  slides: SlideData[];
  currentSlideId: number;
  onSelectSlide: (id: number) => void;
}

export const GridOverview: React.FC<GridOverviewProps> = ({
  slides,
  currentSlideId,
  onSelectSlide,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-[#1A1A18]">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#1A1A18]/10 pb-4">
        <div>
          <h2 className="text-2xl font-bold font-display text-[#1A1A18] flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#E31B23]" />
            Full Proposal Slide Deck Overview
          </h2>
          <p className="text-sm text-[#1A1A18]/70 mt-1">
            Click any slide below to jump directly into full presentation view.
          </p>
        </div>
        <div className="flex items-center gap-2 label-mono text-[#E31B23] font-bold px-3 py-1.5 rounded-xs bg-white border border-[#1A1A18]/15 w-fit shadow-xs">
          <span>10 SLIDES • PREPARED BY</span>
          <NovagentecLogo variant="full" markSize="w-4 h-4" wordmarkHeight="h-3" color="#1A1A18" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {slides.map((slide) => {
          const isActive = slide.id === currentSlideId;
          return (
            <div
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`group relative bg-white border rounded-xs p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${
                isActive
                  ? 'border-[#E31B23] border-2 shadow-sm bg-white'
                  : 'border-[#1A1A18]/15 hover:border-[#1A1A18]'
              }`}
            >
              {/* Slide Number Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="label-mono font-bold text-[#E31B23]">
                  SLIDE {String(slide.id).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#1A1A18]/50 font-mono">16:9</span>
              </div>

              {/* Title & Subtitle */}
              <div className="my-2">
                <div className="text-sm font-bold font-display text-[#1A1A18] group-hover:text-[#E31B23] transition-colors line-clamp-2">
                  {slide.title}
                </div>
                <div className="text-[11px] text-[#1A1A18]/70 mt-1 line-clamp-2">
                  {slide.mainMessage}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-[#1A1A18]/10 flex items-center justify-between text-[10px]">
                <span className="text-[#1A1A18]/60 label-mono uppercase">{slide.category}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1A1A18]/40 group-hover:text-[#E31B23] group-hover:translate-x-1 transition-all" />
              </div>

              {isActive && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-xs bg-[#E31B23] text-white text-[9px] font-bold shadow-xs font-mono">
                  Active
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
