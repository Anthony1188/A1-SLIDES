import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { Share2, Download, Copy, Check, X, Shield, FileText } from 'lucide-react';

interface GoogleSlidesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSlidesModal: React.FC<GoogleSlidesModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const slidesTextFormat = SLIDES_DATA.map((s) => `
Slide ${s.id}: ${s.title}
Subtitle: ${s.subtitle || ''}
Category: ${s.category}
Main Message: "${s.mainMessage}"
Bullets:
${s.bullets.map((b) => ` - ${b}`).join('\n')}
Speaker Notes:
${s.speakerNotes}
--------------------------------------------------
`).join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(slidesTextFormat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(SLIDES_DATA, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "A1_Services_Proposal_Google_Slides.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A18]/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border-2 border-[#1A1A18] rounded-sm shadow-xl p-6 text-[#1A1A18] max-h-[85vh] flex flex-col justify-between">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1A1A18]/60 hover:text-[#1A1A18] p-1 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/15 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-[#1A1A18]/10 pb-3">
            <div className="p-2.5 bg-[#F8F7F4] text-[#1A1A18] rounded-xs border border-[#1A1A18]/20">
              <Share2 className="w-6 h-6 text-[#E31B23]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-[#1A1A18]">Export to Google Slides / Workspace</h3>
              <p className="text-xs text-[#1A1A18]/70">
                Google Workspace Presentation Integration • A1 Services proposal structure
              </p>
            </div>
          </div>

          <div className="p-3 bg-[#F8F7F4] border border-[#1A1A18]/15 rounded-xs text-xs space-y-1 text-[#1A1A18]">
            <div className="font-bold flex items-center gap-1.5 font-display">
              <Shield className="w-4 h-4 text-[#E31B23]" /> Formatted Workspace Slide Outline
            </div>
            <p className="text-[11px] text-[#1A1A18]/70">
              All 10 slides, speaker notes, and bullet points are ready for direct import into Google Slides presentation software.
            </p>
          </div>

          <div className="bg-[#F8F7F4] p-4 rounded-xs border border-[#1A1A18]/15 font-mono text-xs overflow-y-auto max-h-[280px] text-[#1A1A18]">
            <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
              {slidesTextFormat}
            </pre>
          </div>
        </div>

        <div className="pt-4 border-t border-[#1A1A18]/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xs bg-[#F8F7F4] hover:bg-white border border-[#1A1A18]/20 text-[#1A1A18] font-bold font-display text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied to Clipboard!' : 'Copy Outline for Google Slides'}
          </button>

          <button
            onClick={handleDownloadJSON}
            className="px-4 py-2 rounded-xs bg-[#1A1A18] hover:bg-[#2A2A28] border border-[#1A1A18] text-white font-bold font-display text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4 text-[#E31B23]" />
            Download Slides JSON Package
          </button>
        </div>
      </div>
    </div>
  );
};
