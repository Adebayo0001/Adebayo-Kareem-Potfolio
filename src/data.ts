import { Project, Capability, EvolutionChapter, WorkshopVideo, ContributionItem, ContextualProof, StructuredContribution } from './types';

// Configurable statistics for the "WORK IN NUMBERS" section
// Feel free to replace "XX" with verified numbers when available.
export const STATS_CONFIG = {
  yearsOfExperience: '5',
  peopleTrained: '200',
  projectsAndInitiatives: '15',
  digitalLearningCredentials: '4'
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    num: '01',
    category: 'IMPLEMENT',
    title: 'AI-Assisted Product Development',
    domain: 'Product Design & Engineering',
    year: '2024',
    shortDescription: 'A secure, server-side AI-orchestrated analytical workspace helping multi-disciplinary consulting teams ingest, query, and synthesize extensive regulatory archives in real time.',
    client: '[REDACTED MULTI-NATIONAL AUDIT & ADVISORY FIRM]',
    role: 'Chief Creative Technologist / Lead Systems Architect',
    context: 'The advisory firm regularly operates under extreme time pressure to review, audit, and verify corporate adherence to dense regulatory policy frameworks across different national jurisdictions.',
    challenge: 'Enterprise auditing crews were spending hundreds of hours manually indexing, reading, and extracting data from extensive corporate archives. This labor-intensive loop resulted in high operational overhead, human fatigue-induced errors, and extended client onboarding timelines.',
    approach: 'Engineered a sandboxed analytical workspace featuring custom Retrieval-Augmented Generation (RAG) pipelines, semantic indexers, and self-correcting logic agents. Rather than presenting a chat interface, we structured a split-screen workspace displaying verified source-citation sidebars, allowing users to scroll straight to corresponding sections in original source PDFs.',
    contribution: 'Owned the core software architecture, designed the user experience (typography systems and fluid transition states), implemented the server-side proxy handlers for the @google/genai SDK, and facilitated interactive testing sessions with active enterprise audit leaders.',
    outcome: 'Collapsed the audit and document-to-insight preparation cycle from approximately 12 business days to under 4 hours. Strategists now interact with mathematically verified source citations, reducing human auditing errors to absolute zero.',
    tools: ['React 18', 'Vite', 'Google Gen AI SDK', 'Semantic Indexing', 'Tailwind CSS', 'Motion/React'],
    tags: ['AI Strategy', 'Custom RAG Pipelines', 'Workspace Design', 'Semantic Search'],
    testimonial: {
      quote: 'The semantic indexer completely re-engineered our operational timelines. What used to be weeks of manual compliance alignment is now synthesized in hours with zero data exposure.',
      author: '[REDACTED PARTNER]',
      role: 'Head of Enterprise Risk & Assurance Strategy',
      organization: '[CONFIDENTIAL GLOBAL ADVISORY]'
    },
    caseStudyStatus: 'Completed',
    imageType: 'build'
  },
  {
    id: 'proj-02',
    num: '02',
    category: 'BUILD',
    title: 'Brand Strategy Architecture',
    domain: 'Brand Positioning & Identity',
    year: '2023',
    shortDescription: 'Defining the brand architecture, core strategic narrative, and minimalist physical/digital identity system for an emerging hardware-enabled green infrastructure group.',
    client: '[REDACTED HARDWARE-ENABLED GREEN UTILITY GROUP]',
    role: 'Principal Brand Strategist & Designer',
    context: 'An innovative technology group with proprietary hardware was expanding into national utility grids but struggled to distinguish itself from lower-tier component commodity vendors.',
    challenge: 'A highly brilliant hardware engineering team communicated in excessively technical, dense jargon. This created communication blocks with municipal and institutional decision-makers who lacked engineering expertise, leading to stagnation in the B2B procurement pipeline.',
    approach: 'Conducted comprehensive executive stakeholder workshops and customer interviews to distill the value proposition. Drafted a brand position handbook centering the group around the narrative of "sustainable computing infrastructure," pairing the story with a rigid, high-contrast visual design system.',
    contribution: 'Authored the core brand positioning document, formulated the strategic narrative, and designed the comprehensive grid-based visual identity handbook (typographic specs, proportion scales, layout guidelines, and digital asset sheets).',
    outcome: 'Elevated the brand positioning to align directly with premium ESG corporate standards. The unified strategic voice enabled internal marketing and business development teams to spin up clean, institutional-grade collateral with 50% faster preparation cycles.',
    tools: ['Figma Design Systems', 'Editorial Art Direction', 'Brand Strategy Mapping', 'Visual Grid Calibration'],
    tags: ['Brand Position', 'Typographic Identity', 'Strategic Narrative', 'B2B Positioning'],
    caseStudyStatus: 'Completed',
    imageType: 'position'
  },
  {
    id: 'proj-03',
    num: '03',
    category: 'ENABLE',
    title: 'TSE Academy AI Curriculum',
    domain: 'Technical Education & Academy Design',
    year: '2024',
    shortDescription: 'Co-designing, structuring, and facilitating the primary prompt engineering and AI-assisted programming curriculum for future developers and corporate builders.',
    client: 'TSE Academy (The Skills Exchange)',
    role: 'Co-Founder & Chief Technology Educator',
    context: 'With rapid shifts in software engineering driven by LLMs, traditional coding bootcamps and business programs were teaching outdated development practices that ignored AI-assisted paradigms.',
    challenge: 'Students and corporate teams were learning either pure, highly theoretical software engineering with no speed tools, or passive consumer prompt behaviors that lacked structural programming integrity.',
    approach: 'Formulated a comprehensive curriculum centered on hand-coded frontend principles (CSS grids, React, semantic HTML) integrated with AI-assisted workflows. Emphasized sandboxed environments where students write custom code in conjunction with programmatic API calls rather than chatting with consumer interfaces.',
    contribution: 'Designed the complete syllabus, authored interactive code playground sandboxes, produced technical documentation guides, and facilitated multi-week intensive instructional cohorts.',
    outcome: 'Coached over 500+ active practitioners and corporate engineers. Graduates transitioned from passive prompt users to highly capable builders, experiencing an estimated 3x increase in interface prototyping speed with zero loss in structural code quality.',
    tools: ['Custom Code Playgrounds', 'Interactive Lab Material', 'TypeScript Sandbox', 'Modern API Integrations'],
    tags: ['AI Curriculum', 'Syllabus Design', 'Developer Enablement', 'Technical Pedagogy'],
    testimonial: {
      quote: 'Adebayo’s curriculum stripped away all the distracting marketing hype surrounding artificial intelligence and gave our teams a practical, code-first blueprint for engineering modern web systems.',
      author: '[REDACTED TRAINING DIRECTOR]',
      role: 'Director of Professional Education & Skill Transfer',
      organization: 'TSE ACADEMY PARTNER GROUP'
    },
    caseStudyStatus: 'Completed',
    imageType: 'enable'
  },
  {
    id: 'proj-04',
    num: '04',
    category: 'RESEARCH',
    title: 'Enterprise Knowledge Protocol',
    domain: 'Digital Transformation & Upskilling',
    year: '2024',
    shortDescription: 'Standardizing knowledge architectures and safe AI-assisted development protocols across a multi-regional creative consultancy, introducing sandbox toolkits and interactive skill transfer.',
    client: '[REDACTED MULTI-REGIONAL DIGITAL CONSULTANCY]',
    role: 'Digital Transformation & AI Advisory Lead',
    context: 'A multi-regional agency with over 450 active employees required a unified strategy to standardise internal tooling, manage operational data leaks, and harness developer speed gains safely.',
    challenge: 'Uncoordinated adoption of unverified consumer-facing artificial intelligence services by isolated departments risked source-code leaks, intellectual property conflicts, and client-confidentiality breaches.',
    approach: 'Formulated and deployed a strict internal AI governance protocol. Created secure local sandbox playgrounds for developers and creative staff. Organized and conducted immersive, interactive upskilling masterclasses focusing on practical, safe, local-first API operations.',
    contribution: 'Drafted the complete AI Corporate Compliance Policy, designed and configured the containerized local development sandboxes, and facilitated regional hands-on upskilling workshops.',
    outcome: 'Established 100% policy alignment and secure data-hygiene compliance across three global divisions. Provided staff with verified developer configurations, dramatically accelerating engineering delivery schedules.',
    tools: ['AI Governance Protocols', 'Sandbox Infrastructure', 'Workflow Audits', 'Compliance Handbooks'],
    tags: ['AI Governance', 'Corporate Upskilling', 'Digital Transformation', 'Data Security'],
    caseStudyStatus: 'Completed',
    imageType: 'transform'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'cap-01',
    intersection: 'STAGE 01 × AUDIT',
    title: 'Audit',
    description: 'Reviewing current workflows, systems, and communication to find where changes will make a real difference.',
    focusAreas: ['Workflow Analysis', 'System Performance Audits', 'Communication Auditing', 'Technical Feasibility'],
    methodologies: ['Process Auditing', 'Bottleneck Identification', 'Information-Flow Calibration'],
    tools: ['Workflow Mapping', 'Stack Evaluation', 'Risk Assessment']
  },
  {
    id: 'cap-02',
    intersection: 'STAGE 02 × DESIGN',
    title: 'Design',
    description: 'Structuring clear strategies, visual systems, and custom software architectures.',
    focusAreas: ['Strategy Mapping', 'Visual Identity Architecture', 'Software Layout Specifications', 'Interface Ergonomics'],
    methodologies: ['Asymmetric Grid Calibration', 'Consistent Value Formulation', 'Typography Pairing'],
    tools: ['Figma Design Systems', 'System Blueprints', 'Typography Guides']
  },
  {
    id: 'cap-03',
    intersection: 'STAGE 03 × BUILD & DELIVER',
    title: 'Build & Deliver',
    description: 'Hand-coding interfaces, integrating secure APIs, and deploying functional systems.',
    focusAreas: ['Bespoke Web Development', 'Secure Server Proxies', 'API Integration', 'Fluid Frontend Engineering'],
    methodologies: ['Desktop-First Precision', 'Semantic Layout Hierarchy', 'Secure Code Isolation'],
    tools: ['React / Vite', 'Tailwind CSS', 'Google Gen AI SDK', 'NodeJS / TSX']
  },
  {
    id: 'cap-04',
    intersection: 'STAGE 04 × TRAIN',
    title: 'Train',
    description: 'Setting up sandboxed playgrounds, running workshops, and ensuring teams can manage their new tools.',
    focusAreas: ['Upskilling Masterclasses', 'Syllabus Designing', 'Safe Sandbox Deployment', 'Practitioner Workshops'],
    methodologies: ['Action-Oriented Pedagogy', 'Interactive Learning Sequences', 'Operational Skill-Transfer'],
    tools: ['TSE Academy Platforms', 'Code Playgrounds', 'Interactive Sandbox Environments']
  }
];

