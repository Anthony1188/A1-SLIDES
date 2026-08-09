import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ClientApproval } from '../types';
import { Shield, CheckCircle, X, Sparkles, Send, Lock } from 'lucide-react';
import { NovagentecLogo } from './NovagentecLogo';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  onClose,
  defaultTier = 'Tier 1 — Launch Foundation',
}) => {
  const [formData, setFormData] = useState<ClientApproval>({
    clientName: 'A1 Services Leadership',
    clientTitle: 'Owner / Managing Director',
    companyName: 'A1 Services',
    approvedDate: new Date().toISOString().split('T')[0],
    tierSelected: defaultTier,
    signatureText: 'A1 Services Authorized Representative',
    notes: 'Approved for Tier 1 Launch Foundation implementation with NOVAGENTEC.',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dc2626', '#ffffff', '#2563eb'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#dc2626', '#ffffff', '#2563eb', '#10b981'],
    });
  };

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A18]/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border-2 border-[#1A1A18] rounded-sm shadow-xl p-6 text-[#1A1A18] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1A1A18]/60 hover:text-[#1A1A18] p-1 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/15 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1A1A18]/10 pb-3">
              <div className="p-2.5 bg-[#E31B23]/10 text-[#E31B23] rounded-xs border border-[#E31B23]/30">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#1A1A18]">Approve Client Proposal</h3>
                <div className="flex items-center gap-1.5 text-xs text-[#1A1A18]/70 mt-0.5">
                  <span>A1 Services Business Infrastructure Plan •</span>
                  <NovagentecLogo variant="full" markSize="w-3.5 h-3.5" wordmarkHeight="h-2.5" color="#1A1A18" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F8F7F4] border border-[#1A1A18]/15 rounded-xs text-xs flex items-center justify-between">
              <div>
                <div className="label-mono text-[#E31B23] font-bold">Selected Infrastructure Package</div>
                <div className="text-sm font-bold font-display text-[#1A1A18] mt-0.5">{formData.tierSelected}</div>
              </div>
              <span className="label-mono font-bold text-emerald-800">$1,850 Investment</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#1A1A18]/70 font-medium mb-1">Authorized Client Name</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1A1A18]/20 rounded-xs text-[#1A1A18] focus:outline-none focus:border-[#1A1A18]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#1A1A18]/70 font-medium mb-1">Title / Position</label>
                  <input
                    type="text"
                    value={formData.clientTitle}
                    onChange={(e) => setFormData({ ...formData, clientTitle: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1A1A18]/20 rounded-xs text-[#1A1A18] focus:outline-none focus:border-[#1A1A18]"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A18]/70 font-medium mb-1">Company</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1A1A18]/20 rounded-xs text-[#1A1A18] focus:outline-none focus:border-[#1A1A18]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A18]/70 font-medium mb-1">Digital Signature Confirmation</label>
                <input
                  type="text"
                  value={formData.signatureText}
                  onChange={(e) => setFormData({ ...formData, signatureText: e.target.value })}
                  required
                  placeholder="Type full legal name to sign..."
                  className="w-full px-3 py-2 bg-[#F8F7F4] border border-[#1A1A18]/20 rounded-xs text-[#1A1A18] font-mono focus:outline-none focus:border-[#1A1A18]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xs bg-[#1A1A18] hover:bg-[#2A2A28] text-white font-bold font-display text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#1A1A18]"
              >
                <Send className="w-4 h-4 text-[#E31B23]" />
                Sign & Confirm Tier 1 Approval
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 label-mono text-[#1A1A18]/50">
              <Lock className="w-3 h-3 text-[#E31B23]" /> Encrypted Sign-off • NOVAGENTEC Kickoff Trigger
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#1A1A18]">Proposal Approved!</h3>
              <p className="text-xs text-[#1A1A18]/70 mt-1 max-w-sm mx-auto">
                Thank you! Tier 1 Launch Foundation for A1 Services has been officially confirmed with NOVAGENTEC.
              </p>
            </div>

            <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 text-xs font-mono text-left space-y-1">
              <div><span className="text-[#1A1A18]/60">Signed By:</span> {formData.clientName}</div>
              <div><span className="text-[#1A1A18]/60">Package:</span> {formData.tierSelected}</div>
              <div><span className="text-[#1A1A18]/60">Date:</span> {formData.approvedDate}</div>
              <div className="flex items-center gap-1.5"><span className="text-[#1A1A18]/60">Consultant:</span> <NovagentecLogo variant="full" markSize="w-3.5 h-3.5" wordmarkHeight="h-2.5" color="#1A1A18" /> <span className="text-[#1A1A18]/80 font-sans">Strategy Team</span></div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xs bg-[#1A1A18] text-white font-bold text-xs cursor-pointer border border-[#1A1A18]"
            >
              Back to Presentation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
