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
    id: 'proj-smart-call',
    num: '01',
    category: 'BUILD',
    title: 'Smart Call Monitor: An AI Assistant for Customer Service Teams',
    domain: 'Voice AI & Customer Operations',
    year: '2024',
    shortDescription: 'Smart Call Monitor (built for PulseAI) is an automated platform for businesses managing remote teams that securely records calls and messages, using AI to transcribe, summarize, take notes, and grade conversations effortlessly.',
    client: 'PulseAI / Smart Call Monitor',
    role: 'Lead AI Systems Architect & Full-Stack Engineer',
    context: 'Smart Call Monitor was built as an all-in-one platform for businesses that manage remote or field-based customer service and sales teams. It was designed to act as an automated assistant that securely records calls and messages, and then uses Artificial Intelligence (AI) to listen, take notes, and grade how well those conversations went, making the management of a remote team effortless.',
    challenge: 'When a business relies on a remote team making phone calls or sending WhatsApp messages to customers, managers face critical operational pain points: (1) Flying Blind with no visibility into phone conversations, (2) Too Much Audio with no time to manually listen to hours of recordings, (3) Missed Follow-ups & Unhappy Customers slipping through the cracks without immediate manager escalation, and (4) Scattered Information dispersed across cellular voice calls and WhatsApp chat threads.',
    approach: 'Developed a seamless system that automated the heavy lifting. The solution automatically captured conversations happening on company phones and immediately turned them into easy-to-read reports on a central dashboard. By integrating advanced Gemini AI, the platform acted like an invisible manager that instantly read, summarized, and scored every single interaction.',
    contribution: 'Architected and built the full-stack web dashboard (Command Center, Call Log with audio playback, Sentiment Analytics, and Export Engine), integrated the Gemini AI processing pipeline for instant transcription and structured scoring, implemented trigger-word alert systems, and designed the responsive, high-contrast dark-mode interface.',
    outcome: 'Completely transformed quality control workflows: instead of manually reviewing only 2% of calls, businesses were empowered to effortlessly review 100% of customer interactions. With AI taking care of listening and transcribing, managers shifted focus entirely toward coaching, business growth, and customer retention.',
    tools: ['Gemini AI API', 'React 18', 'Audio Processing Engine', 'Vercel', 'Tailwind CSS', 'TypeScript', 'Analytics Visualizers'],
    tags: ['Voice AI', 'Customer Operations', 'Gemini API', 'Speech Intelligence', 'QA Automation', 'Executive Dashboard'],
    caseStudyStatus: 'Completed',
    imageType: 'pulseai',
    externalLink: 'https://callmonitor-vert.vercel.app/dashboard/live',
    problemPoints: [
      {
        title: 'Flying Blind',
        desc: 'Managers cannot be everywhere at once. It was hard to know exactly what was being said to customers over the phone.'
      },
      {
        title: 'Too Much Audio, Too Little Time',
        desc: 'Even if calls were recorded, no one had the time to manually sit and listen to hours of audio to figure out who was doing a good job.'
      },
      {
        title: 'Missed Follow-ups & Angry Customers',
        desc: 'Important tasks mentioned on calls could easily slip through the cracks. Even worse, an unhappy customer might threaten to cancel or complain without management knowing until it was too late.'
      },
      {
        title: 'Scattered Information',
        desc: 'Conversations happened over regular phone calls and WhatsApp, making it tough to keep all customer interactions in one organized place.'
      }
    ],
    solutionOverview: 'A seamless system that automates the heavy lifting by capturing conversations on company phones and immediately generating easy-to-read reports on a central dashboard. Advanced AI acts like an invisible manager that instantly reads, summarizes, and scores every interaction.',
    keyFeatures: [
      {
        title: '1. Automatic Note-Taking and Recording',
        desc: 'A background mobile client automatically saves call audio, notes duration, and tags geographic locations.'
      },
      {
        title: '2. AI-Powered Insights',
        desc: 'Generates instant transcripts, summaries, mood detection, and grading scores within seconds of call completion.'
      },
      {
        title: '3. "Red Flag" Alerts for Managers',
        desc: 'Highlights critical calls in red on the dashboard if trigger words like "cancel" or "lawyer" are detected.'
      },
      {
        title: '4. WhatsApp Summaries',
        desc: 'Monitors company WhatsApp chats to deliver brief summaries and actionable to-do lists.'
      },
      {
        title: '5. Manager Command Center',
        desc: 'A central web dashboard to inspect recent calls, track team averages, and play original audio.'
      }
    ],
    behindTheScenes: [
      {
        step: '01',
        title: 'The Call Happened',
        desc: 'An employee talks to a customer on their work phone.'
      },
      {
        step: '02',
        title: 'Automatic Upload',
        desc: 'The moment the call ends, audio is securely transmitted to the cloud pipeline.'
      },
      {
        step: '03',
        title: 'The AI Listened',
        desc: 'Gemini AI processes the audio, types out the conversation, detects sentiment, and grades the call.'
      },
      {
        step: '04',
        title: 'The Dashboard Updated',
        desc: 'The manager logs into the dashboard to find full reports, key takeaways, and action items waiting.'
      }
    ],
    impactStatement: 'Empowered businesses to transition from reviewing just 2% of calls manually to reviewing 100% of customer interactions automatically with AI precision.'
  },
  {
    id: 'proj-03',
    num: '02',
    category: 'ENABLE',
    title: 'TSE Academy: Redefining the Online Learning Experience',
    domain: 'EdTech, AI Mentorship & Pedagogy',
    year: '2024',
    shortDescription: 'TSE Academy is a premium, highly interactive e-learning platform centered around a "learn by building" methodology, featuring 24/7 contextual AI coaching, interactive transcripts, practical understanding checks, and smart installment payments.',
    client: 'TSE Academy (The Skills Exchange)',
    role: 'Founder & Chief Product / Technology Architect',
    context: 'Online learning is broken. Most self-paced courses suffer from dismal completion rates because they rely on passive video consumption. When a learner gets stuck, there is no immediate help—leading to frustration and abandonment. "Stuck is a dead end." Furthermore, traditional platforms use generic multiple-choice quizzes that test rote memorization rather than real-world skills, and often lack flexible payment structures that cater to a global audience. TSE Academy was born out of the need to create a platform where learners are supported 24/7, challenged practically, and given flexible ways to invest in their education.',
    challenge: 'Self-paced courses suffer from severe learner drop-off because students get stuck without immediate help. Generic chatbots fail to understand video and codebase context, video reviewing is tedious, quizzes fail to measure practical competency, and rigid upfront fees block global learners.',
    problemPoints: [
      {
        title: 'Passive Video & Zero Real-Time Help',
        desc: 'When a learner gets stuck on a complex concept or code error, there is no immediate support—leading to frustration and abandonment. "Stuck is a dead end."'
      },
      {
        title: 'Rote Quizzes vs Real-World Skills',
        desc: 'Traditional platforms use generic multiple-choice quizzes that test rote memorization rather than practical problem-solving ability.'
      },
      {
        title: 'Absence of Linear Discipline',
        desc: 'Allowing learners to skip ahead causes cognitive overload, surface-level skimming, and premature course abandonment before fundamentals are mastered.'
      },
      {
        title: 'Rigid Upfront Payment Barriers',
        desc: 'Traditional platforms demand full upfront payments, excluding a massive global audience of eager learners from investing in their education.'
      }
    ],
    approach: 'The goal was to build a premium, highly interactive e-learning platform centered around a "learn by building" methodology. The process involved understanding the learner’s journey where drop-offs occur, integrating AI as a core feature rather than a gimmick, embedding invisible "Industry Context" notes from educators, enforcing strict linear progression with scenario checkpoints, and designing a frictionless 2-part installment payment structure with a sophisticated, focus-driven UI.',
    keyFeatures: [
      {
        title: '1. The 24/7 Personal AI Coach',
        desc: 'An intelligent AI Companion that understands the specific context of lessons and guides students to solve bugs rather than giving copy-paste answers.'
      },
      {
        title: '2. Interactive Video & Transcripts',
        desc: 'Video lessons are accompanied by synchronized transcripts that allow one-click timestamp navigation for efficient review.'
      },
      {
        title: '3. Practical "Understanding Checks"',
        desc: 'Automatically extracts core concepts from videos to generate scenario-based, real-world application tests that enforce true skill mastery.'
      },
      {
        title: '4. Enforced Linear Progression',
        desc: 'A structured, step-by-step learning path that prevents skipping ahead, eliminating cognitive overwhelm.'
      },
      {
        title: '5. Smart 2-Part Installment Payments',
        desc: 'A frictionless global payment system allowing 50% upfront payment with an automated gate at the midpoint.'
      },
      {
        title: '6. Powerful Creator Dashboard',
        desc: 'A backend for educators to track student progress, manage community interactions, and automatically re-index the AI knowledge base.'
      }
    ],
    behindTheScenes: [
      {
        step: '01',
        title: 'Learner Ingests Video & Live Transcripts',
        desc: 'Students stream video lessons with synchronized real-time transcripts and interactive timestamp scrubbers.'
      },
      {
        step: '02',
        title: 'Contextual AI Mentor Intervenes',
        desc: 'When stuck, the student invokes the 24/7 AI Coach, which references the exact timestamp transcript and industry notes to guide them.'
      },
      {
        step: '03',
        title: 'Scenario Understanding Check',
        desc: 'Upon video completion, the system presents an interactive real-world scenario challenge that must be passed to unlock Module 2.'
      },
      {
        step: '04',
        title: 'Mastery Progression & Installment Gate',
        desc: 'The next module unlocks seamlessly, with the automated 50% installment gate pausing progress at the midpoint until balance settlement.'
      }
    ],
    contribution: 'Led the comprehensive platform conception, user experience design system, full-stack architecture, transcript synchronization algorithms, 24/7 AI mentor prompt engineering with industry context injection, and installment payment checkout flows.',
    outcome: 'TSE Academy bridges the gap between affordable self-paced courses and expensive, high-touch bootcamps. By combining the scale of video learning with the personalized mentorship of AI, the platform dramatically reduces learner drop-off, validates true skill acquisition through practical testing, increases conversions via installment plans, and empowers creators to deliver high-touch mentorship without manual hand-holding.',
    impactStatement: 'Bridges the gap between affordable self-paced courses and high-touch bootcamps: eliminated "stuck is a dead end" drop-offs, enforced 100% mastery progression, and expanded global enrollment with smart 2-part installment plans.',
    tools: ['React 18', 'TypeScript', 'Google Gemini AI', 'Interactive Video Transcripts', 'Linear Progression Engine', 'Installment Payment Gateways', 'Tailwind CSS', 'Motion/React'],
    tags: ['AI Mentorship', 'EdTech Platform', 'Interactive Transcripts', 'Mastery Learning', 'Full-Stack Architecture'],
    testimonial: {
      quote: 'TSE Academy redefined our educational delivery. Students never get stuck because the 24/7 AI Coach understands our exact lessons, and our course completion rates have surged.',
      author: 'Adebayo Kareem',
      role: 'Lead Instructor & AI Strategist',
      organization: 'TSE ACADEMY'
    },
    caseStudyStatus: 'Completed',
    imageType: 'tseacademy'
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
    role: 'Founder & Lead Systems Educator',
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