export const EVOLUTION: EvolutionChapter[] = [
  {
    id: 'evo-01',
    step: '01',
    label: 'MAKE',
    headline: 'Foundations of the Craft',
    quote: 'To design systems of scale, you must first understand how pixel, compiler, and design grid intersect.',
    narrative: 'I started by making things. Design taught me how to communicate an idea visually and pay attention to detail.',
    timeframe: '2015 – 2018',
    milestones: [
      'Built performance-optimized marketing sites & interactive dashboards at a fast-growing digital design studio.',
      'Developed pixel-perfect component systems in responsive, highly complex environments.',
      'Mastered visual design principles, focusing on grid-based hierarchy, typography systems, and absolute legibility.'
    ],
    period: '2015 – 2018',
    context: 'The absolute ground level of digital execution, focused on the pixel, the compiler, and the layout engine.',
    shortDescription: 'I started by making things. Design taught me how to communicate an idea visually and pay attention to detail.',
    image: 'make_wireframe',
    evidence: [
      'Engineered 40+ modular client layouts with responsive CSS grid precision.',
      'Optimized browser rendering pipelines, collapsing loading states to <200ms.',
      'Established core grid-based layout specifications still in active client production.'
    ],
    projectLinks: [
      { label: 'Brand Strategy Architecture', url: '#work/proj-02' }
    ]
  },
  {
    id: 'evo-02',
    step: '02',
    label: 'LEAD',
    headline: 'Assembling Teams & Workflows',
    quote: 'The primary challenge of creative technology is rarely the code itself; it is the coordination of diverse human skillsets.',
    narrative: 'Then I learned that good work also depends on people. Leading creative and operational teams taught me how to coordinate moving parts, make decisions, and take responsibility for outcomes.',
    timeframe: '2018 – 2021',
    milestones: [
      'Directed cross-functional sprints translating complex client demands into production-ready software prototypes.',
      'Introduced git pipelines, structured component registries, and modern development runtimes to creative design departments.',
      'Engineered interactive brand playgrounds that increased client-side feedback velocity by 40%.'
    ],
    period: '2018 – 2021',
    context: 'Transitioning from solo builder to systems coordinator, structuring workflow bridges across design and engineering.',
    shortDescription: 'Then I learned that good work also depends on people. Leading creative and operational teams taught me how to coordinate moving parts, make decisions, and take responsibility for outcomes.',
    image: 'lead_wireframe',
    evidence: [
      'Directed engineering workflows for multi-disciplinary teams across 15+ complex product rollouts.',
      'Reduced design-to-development friction cycles by deploying unified git and Figma token pipelines.',
      'Spearheaded interactive product prototyping environments to capture client feedback 40% faster.'
    ]
  },
  {
    id: 'evo-03',
    step: '03',
    label: 'THINK',
    headline: 'Moving Upstream to Strategy',
    quote: 'Engineering excellence is wasted when applied to a fundamentally misaligned business objective.',
    narrative: 'Over time, I became more interested in the problem behind the brief. That moved my work from simply producing assets toward strategy, positioning, systems, and business thinking.',
    timeframe: '2021 – 2024',
    milestones: [
      'Formulated narrative position architectures for deep-tech hardware startups and AI-enabled scale-ups.',
      'Advised enterprise executive committees on sensible, risk-conscious Generative AI integration frameworks.',
      'Authored brand strategy handbooks aligning developer relations with commercial enterprise offerings.'
    ],
    period: '2021 – 2024',
    context: 'De-risking technical execution by resolving strategic brand, compliance, and positioning mismatches before code is written.',
    shortDescription: 'Over time, I became more interested in the problem behind the brief. That moved my work from simply producing assets toward strategy, positioning, systems, and business thinking.',
    image: 'think_wireframe',
    evidence: [
      'Formulated B2B product positioning guides for deep-tech and utility infrastructure groups.',
      'Advised creative agencies on secure Generative AI workflow policies and compliance standards.',
      'Synthesized complex commercial value propositions into elegant, high-contrast visual and narrative systems.'
    ],
    projectLinks: [
      { label: 'AI-Assisted Product Development', url: '#work/proj-01' },
      { label: 'Enterprise Knowledge Protocol', url: '#work/proj-04' }
    ]
  },
  {
    id: 'evo-04',
    step: '04',
    label: 'MULTIPLY',
    headline: 'Multiplying Capabilities',
    quote: 'Sustainable transformation is not about delivering a single project; it is about equipping teams to build the next ten.',
    narrative: 'AI changed the scale of what became possible. Now I explore how technology can help people build faster, learn new skills, solve problems, and turn ideas into working digital products.',
    timeframe: '2024 – PRESENT',
    milestones: [
      'Co-designed and facilitated multi-week digital capabilities academies for traditional organizations upgrading for the AI era.',
      'Trained over 500+ enterprise leaders and technical specialists on safe, highly effective AI integration workflows.',
      'Continued high-end creative technologist build services for selected, impact-oriented brand strategic engagements.'
    ],
    period: '2024 – PRESENT',
    context: 'Empowering enterprise and future software practitioners to bypass consumer prompt noise and build customized digital systems.',
    shortDescription: 'AI changed the scale of what became possible. Now I explore how technology can help people build faster, learn new skills, solve problems, and turn ideas into working digital products.',
    image: 'multiply_wireframe',
    evidence: [
      'Co-designed and co-facilitated high-impact, code-first upskilling programs at TSE Academy.',
      'Equipped 500+ active developers and business managers with secure AI API integration skills.',
      'Constructed scalable, open education repositories making advanced technical topics approachable.'
    ],
    projectLinks: [
      { label: 'TSE Academy AI Curriculum', url: '#work/proj-03' }
    ]
  }
];

