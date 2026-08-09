import React, { useState, useEffect } from 'react';
import { SlideData } from '../types';
import { SlideVisuals } from './SlideVisuals';
import { Mic, Clock, ChevronRight, ChevronLeft, RotateCcw, Play, Pause, FileText } from 'lucide-react';

interface PresenterModeProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onApproveProposal: () => void;
}

export const PresenterMode: React.FC<PresenterModeProps> = ({
  slides,
  currentSlideIndex,
  onNextSlide,
  onPrevSlide,
  onApproveProposal,
}) => {
  const currentSlide = slides[currentSlideIndex];
  const nextSlide = slides[currentSlideIndex + 1];

  // Timer state
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-[#1A1A18] space-y-6">
      {/* Top Controls & Pitch Timer */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#1A1A18]/15 p-4 rounded-sm shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#E31B23]/10 text-[#E31B23] rounded-xs border border-[#E31B23]/30">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold font-display text-[#1A1A18]">Presenter Mode & Pitch Teleprompter</h2>
            <p className="text-xs text-[#1A1A18]/70">A1 Services Infrastructure Proposal Pitch</p>
          </div>
        </div>

        {/* Pitch Timer */}
        <div className="flex items-center gap-3 bg-[#F8F7F4] px-4 py-2 rounded-xs border border-[#1A1A18]/15">
          <Clock className="w-4 h-4 text-[#E31B23]" />
          <span className="font-mono text-base font-bold text-[#1A1A18]">{formatTimer(seconds)}</span>
          <div className="flex items-center gap-1 border-l border-[#1A1A18]/15 pl-2">
            <button
              onClick={() => setIsActive(!isActive)}
              className="p-1 text-[#1A1A18]/60 hover:text-[#1A1A18] transition-colors cursor-pointer"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setSeconds(0)}
              className="p-1 text-[#1A1A18]/60 hover:text-[#1A1A18] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 rounded-xs bg-white border border-[#1A1A18]/20 hover:bg-[#1A1A18] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold cursor-pointer text-[#1A1A18]"
          >
            ← Previous
          </button>
          <span className="label-mono px-2 text-[#1A1A18]/70 font-bold">
            {currentSlideIndex + 1} / {slides.length}
          </span>
          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="px-3 py-1.5 rounded-xs bg-[#1A1A18] text-white font-bold text-xs hover:bg-[#2A2A28] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Main Grid: Current Slide (Left) + Speaker Notes & Next Slide (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Current Slide Live Preview (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#1A1A18]/15 rounded-sm p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3 mb-4">
            <span className="label-mono font-bold text-[#E31B23]">
              CURRENT SLIDE {String(currentSlide.id).padStart(2, '0')}
            </span>
            <span className="text-xs text-[#1A1A18]/70">{currentSlide.category}</span>
          </div>

          <div className="space-y-4 my-2">
            <h3 className="text-xl font-bold font-display text-[#1A1A18]">{currentSlide.title}</h3>
            <div className="p-3 bg-[#F8F7F4] border-l-4 border-[#E31B23] border-y border-r border-[#1A1A18]/10 rounded-xs text-xs text-[#1A1A18]">
              "{currentSlide.mainMessage}"
            </div>
          </div>

          <div className="my-4 min-h-[260px] flex items-center justify-center">
            <SlideVisuals visualType={currentSlide.visualType} onApproveProposal={onApproveProposal} />
          </div>
        </div>

        {/* Right: Teleprompter Speaker Notes + Next Slide Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Speaker Notes */}
          <div className="bg-white border-2 border-[#1A1A18] rounded-sm p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3 mb-3">
              <span className="text-xs font-bold font-display text-[#E31B23] uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> Presenter Pitch Notes
              </span>
              <span className="label-mono text-[#1A1A18]/50">A1 Client Script</span>
            </div>
            <div className="text-sm leading-relaxed text-[#1A1A18] bg-[#F8F7F4] p-4 rounded-xs border border-[#1A1A18]/10 min-h-[160px] font-sans">
              {currentSlide.speakerNotes}
            </div>
          </div>

          {/* Next Slide Preview */}
          <div className="bg-white border border-[#1A1A18]/15 rounded-sm p-4 shadow-sm">
            <div className="label-mono text-[#1A1A18]/60 mb-2 flex items-center justify-between">
              <span>UP NEXT</span>
              {nextSlide && <span>SLIDE {String(nextSlide.id).padStart(2, '0')}</span>}
            </div>

            {nextSlide ? (
              <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10">
                <div className="text-xs font-bold font-display text-[#1A1A18]">{nextSlide.title}</div>
                <p className="text-[11px] text-[#1A1A18]/70 mt-1 line-clamp-2">{nextSlide.mainMessage}</p>
              </div>
            ) : (
              <div className="p-3 bg-emerald-50 rounded-xs border border-emerald-200 text-xs text-emerald-900 font-bold">
                End of Presentation — Ready for Proposal Sign-Off!
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
