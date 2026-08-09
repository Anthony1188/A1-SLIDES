import React, { useState } from 'react';
import { ProposalTier } from '../types';
import { PROPOSAL_TIERS } from '../data/slidesData';
import { Shield, CheckCircle, ArrowRight, Sparkles, Calculator } from 'lucide-react';

interface TierCalculatorProps {
  onApproveProposal: (tierName?: string) => void;
}

export const TierCalculator: React.FC<TierCalculatorProps> = ({ onApproveProposal }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('tier1');

  const selectedTier = PROPOSAL_TIERS.find((t) => t.id === selectedTierId) || PROPOSAL_TIERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-[#1A1A18] space-y-8">
      {/* Header */}
      <div className="border-b border-[#1A1A18]/10 pb-6 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="label-mono text-[#E31B23] font-bold flex items-center gap-2 justify-center md:justify-start">
            <Calculator className="w-4 h-4" /> Strategic Infrastructure Matrix
          </div>
          <h2 className="text-3xl font-bold font-display tracking-tight text-[#1A1A18] mt-1">
            A1 Services Proposal Tier Calculator
          </h2>
          <p className="text-sm text-[#1A1A18]/70 mt-1">
            Compare deliverables, timeline, and projected ROI across all 4 operational tiers.
          </p>
        </div>

        <button
          onClick={() => onApproveProposal(selectedTier.name)}
          className="px-6 py-3 rounded-xs bg-[#1A1A18] hover:bg-[#2A2A28] font-bold font-display text-xs text-white uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer transition-all border border-[#1A1A18]"
        >
          <CheckCircle className="w-5 h-5 text-[#E31B23]" />
          Approve {selectedTier.name.split('—')[0]}
        </button>
      </div>

      {/* Tier Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROPOSAL_TIERS.map((tier) => {
          const isSelected = tier.id === selectedTierId;
          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`p-5 rounded-xs border cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#E31B23] border-2 shadow-md'
                  : 'bg-[#F8F7F4] border-[#1A1A18]/15 hover:border-[#1A1A18]'
              }`}
            >
              <div>
                {tier.recommended && (
                  <span className="label-mono font-bold px-2.5 py-0.5 rounded-xs bg-[#E31B23] text-white uppercase mb-2 inline-block">
                    Recommended Start
                  </span>
                )}
                <h3 className="text-base font-bold font-display text-[#1A1A18] mt-1">{tier.name}</h3>
                <p className="text-xs text-[#1A1A18]/70 mt-1 line-clamp-2">{tier.subtitle}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A18]/10">
                <div className="text-2xl font-bold font-display text-[#1A1A18]">{tier.investment}</div>
                <div className="label-mono text-[#1A1A18]/60 mt-0.5">Timeline: {tier.timeline}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Breakdown for Selected Tier */}
      <div className="bg-white border border-[#1A1A18]/15 rounded-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
        
        {/* Deliverables (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 label-mono font-bold text-[#E31B23]">
            <Shield className="w-4 h-4" /> Core Deliverables — {selectedTier.name}
          </div>
          <ul className="space-y-3">
            {selectedTier.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 text-sm text-[#1A1A18]">
                <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Impact & Action (5 cols) */}
        <div className="lg:col-span-5 bg-[#F8F7F4] p-6 rounded-xs border border-[#1A1A18]/15 flex flex-col justify-between space-y-6">
          <div>
            <div className="label-mono font-bold text-emerald-800 mb-3">
              Expected Business Impact
            </div>
            <ul className="space-y-2.5">
              {selectedTier.businessImpact.map((impact, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-[#1A1A18] font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xs bg-white border border-[#1A1A18]/15 text-center space-y-3 shadow-xs">
            <div className="label-mono text-[#E31B23] font-bold">Ready to kickoff?</div>
            <div className="text-xl font-bold font-display text-[#1A1A18]">{selectedTier.investment} Total Investment</div>
            <button
              onClick={() => onApproveProposal(selectedTier.name)}
              className="w-full py-3 px-4 rounded-xs bg-[#1A1A18] hover:bg-[#2A2A28] text-white font-bold font-display text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#1A1A18]"
            >
              Approve {selectedTier.name.split('—')[0]} Proposal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