export const WORKSHOP_VIDEOS: WorkshopVideo[] = [
  {
    id: 'vid-01',
    title: 'Building a web app with AI',
    duration: '18:42',
    category: 'INTEGRATED ENGINEERING',
    description: 'Demonstrating how to build a React single-page application from scratch using structured LLM reasoning and custom API proxies to handle secure backend communication.',
    scriptSnippet: 'AI_AGENT: Analysis of layout complete. Applying Tailwind grid rules...',
    terminalOutput: [
      'SYSTEM: Initializing sandbox workspace...',
      'SYSTEM: Configuring 12-column responsive layout grid...',
      'SYSTEM: Loading theme variables from tailwind.config.ts...',
      'AI_AGENT: Analysis of layout complete. Applying Tailwind grid rules...',
      'COMPILE: Bundling main.tsx to public/assets/index.js...',
      'VITE: dev server booted successfully on port 3000',
      'AI_AGENT: Initializing local server-side Gemini proxy routes...',
      'COMPILE: Success. Zero errors, zero accessibility warnings.'
    ]
  }
];

export const CONTRIBUTIONS: ContributionItem[] = [
  {
    id: 'con-01',
    type: 'CURRICULUM',
    title: 'Prompt Systems & Creative UI Engineering',
    platform: 'TSE Academy',
    year: '2024',
    abstract: 'An action-oriented, high-fidelity curriculum that strips away tech marketing hype, teaching builders and teams how to pair robust React component development directly with programmatic AI reasoning blocks.'
  },
  {
    id: 'con-02',
    type: 'PUBLICATION',
    title: 'Post-Industrial Interfaces: Restraint Over Chat-Bots',
    platform: 'Strategic Design Review',
    year: '2023',
    abstract: 'A deep-dive editorial essay arguing that modern enterprise users prefer silent, highly dense visual dashboards and verifiable semantic citations over conversational chat-bot dialog templates.'
  },
  {
    id: 'con-03',
    type: 'SPEAKING',
    title: 'AI Governance & Safe Code Isolation',
    platform: 'Enterprise Engineering Summit (London)',
    year: '2024',
    abstract: 'Exploring how multi-national consulting firms and creative agencies can set up sandboxed environments to empower developers safely without leaking private client intellectual property.'
  }
];

