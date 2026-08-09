export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  mainMessage: string;
  bullets: string[];
  visualType: 
    | 'cover'
    | 'current-opportunity'
    | 'brand-vision'
    | 'tier1-launch'
    | 'website-experience'
    | 'tier2-growth'
    | 'tier3-automation'
    | 'tier4-scale'
    | 'timeline'
    | 'next-step';
  speakerNotes: string;
  tierBadge?: string;
  tagline?: string;
}

export interface ProposalTier {
  id: string;
  name: string;
  subtitle: string;
  recommended?: boolean;
  investment: string;
  timeline: string;
  deliverables: string[];
  businessImpact: string[];
}

export interface ClientApproval {
  clientName: string;
  clientTitle: string;
  companyName: string;
  approvedDate: string;
  tierSelected: string;
  signatureText: string;
  notes?: string;
}

export type ViewMode = 'presentation' | 'grid' | 'presenter' | 'tiers' | 'all-slides-print';
