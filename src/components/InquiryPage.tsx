import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, CheckCircle2, Send, RefreshCw, ChevronDown, Layers, Sparkles, Check, Zap, Target, Cpu, Clock, ShieldCheck } from 'lucide-react';

interface InquiryPageProps {
  initialInterestId: string | null;
  onBack: () => void;
}

interface CategoryDetail {
  id: string;
  label: string;
  headline: string;
  tagline: string;
  description: string;
  themeColor: string;
  badge: string;
  deliverables: string[];
  capabilities: { title: string; desc: string }[];
  idealFor: string[];
  sla: string;
  options: string[];
}

const CATEGORIES: Record<string, CategoryDetail> = {
  ai: {
    id: 'ai',
    label: '01 / PUT AI TO WORK',
    headline: "AI STRATEGY & DEPLOYMENT INQUIRY",
    tagline: "Pragmatic, high-impact artificial intelligence architecture and server-side agent integration.",
    description: "Map out practical, high-impact spots to deploy artificial intelligence and custom LLM agent systems inside your company workflows with strict privacy safeguards.",
    themeColor: '#FFB404',
    badge: 'AI SYSTEMS & AUTOMATION',
    sla: 'Initial Assessment within 24–48 Hours',
    deliverables: [
      'Comprehensive AI Feasibility & Opportunity Audit',
      'Sandboxed Retrieval-Augmented Generation (RAG) Setup',
      'Server-Side Multi-Model Integration (Gemini, OpenAI)',
      'Custom Autonomous Agent Workflows & Automation Loops',
      'Strict Enterprise Data Privacy & Security Governance'
    ],
    capabilities: [
      { title: 'Semantic Search & RAG', desc: 'Transform large document libraries into instant, source-verified conversational search engines.' },
      { title: 'Workflow Automation', desc: 'Replace redundant operational steps with resilient autonomous LLM pipelines.' },
      { title: 'Custom AI Internal Tools', desc: 'Tailored web interfaces connecting teams directly to intelligent API endpoints.' }
    ],
    idealFor: [
      'Founders scaling operations without multiplying headcount',
      'Product teams embedding intelligent features into existing software',
      'Enterprises seeking privacy-first internal AI search & synthesis'
    ],
    options: [
      'AI Strategy & Opportunity Mapping',
      'LLM / Generative AI Integration (Gemini, OpenAI)',
      'Workflow Automation & Process Optimization',
      'Custom Internal AI Tools & Search Interfaces',
      'Tailored AI Agent Workflows'
    ]
  },
  'digital-product': {
    id: 'digital-product',
    label: '02 / BUILD YOUR DIGITAL IDEA',
    headline: "CUSTOM DIGITAL PRODUCT MVP INQUIRY",
    tagline: "End-to-end design, rapid prototyping, and production-grade full-stack engineering.",
    description: "Launch your custom digital product or MVP. Let's design, prototype, and build a scalable production-ready web application with modern web stacks.",
    themeColor: '#4F46E5',
    badge: 'FULL-STACK PRODUCT ENGINEERING',
    sla: 'Sprint Roadmap Delivered in 48 Hours',
    deliverables: [
      'Interactive Figma Prototypes & Design Systems',
      'Clean React + TypeScript + Tailwind Web Application',
      'Secure Server-Side Backend Architecture & APIs',
      'Cloud Persistence (Firestore / PostgreSQL) Integration',
      'Performance Optimization & Production Deployment'
    ],
    capabilities: [
      { title: 'Rapid MVP Prototyping', desc: 'Go from concept to clickable, interactive high-fidelity prototype in days.' },
      { title: 'Scalable Full-Stack Web Apps', desc: 'Robust React + Vite + Node architecture engineered for speed and maintainability.' },
      { title: 'Design System Architecture', desc: 'Mathematical typographic scales, fluid responsive grids, and accessible components.' }
    ],
    idealFor: [
      'Founders preparing to raise capital or launch to early adopters',
      'Businesses replacing fragmented spreadsheet systems with modern web apps',
      'Teams requiring a senior engineer & designer to execute fast'
    ],
    options: [
      'Custom Web App MVP Development',
      'UX/UI Design & Interactive Prototyping',
      'API Development & Systems Integration',
      'Database Architecture & Scalability Planning',
      'Platform Redesign / Legacy Migration'
    ]
  },
  training: {
    id: 'training',
    label: '03 / BUILD DIGITAL CAPABILITY',
    headline: "TEAM UPSKILLING & TRAINING WORKSHOP",
    tagline: "Action-oriented pedagogy, live keynotes, prompt engineering masterclasses, and code sandboxes.",
    description: "Empower your engineering teams, design teams, or executives to master generative AI prompt engineering, AI-assisted development paradigms, and modern software engineering stacks.",
    themeColor: '#10B981',
    badge: 'TECHNICAL ENABLEMENT & KEYNOTES',
    sla: 'Curriculum Tailored to Your Stack in 3 Business Days',
    deliverables: [
      'Tailored Hands-On AI Prompt Engineering Curriculum',
      'Live Keynote Presentations & Interactive Masterclasses',
      'Sandboxed Code Playgrounds & Real-World Lab Exercises',
      'Executive 1-on-1 AI Leadership Coaching Sessions',
      'Permanent Reference Documentation & Best-Practice Playbooks'
    ],
    capabilities: [
      { title: 'Prompt Engineering & Workflow Mastery', desc: 'Move beyond basic chat tools to programmatic API utilization and structured output generation.' },
      { title: 'AI-Assisted Software Development', desc: 'Train engineers on pair-programming techniques with modern developer tooling.' },
      { title: 'Executive Technology Briefings', desc: 'Strategic, hype-free landscape analysis for decision-makers and division heads.' }
    ],
    idealFor: [
      'Engineering departments transitioning to AI-assisted coding paradigms',
      'Product & Design teams looking to accelerate rapid wireframing & research',
      'Conferences and executive summits seeking engaging keynote sessions'
    ],
    options: [
      'Generative AI & Prompt Engineering Workshops',
      'Modern Frontend/Backend Web Stack Upskilling',
      'Strategic Tech Executive Coaching (1-on-1)',
      'Custom Curriculum Development & Training Documentation'
    ]
  },
  advisory: {
    id: 'advisory',
    label: '04 / THINK THROUGH THE NEXT MOVE',
    headline: "TECHNICAL ADVISORY & ARCHITECTURE WORKSPACE",
    tagline: "Fractional CTO leadership, stack verification, architectural audits, and risk mitigation.",
    description: "Formulate your next technological leap. Leverage fractional CTO leadership, architectural evaluations, vendor selection advice, and deep tech strategy.",
    themeColor: '#EC4899',
    badge: 'FRACTIONAL CTO & STRATEGY',
    sla: 'Confidential Audit Scope in 24 Hours',
    deliverables: [
      'Full-Stack Architecture & Codebase Health Audit',
      'Technology Stack Selection & Migration Roadmaps',
      'Vendor & Third-Party API Capability Verification',
      'Technical Due Diligence & Feasibility Assessments',
      'Bi-Weekly Strategic Leadership Sprints & Advisory Calls'
    ],
    capabilities: [
      { title: 'Architecture & System Audits', desc: 'Identify bottlenecks, security blindspots, and scalability limits before they become costly.' },
      { title: 'Fractional CTO Guidance', desc: 'Executive-level technical direction without the full-time C-suite overhead.' },
      { title: 'Vendor & Tooling Due Diligence', desc: 'Unbiased evaluation of third-party platforms, APIs, and infrastructure partners.' }
    ],
    idealFor: [
      'Non-technical founders needing trusted senior guidance on technical roadmaps',
      'Growth companies scaling infrastructure to handle enterprise volume',
      'Investors and executives evaluating software assets and technical risks'
    ],
    options: [
      'Technical Architecture & Stack Review',
      'Product Strategy & Roadmap Verification',
      'Interim CTO / Technology Leadership Advisory',
      'Technical Feasibility & Risk Assessments',
      'Vendor Selection & Evaluation'
    ]
  }
};