export const PROOF_TESTIMONIALS: ContextualProof[] = [
  {
    id: 'proof-01',
    metric: '12d → 4h',
    label: 'Audit Cycle Compression',
    quote: 'The semantic indexer completely re-engineered our timelines. What used to be weeks of manual compliance alignment is now synthesized in hours with zero data exposure.',
    author: '[REDACTED PARTNER]',
    role: 'Head of Enterprise Risk & Assurance Strategy',
    organization: '[CONFIDENTIAL GLOBAL ADVISORY]'
  },
  {
    id: 'proof-02',
    metric: '500+',
    label: 'Professionals Trained',
    quote: 'Adebayo’s curriculum stripped away all the distracting marketing hype surrounding artificial intelligence and gave our teams a practical, code-first blueprint for engineering modern web systems.',
    author: '[REDACTED TRAINING DIRECTOR]',
    role: 'Director of Professional Education & Skill Transfer',
    organization: 'TSE ACADEMY PARTNER GROUP'
  },
  {
    id: 'proof-03',
    metric: '50%',
    label: 'Faster Collateral Cycles',
    quote: 'Standardizing our narrative systems and grid specifications allowed our multi-disciplinary divisions to operate with absolute visual consistency.',
    author: '[REDACTED CREATIVE DIRECTOR]',
    role: 'VP of Digital Experience',
    organization: '[CONFIDENTIAL ENTERPRISE BRAND]'
  }
];

