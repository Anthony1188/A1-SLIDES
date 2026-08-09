import React from 'react';
import { NovagentecLogo } from './NovagentecLogo';
import { 
  Truck, Shield, Star, CheckCircle, AlertCircle, Phone, Smartphone, 
  Globe, Search, TrendingUp, Zap, FileText, 
  MapPin, Clock, Award, Users, MessageSquare, BarChart3, ChevronRight, Sparkles
} from 'lucide-react';

interface VisualProps {
  visualType: string;
  onApproveProposal?: () => void;
}

export const SlideVisuals: React.FC<VisualProps> = ({ visualType, onApproveProposal }) => {
  switch (visualType) {
    case 'cover':
      return <CoverVisual />;
    case 'current-opportunity':
      return <CurrentOpportunityVisual />;
    case 'brand-vision':
      return <BrandVisionVisual />;
    case 'tier1-launch':
      return <Tier1LaunchVisual />;
    case 'website-experience':
      return <WebsiteExperienceVisual />;
    case 'tier2-growth':
      return <Tier2GrowthVisual />;
    case 'tier3-automation':
      return <Tier3AutomationVisual />;
    case 'tier4-scale':
      return <Tier4ScaleVisual />;
    case 'timeline':
      return <TimelineVisual />;
    case 'next-step':
      return <NextStepVisual onApproveProposal={onApproveProposal} />;
    default:
      return <CoverVisual />;
  }
};