const START_TIMES = [
  { value: 'asap', label: 'As soon as possible' },
  { value: 'next-30-days', label: 'The next 30 days' },
  { value: 'next-quarter', label: 'Next quarter / Flexible' },
  { value: 'later-this-year', label: 'Later in the year' }
];

const TEAM_SIZES = [
  { value: 'just-me', label: 'Just me' },
  { value: '2-10', label: '2 to 10' },
  { value: '11-50', label: '11 to 50' },
  { value: '51-200', label: '51 to 200' },
  { value: 'more-than-200', label: 'More than 200' }
];

export default function InquiryPage({ initialInterestId, onBack }: InquiryPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>(initialInterestId || 'ai');
  
  // Custom unique category form states
  const [selectedService, setSelectedService] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('');

  // Contact States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'IDLE' | 'TRANSMITTING' | 'SUCCESS'>('IDLE');
  const [formLogs, setFormLogs] = useState<string[]>([]);

  const activeCategory = CATEGORIES[activeTab] || CATEGORIES.ai;

  // Sync state if initialInterestId changes
  useEffect(() => {
    if (initialInterestId && CATEGORIES[initialInterestId]) {
      setActiveTab(initialInterestId);
      setSelectedService('');
      setStartTime('');
      setTeamSize('');
    }
  }, [initialInterestId]);

  // Handle activeTab changes
  useEffect(() => {
    setSelectedService('');
  }, [activeTab]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedService || !startTime || !teamSize) return;

    setSubmitStatus('TRANSMITTING');
    setFormLogs([`[SYSTEM] Opening direct transmission tunnel for: ${activeCategory.id.toUpperCase()}...`]);

    setTimeout(() => {
      setFormLogs((prev) => [
        ...prev,
        `[INTEGRITY] Routing specific requirement: "${selectedService}"`,
        `[METRICS] Start Window: "${startTime}" | Team Size: "${teamSize}"`,
        '[DELIVERY] Secure direct transmission validated. Adebayo will review soon.'
      ]);
      setSubmitStatus('SUCCESS');
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSelectedService('');
    setStartTime('');
    setTeamSize('');
    setSubmitStatus('IDLE');
    setFormLogs([]);
  };

  const animY = (amount: number) => (shouldReduceMotion ? 0 : amount);
  const animDuration = (duration: number) => (shouldReduceMotion ? 0.05 : duration);

  return (
    <div className="py-8 lg:py-14 flex flex-col gap-8 lg:gap-10 w-full max-w-7xl mx-auto">
      {/* Back Button Link */}
      <div className="flex items-center">
        <button
          onClick={onBack}
          aria-label="Back to portfolio"
          className="group inline-flex items-center justify-center p-1 text-[#202020] hover:text-[#202020]/70 transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform stroke-[2]" />
        </button>
      </div>

      {/* Header Block with Tab Selector */}
      <div className="border-b border-[#202020]/15 pb-6">
        <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">SELECT STRATEGIC INQUIRY CATEGORY</span>
        
        {/* Dynamic Navigation Tabs to change category on the fly */}
        <div className="flex flex-wrap gap-2.5 mt-4">
          {Object.values(CATEGORIES).map((cat) => {
            const isCurrent = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                }}
                className={`font-mono text-[11px] font-bold px-4 py-2.5 border transition-all rounded cursor-pointer ${
                  isCurrent
                    ? 'bg-[#202020] text-[#F5F0E8] border-[#202020] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)]'
                    : 'bg-[#FFFFFF] text-[#202020] border-[#202020]/20 hover:border-[#202020]'
                }`}
              >
                {cat.id.toUpperCase().replace('-', ' ')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Header Section at the Top */}
      <div className="flex flex-col gap-3.5">
        <motion.div
          key={`${activeTab}-label`}
          initial={{ opacity: 0, y: animY(10) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animDuration(0.5) }}
          className="flex items-center gap-2.5"
        >
          <span className="font-mono text-xs sm:text-sm font-bold text-[#FFB404] tracking-wider uppercase">{activeCategory.label}</span>
          <span className="w-12 h-[1px] bg-[#202020]/25" />
        </motion.div>

        <motion.h1
          key={`${activeTab}-headline`}
          initial={{ opacity: 0, y: animY(15) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animDuration(0.6), delay: 0.05 }}
          className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#202020] uppercase leading-[1.1]"
        >
          {activeCategory.headline}
        </motion.h1>

        <motion.p
          key={`${activeTab}-description`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animDuration(0.6), delay: 0.1 }}
          className="font-sans text-sm sm:text-base text-[#202020]/80 leading-relaxed max-w-3xl"
        >
          {activeCategory.description}
        </motion.p>
      </div>

      {/* Dual Column Layout: Rich Category Overview on Left, Form on Right, matching height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Rich Service Category Specification (lg:col-span-5) */}
        <motion.div
          key={`${activeTab}-infopanel`}
          initial={{ opacity: 0, y: animY(12) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animDuration(0.5) }}
          className="lg:col-span-5 flex flex-col h-full bg-[#202020] text-[#F5F0E8] p-6 sm:p-8 relative border border-[#202020] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] rounded justify-between gap-6"
        >
          {/* Corner Decorative Tech Marks */}
          <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#F5F0E8]/40" />
          <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#F5F0E8]/40" />
          <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#F5F0E8]/40" />
          <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#F5F0E8]/40" />

          {/* Section 1: Header Badge & Summary Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#F5F0E8]/15 pb-4">
              <span className="font-mono text-[10px] text-[#FFB404] font-bold tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {activeCategory.badge}
              </span>
              <span className="font-mono text-[9px] text-[#F5F0E8]/60 bg-[#FFFFFF]/10 px-2 py-0.5 rounded uppercase">
                DIRECT SCOPE
              </span>
            </div>

            <div>
              <h2 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F5F0E8] mb-1.5">
                {activeCategory.tagline}
              </h2>
              <p className="font-sans text-xs text-[#F5F0E8]/75 leading-relaxed">
                Structured direct collaboration with Adebayo Kareem—from architectural clarity through rapid deployment.
              </p>
            </div>
          </div>

          {/* Section 2: Core Deliverables Checklist */}
          <div className="flex flex-col gap-2.5 bg-[#FFFFFF]/5 p-4 rounded border border-[#F5F0E8]/10">
            <div className="flex items-center gap-2 text-[#FFB404]">
              <Target className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                WHAT YOU RECEIVE (KEY DELIVERABLES)
              </span>
            </div>
            <ul className="flex flex-col gap-2 pt-1">
              {activeCategory.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F0E8]/90 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#FFB404]/20 text-[#FFB404] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Technical Capabilities Focus */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#FFB404]">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                CAPABILITY HIGHLIGHTS
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {activeCategory.capabilities.map((cap, idx) => (
                <div key={idx} className="bg-[#FFFFFF]/5 p-3 rounded border border-[#F5F0E8]/5 flex flex-col gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#F5F0E8] uppercase">{cap.title}</span>
                  <p className="font-sans text-[11px] text-[#F5F0E8]/70 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Ideal Client Fit & SLA Footer */}
          <div className="flex flex-col gap-3 pt-3 border-t border-[#F5F0E8]/15">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#F5F0E8]/70">
              <span className="flex items-center gap-1.5 text-[#FFB404] font-bold">
                <Clock className="w-3.5 h-3.5" />
                {activeCategory.sla}
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                100% Confidential
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Actual Form (lg:col-span-7) matching height */}
        <div className="lg:col-span-7 flex flex-col h-full">
          {submitStatus === 'SUCCESS' ? (
            /* Success screen state */
            <div className="border-2 border-[#202020] bg-white p-8 sm:p-12 relative flex flex-col justify-between items-center text-center shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] h-full min-h-[420px] rounded">
              <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#202020]" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#202020]" />

              <div className="my-auto space-y-4">
                <div className="mx-auto w-12 h-12 bg-[#FFB404]/20 text-[#202020] rounded-full flex items-center justify-center border border-[#FFB404]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-[#202020] uppercase">
                  TRANSMISSION COMPLETED
                </h3>
                <p className="font-sans text-sm text-[#202020]/80 max-w-lg mx-auto leading-relaxed">
                  Adebayo has successfully received your customized standalone inquiry for <strong>{activeCategory.id.toUpperCase().replace('-', ' ')}</strong>. I'm already looking over your options!
                </p>
              </div>

              {/* Debug Console Logs */}
              <div className="w-full bg-[#202020] text-[#F5F0E8] font-mono text-[9px] p-4 text-left space-y-1.5 mt-4 rounded-sm">
                {formLogs.map((log, index) => (
                  <div key={index} className="opacity-90">
                    <span className="text-[#FFB404]/60 mr-2">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[#202020] uppercase border border-[#202020] px-4 py-2.5 bg-white hover:bg-[#202020] hover:text-[#F5F0E8] transition-colors rounded cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>START FRESH ENQUIRY</span>
              </button>
            </div>
          ) : (
            /* Standalone custom input fields */
            <form
              onSubmit={handleFormSubmit}
              className="border border-[#202020] bg-white p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] rounded h-full"
            >
              <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#202020]" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#202020]" />

              <div className="flex justify-between items-center border-b border-[#202020]/10 pb-3">
                <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest">
                  STANDALONE REQUIREMENT SPECIFICATIONS
                </span>
                <span className="font-mono text-[9px] text-[#FFB404] bg-[#FFB404]/10 border border-[#FFB404]/30 px-2.5 py-0.5 rounded font-bold uppercase">
                  {activeCategory.id}
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {/* DROPDOWN 1: What they need (Unique to this category) */}
                <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="service-dropdown" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                    What specific solution or service do you need?
                  </label>
                  <div className="relative">
                    <select
                      id="service-dropdown"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 pr-10 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] rounded-sm appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled>Pathway option</option>
                      {activeCategory.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#202020]/60">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* TIMEFRAME AND TEAM SIZE STRATEGIC DROPDOWNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* DROPDOWN 2: When they want to start */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="start-dropdown" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                      When to start?
                    </label>
                    <div className="relative">
                      <select
                        id="start-dropdown"
                        required
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 pr-10 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] rounded-sm appearance-none cursor-pointer font-medium"
                      >
                        <option value="" disabled>Timeframe</option>
                        {START_TIMES.map((time) => (
                          <option key={time.value} value={time.value}>{time.label}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#202020]/60">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* DROPDOWN 3: Team size / number of participants */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="team-dropdown" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                      Team size?
                    </label>
                    <div className="relative">
                      <select
                        id="team-dropdown"
                        required
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 pr-10 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] rounded-sm appearance-none cursor-pointer font-medium"
                      >
                        <option value="" disabled>Count</option>
                        {TEAM_SIZES.map((team) => (
                          <option key={team.value} value={team.value}>{team.label}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#202020]/60">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* CORE VISITOR CONTACT FIELDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Visitor Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="client-name" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                      Your Name / Organization
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] rounded-sm font-medium"
                    />
                  </div>

                  {/* Visitor Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="client-email" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                      Email Address
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] rounded-sm font-medium"
                    />
                  </div>

                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-message" className="font-mono text-[10px] text-[#202020]/70 font-bold uppercase">
                    Tell me about the project
                  </label>
                  <textarea
                    id="client-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your objectives, timeline, or current stack..."
                    className="font-sans text-xs sm:text-sm bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] resize-none leading-relaxed rounded-sm font-medium"
                  />
                </div>
              </div>

              {/* Log details when transmitting */}
              {formLogs.length > 0 && (
                <div className="bg-[#202020] text-[#F5F0E8] font-mono text-[9px] p-3 space-y-1 rounded-sm">
                  {formLogs.map((log, idx) => (
                    <div key={idx} className="opacity-90">
                      <span className="text-[#FFB404]/60 mr-1">&gt;</span>
                      {log}
                    </div>
                  ))}
                </div>
              )}

              {/* Submission CTA */}
              <button
                type="submit"
                disabled={submitStatus !== 'IDLE' || !name || !email || !selectedService || !startTime || !teamSize}
                className="mt-2 font-mono text-xs font-bold text-[#202020] uppercase bg-[#FFB404] border border-[#202020] py-3.5 hover:bg-[#202020] hover:text-[#F5F0E8] transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed rounded cursor-pointer shadow-[2px_2px_0px_0px_rgba(32,32,32,1)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {submitStatus === 'IDLE' && `SEND SECURE ${activeCategory.id.toUpperCase()} INQUIRY`}
                  {submitStatus === 'TRANSMITTING' && 'VERIFYING DIRECT TUNNEL...'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

