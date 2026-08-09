import React from 'react';
import { ViewMode } from '../types';
import { 
  Presentation, Grid, Mic, Calculator, FileDown, 
  Share2, Shield, CheckCircle2 
} from 'lucide-react';
import { NovagentecLogo } from './NovagentecLogo';

interface HeaderNavProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onApproveProposal: () => void;
  onOpenGoogleSlidesModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  viewMode,
  setViewMode,
  onApproveProposal,
  onOpenGoogleSlidesModal,
}) => {
  const handlePrint = () => {
    try {
      window.focus();
      window.print();
    } catch (err) {
      console.error("Print error:", err);
      alert("To save or download as PDF, please use your browser's Print command (Ctrl+P or Cmd+P) or open this application in a new tab.");
    }
  };

  return (
    <header className="no-print sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1A1A18]/10 px-4 py-3 text-[#1A1A18]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logos Header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white border border-[#1A1A18]/15 rounded-sm shadow-xs">
            <div className="px-2 py-0.5 bg-[#E31B23] font-display font-bold text-white text-xs rounded-xs">
              A1
            </div>
            <div>
              <div className="text-xs font-bold font-display tracking-tight text-[#1A1A18]">A1 SERVICES</div>
              <div className="label-mono text-[#E31B23] font-bold">YOU CALL WE HAUL</div>
            </div>
          </div>

          <span className="text-[#1A1A18]/20 font-light">|</span>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white border border-[#1A1A18]/15 rounded-sm shadow-xs">
            <span className="label-mono text-[#1A1A18]/50 text-[10px] uppercase font-bold">Strategy</span>
            <NovagentecLogo variant="full" markSize="w-5 h-5" wordmarkHeight="h-3.5" color="#1A1A18" />
          </div>
        </div>

        {/* View Mode Switchers */}
        <div className="flex items-center gap-1 bg-[#F0EFEA] p-1 rounded-sm border border-[#1A1A18]/10 text-xs">
          <button
            onClick={() => setViewMode('presentation')}
            className={`px-3 py-1.5 rounded-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'presentation'
                ? 'bg-[#1A1A18] text-white font-bold shadow-xs'
                : 'text-[#1A1A18]/70 hover:text-[#1A1A18] hover:bg-black/5'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Slide Deck</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#1A1A18] text-white font-bold shadow-xs'
                : 'text-[#1A1A18]/70 hover:text-[#1A1A18] hover:bg-black/5'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Grid Overview</span>
          </button>

          <button
            onClick={() => setViewMode('presenter')}
            className={`px-3 py-1.5 rounded-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'presenter'
                ? 'bg-[#1A1A18] text-white font-bold shadow-xs'
                : 'text-[#1A1A18]/70 hover:text-[#1A1A18] hover:bg-black/5'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Presenter Notes</span>
          </button>

          <button
            onClick={() => setViewMode('tiers')}
            className={`px-3 py-1.5 rounded-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'tiers'
                ? 'bg-[#1A1A18] text-white font-bold shadow-xs'
                : 'text-[#1A1A18]/70 hover:text-[#1A1A18] hover:bg-black/5'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tier Calculator</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Download as PDF Button */}
          <button
            onClick={handlePrint}
            title="Download Deck as PDF"
            className="px-3 py-1.5 rounded-sm bg-white border border-[#1A1A18]/20 hover:bg-[#1A1A18] hover:text-white text-[#1A1A18] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5 text-[#E31B23]" />
            <span className="hidden sm:inline">Download as PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          {/* Google Slides Integration Button */}
          <button
            onClick={onOpenGoogleSlidesModal}
            className="px-3 py-1.5 rounded-sm bg-white border border-[#1A1A18]/20 hover:bg-[#1A1A18] hover:text-white text-[#1A1A18] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-[#E31B23]" />
            <span className="hidden sm:inline">Export Google Slides</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onApproveProposal}
            className="px-4 py-2 rounded-sm bg-[#1A1A18] hover:bg-[#2A2A28] text-white font-display font-semibold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer transition-all border border-[#1A1A18]"
          >
            <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
            <span>Approve Tier 1</span>
          </button>
        </div>

      </div>
    </header>
  );
};

