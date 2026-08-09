import { SlideData, ProposalTier } from '../types';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: 'A1 Services Business Infrastructure Plan',
    subtitle: 'Prepared by NOVAGENTEC',
    category: 'EXECUTIVE PROPOSAL',
    mainMessage: 'Transforming A1 Services into a digital market leader with modern infrastructure, automated intake, and a unified brand presence.',
    bullets: [
      'Custom 4-tier roadmap to scale operations and customer intake',
      'Unified brand identity across web, vehicles, and digital profiles',
      'High-converting mobile-first website with automated quote engine',
      'AI-powered missed call recovery and lead follow-up automation'
    ],
    visualType: 'cover',
    speakerNotes: 'Welcome everyone. Today we are presenting the complete Business Infrastructure Plan for A1 Services, crafted by NOVAGENTEC. Our goal is to transform your high-demand hauling and equipment capabilities into an unstoppable local brand with automated lead intake and predictable growth.',
    tagline: 'OPERATE • GROW • SCALE WITH CONFIDENCE'
  },
  {
    id: 2,
    title: 'Current Opportunity',
    subtitle: 'Where A1 Services Stands Today & Key Areas for Growth',
    category: 'CURRENT STATE ANALYSIS',
    mainMessage: 'A1 Services possesses top-tier physical equipment and strong customer trust, but lacks the digital infrastructure to capture every incoming lead.',
    bullets: [
      'Brand Consistency: Outdated or fragmented logo usage across marketing channels',
      'Website Presence: No central high-converting web destination with instant quotes',
      'Lead Capture: Missed phone calls and manual intake lead to lost jobs',
      'Automated Follow-up: Lack of instant SMS/email sequences to close quote requests'
    ],
    visualType: 'current-opportunity',
    speakerNotes: 'A1 Services has outstanding equipment, trucks, and field work. However, potential customers search online first. Without a dedicated mobile website, branded Google profile, and automated response system, high-value jobs are slipping to competitors who respond faster.',
    tagline: 'FROM MANUAL INTAKE TO AUTOMATED LEAD ENGINE'
  },
  {
    id: 3,
    title: 'Future Brand Vision',
    subtitle: 'Complete Visual Identity Suite & Fleet Asset Applications',
    category: 'BRAND ARCHITECTURE',
    mainMessage: 'A heavy-duty, patriotic, premium brand system engineered for high visibility on job sites, highway trailers, and mobile screens.',
    bullets: [
      'Logo Suite: Bold American flag shield badge, vehicle decals, and compact icons',
      'Brand Palette: Midnight Charcoal (#0F1115), Pure White, Performance Red, Deep Navy',
      'Truck & Trailer Decals: High-contrast door decals, dump trailer wraps, and tailgate art',
      'Uniforms & Digital Kit: Branded apparel, social assets, and business card vectors'
    ],
    visualType: 'brand-vision',
    speakerNotes: 'Our future brand vision honors A1 Services "You Call We Haul" ethos with an unmistakable shield emblem featuring Chevy heavy trucks, skid steers, and dump trailers. This establishes instant authority on every job site and highway.',
    tagline: 'UNMISTAKABLE BRAND AUTHORITY ON EVERY JOB SITE'
  },
  {
    id: 4,
    title: 'Tier 1 — Launch Foundation',
    subtitle: 'Core Brand Identity & Mobile-First Digital Headquarters',
    category: 'FOUNDATION TIER',
    tierBadge: 'RECOMMENDED START',
    mainMessage: 'Establish an authoritative brand identity and a high-converting mobile web foundation to start capturing qualified inquiries immediately.',
    bullets: [
      'Branding & Vector Logo Suite: Complete high-res vector logo assets for all uses',
      'Design Kit: Typography guidelines, color swatches, and vehicle decal templates',
      'Mobile-First Website: Ultra-fast responsive site showcasing services & fleet',
      'Interactive Quote Form: Simple step-by-step quote request system',
      'Social & Google Profiles: Professional branding for Google Business & social platforms'
    ],
    visualType: 'tier1-launch',
    speakerNotes: 'Tier 1 is the mandatory foundation. It equips A1 Services with a polished vector logo suite, a mobile-optimized website, and an interactive quote request form so any customer searching for hauling or equipment can get a quote in under 60 seconds.',
    tagline: 'YOUR DIGITAL HEADQUARTERS & BRAND FOUNDATION'
  },
  {
    id: 5,
    title: 'Website Experience',
    subtitle: 'Seamless Customer Journey Across Desktop & Mobile Devices',
    category: 'DIGITAL USER EXPERIENCE',
    mainMessage: 'A streamlined web application built specifically for mobile contractors and homeowners requiring quick haul quotes.',
    bullets: [
      'Homepage Structure: Bold headline, instant hero CTA, service highlights, & trust badges',
      '3-Step Quote Flow: Select service type -> Enter haul details -> Submit for instant response',
      'Mobile-Optimized: Large 44px+ tap targets, instant click-to-call & text buttons',
      'Speed & Performance: Sub-second load times on 5G mobile networks'
    ],
    visualType: 'website-experience',
    speakerNotes: 'Over 82% of hauling customers search on mobile phones while on location or work sites. Our website mockup prioritizes clear service selection, instant photo/details upload, and click-to-call buttons.',
    tagline: '60-SECOND QUOTE FLOW BUILT FOR MOBILE CONVERSION'
  },
  {
    id: 6,
    title: 'Tier 2 — Growth Infrastructure',
    subtitle: 'Local Dominance, CRM Pipeline & Reputation Management',
    category: 'GROWTH ENGINE TIER',
    tierBadge: 'SYSTEMS EXPANSION',
    mainMessage: 'Turn website traffic into tracked sales pipeline stages and continuous 5-star customer reviews.',
    bullets: [
      'Google Business Profile: Optimized for local search pack top 3 placements',
      'Local SEO Foundation: Service-area targeting (Tampa, Hillsborough, Pasco, Pinellas)',
      'CRM Sales Pipeline: Centralized lead board tracking inquiries from initial quote to paid job',
      'Review & Referral Engine: Automated post-job 5-star review requests via SMS',
      'Lead Tracking & Attribution: Clear source tracking for phone calls and web forms'
    ],
    visualType: 'tier2-growth',
    speakerNotes: 'With Tier 2, we build the growth engine behind the scenes. We optimize your Google Business Profile for top local pack rankings, connect a CRM pipeline board to monitor every estimate, and automate 5-star review collection.',
    tagline: 'SYSTEMATIC LOCAL CAPTURE & PIPELINE TRACKING'
  },
  {
    id: 7,
    title: 'Tier 3 — AI Automation Options',
    subtitle: 'Instant 24/7 Missed-Call Recovery & Intelligent Follow-Up',
    category: 'AUTOMATION TIER',
    tierBadge: '24/7 AUTO-RESPONDER',
    mainMessage: 'Eliminate missed business with intelligent automated SMS text-back and automated quote nurture sequences.',
    bullets: [
      'Missed-Call Text-Back: Instant automated SMS sent within 30 seconds of missed call',
      'Quote Intake Automation: AI extracts job details from SMS and logs into CRM',
      'Follow-Up Sequences: Automated 24h & 48h polite reminder texts for pending quotes',
      'Scheduling Support: Interactive booking calendar links for site estimates',
      'Review Automation: Intelligent post-service sentiment check before posting Google review'
    ],
    visualType: 'tier3-automation',
    speakerNotes: 'When you are driving a heavy truck or operating a skid steer, you cannot answer every phone call. Tier 3 immediately sends a polite text back: "Hi, this is A1 Services! We missed your call while on a job. How can we help you today?" saving thousands in lost quotes.',
    tagline: 'NEVER LOSE A LEAD TO A MISSED PHONE CALL AGAIN'
  },
  {
    id: 8,
    title: 'Tier 4 — Scale & Optimization',
    subtitle: 'Data-Driven Expansion, Campaign Management & CRO',
    category: 'ENTERPRISE SCALE TIER',
    tierBadge: 'MAXIMUM DOMINANCE',
    mainMessage: 'Maximize profit margins, expand service radius, and maintain an executive dashboard for growth monitoring.',
    bullets: [
      'Monthly Executive Reporting: Clear metrics on revenue, lead cost, and conversion rates',
      'Conversion Rate Optimization (CRO): Continuous testing of forms, buttons, and offers',
      'Service-Area Expansion: Targeted landing pages for neighboring counties and cities',
      'Campaign Support: Ad strategy management for Google Local Services Ads & Meta',
      'Executive Growth Dashboard: Real-time portal monitoring job revenue & active pipelines'
    ],
    visualType: 'tier4-scale',
    speakerNotes: 'Tier 4 is designed for aggressive business expansion. We track ROI down to the exact dollar, optimize landing pages continuously, expand service area landing pages, and provide executive analytics.',
    tagline: 'PREDICTABLE, DATA-DRIVEN REVENUE EXPANSION'
  },
  {
    id: 9,
    title: 'Timeline',
    subtitle: 'Structured 8-Week Phased Execution Plan',
    category: 'ROADMAP & MILESTONES',
    mainMessage: 'A predictable 5-stage roadmap delivering initial brand and website assets within 30 days.',
    bullets: [
      'Week 1 (Discovery): Project kickoff, asset collection, and brand discovery session',
      'Weeks 2–3 (Brand Suite): Vector logo finalization, brand kit, and decal mockups',
      'Weeks 3–5 (Website Launch): Mobile website build, quote engine, and domain launch',
      'Weeks 6–8 (Growth Systems): Google profile optimization, CRM pipeline, & tracking',
      'After Launch (Automation + Scale): AI missed-call triggers, review loops, & optimization'
    ],
    visualType: 'timeline',
    speakerNotes: 'Our timeline is methodical and clear. We launch the Tier 1 Brand & Website foundation in 30 days, then roll out Tier 2 Growth Systems through weeks 6-8, followed by ongoing AI automation and scale.',
    tagline: 'FROM KICKOFF TO DIGITAL DOMINANCE IN 8 WEEKS'
  },
  {
    id: 10,
    title: 'Next Step',
    subtitle: 'Immediate Recommendation & Proposal Sign-Off',
    category: 'ACTIONABLE CLOSE',
    tierBadge: 'PROPOSAL APPROVAL',
    mainMessage: 'We recommend starting with Tier 1 (Launch Foundation) to lock in your brand suite and website immediately.',
    bullets: [
      'Step 1: Approve Tier 1 Launch Foundation ($1,850 Investment)',
      'Step 2: Schedule 45-minute Discovery Session for brand asset intake',
      'Step 3: Receive first vector brand concepts within 7 business days',
      'CTA: Click "Approve Tier 1 Proposal" below to initialize project kickoff'
    ],
    visualType: 'next-step',
    speakerNotes: 'We strongly recommend approving Tier 1 today to secure your timeline. Once approved, NOVAGENTEC schedules the discovery session and delivers your initial vector logo suite within one week. Thank you for your partnership!',
    tagline: 'BUILD YOUR FOUNDATION WITH NOVAGENTEC TODAY'
  }
];