/* --- SLIDE 1: COVER VISUAL --- */
const CoverVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-[380px] bg-white rounded-sm border border-[#1A1A18]/15 p-6 flex flex-col justify-between overflow-hidden shadow-md group text-[#1A1A18]">
      {/* Background subtle radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A1A18_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#1A1A18]/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#E31B23]/10 border border-[#E31B23]/30 rounded-xs text-[#E31B23] shadow-xs">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="label-mono text-[#E31B23] font-bold">A1 SERVICES</div>
            <div className="text-sm font-bold font-display text-[#1A1A18]">YOU CALL WE HAUL</div>
          </div>
        </div>
        <div className="px-3 py-1.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/15 text-xs text-[#1A1A18] font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Client Proposal
        </div>
      </div>

      {/* Hero Visual Construction / Fleet Illustration */}
      <div className="relative z-10 my-4 flex flex-col items-center justify-center">
        <div className="w-full bg-[#F8F7F4] border border-[#1A1A18]/15 rounded-xs p-5 shadow-xs relative overflow-hidden">
          {/* Red Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E31B23]" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Fleet Badging Illustration */}
            <div className="flex items-center gap-4">
              <div className="relative p-4 bg-white rounded-xs border border-[#E31B23]/40 flex items-center justify-center group-hover:border-[#E31B23] transition-colors shadow-xs">
                <Truck className="w-12 h-12 text-[#E31B23]" />
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-[#1A1A18] rounded-xs text-[10px] text-white label-mono">
                  HEAVY FLEET
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-[#1A1A18] flex items-center gap-2">
                  A1 SERVICES
                  <span className="text-[10px] px-2 py-0.5 rounded-xs bg-[#E31B23]/10 text-[#E31B23] border border-[#E31B23]/30 label-mono">HAULING & EQUIPMENT</span>
                </h4>
                <p className="text-xs text-[#1A1A18]/70 mt-1">Truck • Dump Trailer • Skid Steer • Land Clearing</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-[#1A1A18] font-medium">
                  <span className="text-[#E31B23]">★ ★ ★ ★ ★</span>
                  <span>5.0 Rated Local Hauler</span>
                </div>
              </div>
            </div>

            {/* NOVAGENTEC Strategic Partner Logo */}
            <div className="text-right border-t md:border-t-0 md:border-l border-[#1A1A18]/10 pt-3 md:pt-0 md:pl-6 flex flex-col items-end">
              <div className="label-mono text-[#1A1A18]/60 mb-1">Strategic Partner</div>
              <NovagentecLogo variant="full" markSize="w-6 h-6" wordmarkHeight="h-4" color="#1A1A18" showTagline={true} />
              <div className="text-[10px] text-[#E31B23] font-bold mt-1 uppercase tracking-wider">Infrastructure Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Tags */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-[#1A1A18]/10 text-center text-xs">
        <div className="p-2 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10">
          <div className="label-mono text-[#1A1A18]/60">Scope</div>
          <div className="text-[#1A1A18] font-bold truncate">10-Slide Deck</div>
        </div>
        <div className="p-2 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10">
          <div className="label-mono text-[#1A1A18]/60">Target</div>
          <div className="text-[#E31B23] font-bold truncate">4-Tier System</div>
        </div>
        <div className="p-2 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10">
          <div className="label-mono text-[#1A1A18]/60">Status</div>
          <div className="text-[#1A1A18] font-bold truncate">Ready for Kickoff</div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 2: CURRENT OPPORTUNITY VISUAL --- */
const CurrentOpportunityVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <div className="text-xs font-bold font-display uppercase tracking-wider flex items-center gap-2 text-[#1A1A18]">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          A1 Services Operational Diagnosis
        </div>
        <span className="text-xs px-2.5 py-1 rounded-xs bg-amber-100 text-amber-900 border border-amber-300 font-medium">
          Growth Bottlenecks
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* Left: What A1 Has Now */}
        <div className="p-4 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider flex items-center gap-1.5 font-display">
                <CheckCircle className="w-4 h-4" /> Current Strengths
              </span>
              <span className="label-mono text-[#1A1A18]/60">Physical Assets</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#1A1A18]/90">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Heavy Truck, Skid Steer & Dump Trailer Fleet
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                High job-site execution & repeat word-of-mouth
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                "You Call We Haul" strong core tag line
              </li>
            </ul>
          </div>
          <div className="mt-4 p-2.5 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-medium">
            Solid physical business foundation ready to scale.
          </div>
        </div>

        {/* Right: Areas Needing Improvement */}
        <div className="p-4 rounded-xs bg-[#F8F7F4] border border-[#E31B23]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase text-[#E31B23] tracking-wider flex items-center gap-1.5 font-display">
                <AlertCircle className="w-4 h-4" /> Digital Gaps To Solve
              </span>
              <span className="label-mono text-[#1A1A18]/60">Infrastructure</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#1A1A18]/90">
              <li className="flex items-start gap-2">
                <span className="text-[#E31B23] font-bold">×</span>
                <div>
                  <strong className="text-[#1A1A18]">Brand Consistency:</strong> No unified vector branding across web & truck decals.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E31B23] font-bold">×</span>
                <div>
                  <strong className="text-[#1A1A18]">Mobile Website:</strong> Missing a fast, dedicated quote form for phone users.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E31B23] font-bold">×</span>
                <div>
                  <strong className="text-[#1A1A18]">Lead Recovery:</strong> Missed phone calls during field work go unanswered.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E31B23] font-bold">×</span>
                <div>
                  <strong className="text-[#1A1A18]">Follow-up:</strong> Quote requests lack automated SMS reminders.
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-2.5 rounded-xs bg-red-50 border border-red-200 text-red-900 text-[11px] font-medium">
            NOVAGENTEC proposal directly targets and solves these 4 gaps.
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 3: BRAND VISION VISUAL --- */
const BrandVisionVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E31B23]" />
          Brand Board Mockup
        </span>
        <span className="label-mono text-[#E31B23] font-bold">Primary Identity Suite</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
        {/* Card 1: Logo Suite */}
        <div className="p-3.5 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] mb-2">1. Logo Suite</div>
          <div className="flex-1 bg-white rounded-xs border border-[#1A1A18]/15 p-3 flex flex-col items-center justify-center text-center shadow-xs">
            <div className="w-12 h-12 rounded-xs bg-[#E31B23] border border-[#E31B23] flex items-center justify-center mb-2 shadow-xs">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="text-sm font-bold font-display text-[#1A1A18] tracking-wider">A1 SERVICES</div>
            <div className="label-mono text-[#E31B23] font-bold mt-0.5">YOU CALL WE HAUL</div>
            <div className="mt-2 text-[10px] text-[#1A1A18]/60">Shield Badge • Vehicle Decal • Icon Mark</div>
          </div>
        </div>

        {/* Card 2: Color Palette */}
        <div className="p-3.5 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] mb-2">2. Color Palette</div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="p-2 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/20 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-[#1A1A18]">Off-White</span>
              <span className="text-[9px] font-mono text-[#1A1A18]/60">#F8F7F4</span>
            </div>
            <div className="p-2 rounded-xs bg-[#E31B23] text-white flex flex-col justify-end">
              <span className="text-[10px] font-bold">A1 Red</span>
              <span className="text-[9px] font-mono opacity-90">#E31B23</span>
            </div>
            <div className="p-2 rounded-xs bg-[#1A1A18] text-white flex flex-col justify-end">
              <span className="text-[10px] font-bold">Dark Charcoal</span>
              <span className="text-[9px] font-mono opacity-80">#1A1A18</span>
            </div>
            <div className="p-2 rounded-xs bg-white text-black border border-[#1A1A18]/15 flex flex-col justify-end">
              <span className="text-[10px] font-bold">Pure White</span>
              <span className="text-[9px] font-mono opacity-80">#FFFFFF</span>
            </div>
          </div>
        </div>

        {/* Card 3: Vehicle & Trailer Applications */}
        <div className="p-3.5 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] mb-2">3. Fleet Applications</div>
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/15 flex items-center justify-between text-xs">
              <span className="text-[#1A1A18] font-medium flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#E31B23]" /> Chevy Truck Door
              </span>
              <span className="label-mono text-emerald-700 font-bold">High-Vis Vector</span>
            </div>
            <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/15 flex items-center justify-between text-xs">
              <span className="text-[#1A1A18] font-medium flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1A1A18]" /> Dump Trailer Wrap
              </span>
              <span className="label-mono text-emerald-700 font-bold">Full Tailgate</span>
            </div>
            <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/15 flex items-center justify-between text-xs">
              <span className="text-[#1A1A18] font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" /> Work Apparel
              </span>
              <span className="label-mono text-emerald-700 font-bold">Apparel & Hats</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 4: TIER 1 LAUNCH VISUAL --- */
