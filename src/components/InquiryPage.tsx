import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, CheckCircle2, Send, RefreshCw, ChevronDown, Camera, Sparkles } from 'lucide-react';

interface InquiryPageProps {
  initialInterestId: string | null;
  onBack: () => void;
}

interface InterestCategory {
  id: string;
  label: string;
  headline: string;
  description: string;
  themeColor: string;
  options: string[];
  imageUrl: string;
  imageTag: string;
  imageBadge: string;
  imageCaption: string;
}

const CATEGORIES: Record<string, InterestCategory> = {
  ai: {
    id: 'ai',
    label: '01 / PUT AI TO WORK',
    headline: "AI STRATEGY & DEPLOYMENT INQUIRY",
    description: "Connect with me to map out practical, high-impact spots to deploy artificial intelligence and custom LLM agent systems inside your workflow.",
    themeColor: '#FFB404',
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=1067",
    imageTag: "ADEBAYO // 3D AI BOT",
    imageBadge: "NEURAL AGENT SYSTEM",
    imageCaption: "Custom 3D autonomous AI bot and neural agent deployment architecture.",
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
    description: "Launch your custom digital product or MVP. Let's design, prototype, and build a scalable production-ready web application together.",
    themeColor: '#4F46E5',
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800&h=1067",
    imageTag: "ADEBAYO // 3D DIGITAL MVP",
    imageBadge: "PRODUCT ARCHITECTURE",
    imageCaption: "Interactive 3D digital product prototypes, web platforms, and scalable MVPs.",
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
    description: "Empower your engineering teams, design teams, or executives to master generative AI prompt engineering and modern software engineering stacks.",
    themeColor: '#10B981',
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800&h=1067",
    imageTag: "ADEBAYO // KEYNOTE & WORKSHOP",
    imageBadge: "SPEAKING & ENGAGEMENT",
    imageCaption: "Live keynotes, team prompt engineering workshops, and hands-on executive coaching.",
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
    description: "Formulate your next technological leap. Leverage fractional CTO leadership, architecture evaluations, and vendor selection advice.",
    themeColor: '#EC4899',
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1067",
    imageTag: "ADEBAYO // STRATEGIC ADVISORY",
    imageBadge: "EXECUTIVE CONSULTING",
    imageCaption: "Strategic technical advisory, fractional CTO roadmaps, and architecture audits.",
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

const PORTRAIT_IMAGE_URL = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&h=1067";

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

  // State to track custom uploaded images per category or fallback to category defaults
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('adebayo_custom_inquiry_images');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const activeCategory = CATEGORIES[activeTab] || CATEGORIES.ai;
  const currentDisplayImage = customImages[activeTab] || activeCategory.imageUrl;

  // Sync state if initialInterestId changes
  useEffect(() => {
    if (initialInterestId && CATEGORIES[initialInterestId]) {
      setActiveTab(initialInterestId);
      // Reset dropdown choices to match the new category context beautifully
      setSelectedService('');
      setStartTime('');
      setTeamSize('');
    }
  }, [initialInterestId]);

  // Handle activeTab changes
  useEffect(() => {
    setSelectedService('');
  }, [activeTab]);

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result && typeof e.target.result === 'string') {
        const updated = { ...customImages, [activeTab]: e.target.result };
        setCustomImages(updated);
        try {
          localStorage.setItem('adebayo_custom_inquiry_images', JSON.stringify(updated));
        } catch (err) {
          console.warn('LocalStorage quota exceeded, image updated in session state only.', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetCustomImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...customImages };
    delete updated[activeTab];
    setCustomImages(updated);
    try {
      localStorage.setItem('adebayo_custom_inquiry_images', JSON.stringify(updated));
    } catch (err) {
      console.warn('LocalStorage error', err);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedService || !startTime || !teamSize) return;

    setSubmitStatus('TRANSMITTING');
    setFormLogs([`[SYSTEM] Opening standalone transmission tunnel for: ${activeCategory.id.toUpperCase()}...`]);

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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

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

      {/* Dual Column Layout: Image on Left, Form on Right, matching height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Editorial Image Container (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleImageUpload(e.dataTransfer.files[0]);
              }
            }}
            className={`group relative w-full h-full min-h-[420px] lg:min-h-full bg-[#202020]/10 overflow-hidden border border-[#202020] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] rounded flex flex-col justify-between p-6 cursor-pointer transition-colors duration-300 ${
              isDragging ? 'border-[#FFB404] bg-[#FFB404]/5' : 'border-[#202020]'
            }`}
            role="button"
            tabIndex={0}
            aria-label="Portrait area. Click or drag-and-drop an image to replace portrait picture."
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                fileInputRef.current?.click();
              }
            }}
          >
            {/* Dynamic Background Image with subtle high-contrast editorial filter */}
            <motion.img
              key={`${activeTab}-${currentDisplayImage}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: animDuration(0.5) }}
              src={currentDisplayImage}
              alt={activeCategory.imageTag}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient / Vignette overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202020]/95 via-[#202020]/35 to-transparent pointer-events-none" />

            {/* Corner Decorative Tech Marks */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#F5F0E8] z-20" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#F5F0E8] z-20" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#F5F0E8] z-20" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#F5F0E8] z-20" />

            {/* Hidden native input for custom picture upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleImageUpload(e.target.files[0]);
                }
              }}
              accept="image/*"
              className="hidden"
            />

            {/* Top metadata tag on image */}
            <div className="relative z-10 flex justify-between items-center text-[#F5F0E8] gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#202020]/80 px-2.5 py-1 border border-[#F5F0E8]/20 backdrop-blur-xs">
                {activeCategory.imageTag}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#FFB404] font-bold tracking-wider uppercase bg-[#202020]/80 px-2 py-1 border border-[#FFB404]/30 backdrop-blur-xs">
                {activeCategory.imageBadge}
              </span>
            </div>

            {/* Hover Camera Prompt */}
            <div className="absolute inset-0 bg-[#202020]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-[#F5F0E8] z-20 backdrop-blur-xs">
              <div className="p-3 bg-[#FFB404] text-[#202020] rounded-full">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-center px-4">
                Click or Drop Photo to Customize
              </span>
              {customImages[activeTab] && (
                <button
                  type="button"
                  onClick={handleResetCustomImage}
                  className="mt-2 text-[9px] font-mono font-bold text-[#FFB404] underline hover:text-white"
                >
                  Reset to AI Category Default
                </button>
              )}
            </div>

            {/* Bottom context caption */}
            <div className="relative z-10 flex flex-col gap-1.5 text-[#F5F0E8] pt-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFB404] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFB404]">
                  ACTIVE INTAKE // 2026
                </span>
              </div>
              <p className="font-sans text-xs text-[#F5F0E8]/95 leading-relaxed font-medium">
                {activeCategory.imageCaption}
              </p>
            </div>
          </div>
        </div>

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
                  {submitStatus === 'TRANSMITTING' && 'VERIFYING STANDALONE TUNNEL...'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