export const PROPOSAL_TIERS: ProposalTier[] = [
  {
    id: 'tier1',
    name: 'Tier 1 — Launch Foundation',
    subtitle: 'Essential Brand Identity & High-Converting Mobile Website',
    recommended: true,
    investment: '$1,850',
    timeline: '3–4 Weeks',
    deliverables: [
      'Complete Vector Logo Suite (Primary badge, decal & icon marks)',
      'Brand Style Kit (Typography, colors, vehicle application guide)',
      'Mobile-First Website with Instant 3-Step Quote Request Engine',
      'Social & Google Business Profile branding header assets',
      'Click-to-call & instant SMS lead triggers'
    ],
    businessImpact: [
      'Instant brand authority & trust',
      '+25-40% increase in website lead inquiries',
      'Sub-60 second customer response experience'
    ]
  },
  {
    id: 'tier2',
    name: 'Tier 2 — Growth Infrastructure',
    subtitle: 'Local SEO, CRM Pipeline & Review Automation System',
    investment: '$2,750',
    timeline: '5–6 Weeks',
    deliverables: [
      'Everything in Tier 1',
      'Google Business Profile local Pack Top-3 optimization',
      'Custom CRM Sales Pipeline Board (Track quotes -> jobs -> paid)',
      'Automated SMS 5-Star Review & Referral engine',
      'Call & lead attribution tracking dashboard'
    ],
    businessImpact: [
      '+30-50% close rate on submitted estimates',
      '+20-30% increase in scheduled hauling jobs',
      'Consistent organic review growth on Google'
    ]
  },
  {
    id: 'tier3',
    name: 'Tier 3 — AI Automation Options',
    subtitle: '24/7 Instant Missed-Call Recovery & AI Quote Nurture',
    investment: '$3,850',
    timeline: '6–8 Weeks',
    deliverables: [
      'Everything in Tiers 1 & 2',
      'Instant Missed-Call Text-Back responder (<30 seconds)',
      'AI Quote Intake assistant extracting customer haul requirements',
      'Automated multi-step SMS follow-up sequences (24h/48h)',
      'Interactive online calendar booking for site estimates'
    ],
    businessImpact: [
      'Zero missed leads when operating heavy equipment',
      'Response time under 2 minutes 24/7',
      '+15-25% increase in job show-up & conversion'
    ]
  },
  {
    id: 'tier4',
    name: 'Tier 4 — Scale & Optimization',
    subtitle: 'Executive Analytics, Service Area Expansion & CRO',
    investment: '$4,950',
    timeline: 'Ongoing / 8+ Weeks',
    deliverables: [
      'Everything in Tiers 1, 2 & 3',
      'Monthly Executive Growth & ROI reporting dashboard',
      'Conversion Rate Optimization (CRO) & A/B testing',
      'Service-area multi-city landing pages (Tampa, Pinellas, Pasco)',
      'Google Local Services Ads & Meta campaign strategy'
    ],
    businessImpact: [
      'Predictable, scalable monthly job volume',
      'Maximum return on ad spend (ROAS)',
      'Complete operational clarity across all service counties'
    ]
  }
];