const Tier1LaunchVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-xs bg-[#1A1A18] text-white font-bold text-xs font-display">TIER 1</div>
          <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider">Launch Foundation Architecture</span>
        </div>
        <span className="label-mono text-[#E31B23] font-bold px-2 py-0.5 rounded-xs bg-[#E31B23]/10 border border-[#E31B23]/30">Recommended Start</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1">
        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="p-2 w-fit rounded-xs bg-[#E31B23]/10 text-[#E31B23] mb-2">
            <Shield className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold font-display text-[#1A1A18]">1. Vector Branding</div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-1">High-res logo suite for web, print, and vinyl truck decals.</p>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="p-2 w-fit rounded-xs bg-[#1A1A18]/10 text-[#1A1A18] mb-2">
            <FileText className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold font-display text-[#1A1A18]">2. Brand Design Kit</div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-1">Typography, color codes, and social banner templates.</p>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="p-2 w-fit rounded-xs bg-emerald-100 text-emerald-800 mb-2">
            <Globe className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold font-display text-[#1A1A18]">3. Mobile Website</div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-1">Ultra-fast site built to convert hauling leads on phones.</p>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="p-2 w-fit rounded-xs bg-amber-100 text-amber-800 mb-2">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold font-display text-[#1A1A18]">4. Quote Request Form</div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-1">Step-by-step form capturing job type, location & photo.</p>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between sm:col-span-2 md:col-span-2">
          <div className="p-2 w-fit rounded-xs bg-purple-100 text-purple-800 mb-2">
            <Search className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold font-display text-[#1A1A18]">5. Google & Social Profile Assets</div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-1">Branded profile images, cover photos, and Google Business setup.</p>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 5: WEBSITE EXPERIENCE VISUAL --- */
const WebsiteExperienceVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-4 flex flex-col justify-between gap-3 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-2">
        <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#E31B23]" />
          Interactive Mockup Preview
        </span>
        <span className="label-mono text-emerald-700 font-bold">Mobile + Desktop Responsive</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 items-stretch">
        {/* Left: Desktop Preview (7 cols) */}
        <div className="md:col-span-7 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 p-3 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center gap-1.5 pb-2 border-b border-[#1A1A18]/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E31B23]" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="ml-2 px-3 py-0.5 rounded bg-white text-[10px] text-[#1A1A18]/70 font-mono w-full truncate border border-[#1A1A18]/10">
              https://a1serviceshaul.com
            </div>
          </div>
          {/* Simulated Web Page */}
          <div className="bg-white rounded-xs p-3 my-2 border border-[#1A1A18]/15 flex-1 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#1A1A18]/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E31B23]" />
                <span className="text-xs font-bold font-display text-[#1A1A18] tracking-wider">A1 SERVICES</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-xs bg-[#1A1A18] text-white font-bold">Call Now</span>
            </div>
            <div className="py-3 text-center">
              <div className="text-sm font-bold font-display text-[#1A1A18]">YOU CALL WE HAUL</div>
              <div className="text-[10px] text-[#1A1A18]/70 mt-0.5">Heavy Truck • Dumpster Rental • Land Clearing</div>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#1A1A18] text-white text-[10px] font-bold shadow-xs">
                Get Instant Quote <ChevronRight className="w-3 h-3 text-[#E31B23]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-[#1A1A18]/10 text-[9px] text-center text-[#1A1A18]/70">
              <div className="p-1 rounded-xs bg-[#F8F7F4]">Junk Removal</div>
              <div className="p-1 rounded-xs bg-[#F8F7F4]">Equip Transport</div>
              <div className="p-1 rounded-xs bg-[#F8F7F4]">Dumpsters</div>
            </div>
          </div>
        </div>

        {/* Right: Mobile Smartphone Mockup (5 cols) */}
        <div className="md:col-span-5 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 p-3 flex flex-col justify-between">
          <div className="text-[11px] font-bold font-display text-[#1A1A18] mb-1 flex items-center justify-between">
            <span>Mobile Phone View</span>
            <span className="label-mono text-[#E31B23]">1-Tap Quote Flow</span>
          </div>
          <div className="bg-white rounded-xs p-3 border border-[#E31B23]/40 flex-1 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-1 text-[10px]">
              <span className="font-bold text-[#1A1A18]">A1 Services</span>
              <span className="text-[#E31B23] font-bold flex items-center gap-1">
                <Phone className="w-3 h-3" /> Tap To Call
              </span>
            </div>
            <div className="my-2 space-y-1.5 text-[10px]">
              <div className="p-1.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10">
                <div className="text-[#1A1A18]/60 text-[9px]">Select Service</div>
                <div className="text-[#1A1A18] font-semibold">Dumpster & Dirt Haul</div>
              </div>
              <div className="p-1.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10">
                <div className="text-[#1A1A18]/60 text-[9px]">Location</div>
                <div className="text-[#1A1A18] font-semibold">Tampa, FL (Service Radius)</div>
              </div>
              <div className="p-2 rounded-xs bg-[#1A1A18] text-white text-center font-bold text-[10px]">
                Submit For Instant Quote
              </div>
            </div>
            <div className="text-[9px] text-[#1A1A18]/60 text-center">
              Customer receives automated SMS confirmation in &lt;60s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 6: TIER 2 GROWTH VISUAL --- */
const Tier2GrowthVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-xs bg-[#1A1A18] text-white font-bold text-xs font-display">TIER 2</div>
          <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider">Growth Infrastructure & CRM Engine</span>
        </div>
        <span className="label-mono text-[#1A1A18] font-bold px-2 py-0.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/20">Local Dominance</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 flex-1 items-stretch">
        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#E31B23]" /> 1. Google SEO
          </div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-2">Optimized Google Business Profile targeting Top 3 Local Map Pack.</p>
          <div className="mt-2 text-[10px] text-emerald-700 font-mono font-bold">+40% Organic Views</div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#1A1A18]" /> 2. CRM Pipeline
          </div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-2">Central board tracking quotes from incoming lead to paid job.</p>
          <div className="mt-2 text-[10px] text-emerald-700 font-mono font-bold">Zero Lost Leads</div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-600" /> 3. Review Engine
          </div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-2">Automated post-job SMS asking happy customers for 5-star reviews.</p>
          <div className="mt-2 text-[10px] text-emerald-700 font-mono font-bold">+25-40% Review Growth</div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="text-xs font-bold font-display text-[#1A1A18] flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-[#E31B23]" /> 4. Lead Tracking
          </div>
          <p className="text-[11px] text-[#1A1A18]/70 mt-2">Full attribution showing which channels generate highest revenue.</p>
          <div className="mt-2 text-[10px] text-emerald-700 font-mono font-bold">Data Transparency</div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 7: TIER 3 AUTOMATION VISUAL --- */
const Tier3AutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-4 flex flex-col justify-between gap-3 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-xs bg-[#1A1A18] text-white font-bold text-xs font-display">TIER 3</div>
          <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider">AI Missed-Call & Quote Automation</span>
        </div>
        <span className="label-mono text-amber-800 font-bold px-2 py-0.5 rounded-xs bg-amber-50 border border-amber-200">24/7 Responder</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1">
        {/* Left: SMS Conversation Visual (7 cols) */}
        <div className="md:col-span-7 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-[#1A1A18]/10 text-[11px]">
            <span className="font-bold text-[#1A1A18] flex items-center gap-1.5 font-display">
              <MessageSquare className="w-4 h-4 text-[#E31B23]" /> Automated SMS Sequence
            </span>
            <span className="label-mono text-[#E31B23]">Response Time: 18s</span>
          </div>
          
          <div className="my-2 space-y-2 text-[11px]">
            {/* System Notification */}
            <div className="text-center">
              <span className="px-2 py-0.5 rounded-full bg-white border border-[#1A1A18]/10 text-[#1A1A18]/60 text-[9px] font-mono">
                [11:04 AM] Missed Call from (813) 555-0192 while operating Skid Steer
              </span>
            </div>

            {/* Outbound Auto Text */}
            <div className="max-w-[85%] bg-white border border-[#1A1A18]/15 p-2 rounded-xs text-[#1A1A18] ml-0 shadow-xs">
              <div className="text-[9px] font-bold text-[#E31B23]">A1 Services Auto-Responder</div>
              Hi! Thanks for calling A1 Services. We missed your call while on a job. How can we help you with hauling or dumpster rental today?
            </div>

            {/* Inbound Customer Reply */}
            <div className="max-w-[85%] bg-[#1A1A18] text-white p-2 rounded-xs ml-auto shadow-xs">
              Hi, need a 20yd dumpster delivered to South Tampa tomorrow morning.
            </div>

            {/* AI Auto Follow-up */}
            <div className="max-w-[85%] bg-white border border-[#1A1A18]/15 p-2 rounded-xs text-[#1A1A18] ml-0 shadow-xs">
              Got it! We have dumpsters available for tomorrow. Here is your quick estimate link: <span className="underline font-mono text-[#E31B23]">a1services.com/q/982</span>
            </div>
          </div>
        </div>

        {/* Right: Key Benefits (5 cols) */}
        <div className="md:col-span-5 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 p-3 flex flex-col justify-between space-y-2">
          <div className="text-xs font-bold font-display text-[#1A1A18] mb-1">AI Automation Benefits</div>
          
          <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/10 text-xs">
            <div className="font-semibold text-[#E31B23]">Missed-Call Recovery</div>
            <p className="text-[11px] text-[#1A1A18]/70">Saves up to $3,500/mo in lost quotes when driving.</p>
          </div>

          <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/10 text-xs">
            <div className="font-semibold text-[#E31B23]">24h Quote Nurture</div>
            <p className="text-[11px] text-[#1A1A18]/70">Automated polite follow-up messages for open quotes.</p>
          </div>

          <div className="p-2 rounded-xs bg-white border border-[#1A1A18]/10 text-xs">
            <div className="font-semibold text-[#E31B23]">Online Scheduling</div>
            <p className="text-[11px] text-[#1A1A18]/70">Self-service booking links for onsite estimates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 8: TIER 4 SCALE VISUAL --- */
const Tier4ScaleVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-xs bg-[#1A1A18] text-white font-bold text-xs font-display">TIER 4</div>
          <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider">Scale, Analytics & Optimization</span>
        </div>
        <span className="label-mono text-[#1A1A18] font-bold px-2 py-0.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/20">Executive Dashboard</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1">
        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="label-mono text-[#1A1A18]/60">Monthly Volume</div>
          <div className="text-2xl font-bold font-display text-[#1A1A18] my-1">128 Jobs</div>
          <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-emerald-600" /> +38% MoM Growth
          </div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="label-mono text-[#1A1A18]/60">Avg Quote Value</div>
          <div className="text-2xl font-bold font-display text-[#E31B23] my-1">$485</div>
          <div className="text-[10px] text-emerald-700 font-bold">Higher Margin Hauls</div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="label-mono text-[#1A1A18]/60">Quote Conv Rate</div>
          <div className="text-2xl font-bold font-display text-emerald-700 my-1">38.5%</div>
          <div className="text-[10px] text-emerald-700 font-bold">CRO Optimized</div>
        </div>

        <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/10 flex flex-col justify-between">
          <div className="label-mono text-[#1A1A18]/60">Expanded Area</div>
          <div className="text-xl font-bold font-display text-[#1A1A18] my-1">4 Counties</div>
          <div className="text-[10px] text-[#1A1A18]/70 font-medium">Tampa Bay Region</div>
        </div>
      </div>

      <div className="p-3 bg-[#F8F7F4] rounded-xs border border-[#1A1A18]/15 text-xs flex items-center justify-between">
        <span className="text-[#1A1A18] font-medium flex items-center gap-2 font-display">
          <BarChart3 className="w-4 h-4 text-[#E31B23]" /> Includes Monthly Executive Growth Strategy Sessions with NOVAGENTEC
        </span>
        <span className="label-mono px-2 py-0.5 rounded-xs bg-[#1A1A18] text-white">Continuous Optimization</span>
      </div>
    </div>
  );
};

/* --- SLIDE 9: TIMELINE VISUAL --- */
const TimelineVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border border-[#1A1A18]/15 p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-md">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3">
        <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#E31B23]" />
          8-Week Phased Execution Plan
        </span>
        <span className="label-mono text-[#E31B23] font-bold">Launch Roadmap</span>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-center">
        {/* Week 1 */}
        <div className="p-2.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1A1A18] text-white flex items-center justify-center font-bold text-xs font-display">
              W1
            </div>
            <div>
              <div className="text-xs font-bold font-display text-[#1A1A18]">Discovery & Strategy Alignment</div>
              <div className="text-[10px] text-[#1A1A18]/70">Asset intake, brand discovery, and target service area mapping</div>
            </div>
          </div>
          <span className="label-mono px-2 py-0.5 rounded-xs bg-white border border-[#1A1A18]/10 text-[#1A1A18]/70">Phase 1</span>
        </div>

        {/* Weeks 2-3 */}
        <div className="p-2.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1A1A18] text-white flex items-center justify-center font-bold text-xs font-display">
              W2-3
            </div>
            <div>
              <div className="text-xs font-bold font-display text-[#1A1A18]">Brand Suite & Decal Assets</div>
              <div className="text-[10px] text-[#1A1A18]/70">Vector logo suite finalization, color guidelines, vehicle decal artwork</div>
            </div>
          </div>
          <span className="label-mono px-2 py-0.5 rounded-xs bg-white border border-[#1A1A18]/10 text-[#1A1A18]/70">Phase 2</span>
        </div>

        {/* Weeks 3-5 */}
        <div className="p-2.5 rounded-xs bg-[#F8F7F4] border-2 border-[#E31B23] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#E31B23] text-white flex items-center justify-center font-bold text-xs font-display">
              W3-5
            </div>
            <div>
              <div className="text-xs font-bold font-display text-[#1A1A18] flex items-center gap-2">
                Mobile Website & Quote Flow Launch
                <span className="text-[9px] px-1.5 py-0.2 rounded-xs bg-[#E31B23] text-white label-mono">30-DAY GO-LIVE</span>
              </div>
              <div className="text-[10px] text-[#1A1A18]/70">Responsive website, 3-step quote form, domain launch</div>
            </div>
          </div>
          <span className="label-mono px-2 py-0.5 rounded-xs bg-[#E31B23] text-white font-bold">TIER 1 COMPLETE</span>
        </div>

        {/* Weeks 6-8 */}
        <div className="p-2.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1A1A18] text-white flex items-center justify-center font-bold text-xs font-display">
              W6-8
            </div>
            <div>
              <div className="text-xs font-bold font-display text-[#1A1A18]">Growth Systems & CRM Setup</div>
              <div className="text-[10px] text-[#1A1A18]/70">Google Business optimization, sales pipeline CRM, review engine</div>
            </div>
          </div>
          <span className="label-mono px-2 py-0.5 rounded-xs bg-white border border-[#1A1A18]/10 text-[#1A1A18]/70">Phase 4</span>
        </div>

        {/* Post Launch */}
        <div className="p-2.5 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1A1A18] text-white flex items-center justify-center font-bold text-xs font-display">
              Post
            </div>
            <div>
              <div className="text-xs font-bold font-display text-[#1A1A18]">AI Automation & Monthly Scale</div>
              <div className="text-[10px] text-[#1A1A18]/70">Missed-call SMS triggers, campaign optimization, growth reporting</div>
            </div>
          </div>
          <span className="label-mono px-2 py-0.5 rounded-xs bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">Ongoing</span>
        </div>
      </div>
    </div>
  );
};

/* --- SLIDE 10: NEXT STEP VISUAL --- */
const NextStepVisual: React.FC<{ onApproveProposal?: () => void }> = ({ onApproveProposal }) => {
  return (
    <div className="w-full h-full min-h-[320px] bg-white rounded-sm border-2 border-[#1A1A18] p-5 flex flex-col justify-between gap-4 text-[#1A1A18] shadow-lg relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#1A1A18]/10 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#E31B23]" />
          <span className="text-xs font-bold font-display text-[#1A1A18] uppercase tracking-wider">Recommended Next Step</span>
        </div>
        <span className="label-mono px-2.5 py-1 rounded-xs bg-[#1A1A18] text-white font-bold">
          Start With Tier 1 Launch Foundation
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 flex-1">
        {/* Tier 1 Summary Card */}
        <div className="p-4 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/15 flex flex-col justify-between">
          <div>
            <div className="label-mono text-[#E31B23] font-bold">Proposal Selection</div>
            <div className="text-lg font-bold font-display text-[#1A1A18] mt-0.5">Tier 1 — Launch Foundation</div>
            <div className="text-2xl font-bold font-display text-[#1A1A18] my-2">$1,850 <span className="text-xs font-normal text-[#1A1A18]/70">one-time investment</span></div>
            <ul className="space-y-1.5 text-xs text-[#1A1A18]/90">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Vector Logo Suite & Design Kit
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Mobile-First Website & Quote Engine
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Social & Google Profile Branding
              </li>
            </ul>
          </div>
          <div className="mt-3 pt-3 border-t border-[#1A1A18]/10 text-[11px] text-[#1A1A18]/70 flex items-center justify-between">
            <span>Target Go-Live:</span>
            <span className="text-[#1A1A18] font-bold">30 Days From Kickoff</span>
          </div>
        </div>

        {/* Action & Schedule Call Card */}
        <div className="p-4 rounded-xs bg-[#F8F7F4] border border-[#1A1A18]/15 flex flex-col justify-between">
          <div>
            <div className="label-mono text-[#1A1A18] font-bold">Kickoff Steps</div>
            <div className="text-sm font-bold font-display text-[#1A1A18] mt-1">Ready to scale A1 Services?</div>
            <p className="text-xs text-[#1A1A18]/70 mt-1">
              Click below to accept Tier 1 and schedule your 45-minute discovery session with the NOVAGENTEC team.
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <button
              onClick={onApproveProposal}
              className="w-full py-3 px-4 rounded-xs bg-[#1A1A18] hover:bg-[#2A2A28] text-white font-bold font-display text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#1A1A18]"
            >
              <CheckCircle className="w-4 h-4 text-[#E31B23]" />
              Approve Tier 1 & Schedule Discovery
            </button>
            <div className="flex items-center justify-center gap-1.5 label-mono text-[#1A1A18]/60 pt-1">
              <span>Official Proposal by</span>
              <NovagentecLogo variant="full" markSize="w-4 h-4" wordmarkHeight="h-3" color="#1A1A18" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