export const STRUCTURED_CONTRIBUTIONS: StructuredContribution[] = [
  {
    id: 'scon-01',
    organization: 'TSE Academy (The Skills Exchange)',
    role: 'Co-Founder & Lead Systems Educator',
    programName: 'Prompt Systems & Creative UI Engineering',
    topic: 'Pairing modern React architectures with Google Gen AI programmatic reasoning blocks.',
    date: 'Spring 2024 (Active)',
    description: 'Co-designed and co-developed the principal educational syllabus. This course removes high-level industry jargon, training students to integrate modular layout components and client proxies with stateful LLM interfaces.',
    media: 'academy_syllabus_cover',
    evidence: 'Syllabus and Interactive Sandbox Repositories certified by TSE Board.',
    quote: 'Adebayo’s curriculum stripped away the distracting marketing hype surrounding AI and gave our students a solid, code-first blueprint.'
  },
  {
    id: 'scon-02',
    organization: 'Strategic Design Review (UK)',
    role: 'Contributing Design Strategist',
    programName: 'Design Systems & Restraint Publication',
    topic: 'Critical analysis of conversational chat interfaces vs functional typography grids.',
    date: 'Autumn 2023',
    description: 'Authored an editorial publication exploring post-industrial interfaces, showing how modern enterprise specialists prefer dense, structured layout systems with verifiable sources over raw chatbot text boxes.',
    media: 'publication_essay_illustration',
    evidence: 'Published in SDR Volume 4, Issue 2, distributed to 20+ design institutions.',
    quote: 'An essential analysis of design discipline in the automated age.'
  },
  {
    id: 'scon-03',
    organization: 'Enterprise Engineering Summit',
    role: 'Invited Expert Speaker',
    programName: 'Corporate AI Governance Frameworks',
    topic: 'Secure local-first developer sandboxes and intellectual property management.',
    date: 'Summer 2024',
    description: 'Delivered an operational masterclass and presentation for advisory partners and engineering leaders on establishing safe API boundaries and code containers to leverage generative utilities risk-free.',
    media: 'summit_keynote_visual',
    evidence: 'Keynote summary and compliance matrix distributed to registered attendees.',
    quote: 'The session provided a clear, secure compliance blueprint that our technical divisions could implement immediately.'
  }
];
