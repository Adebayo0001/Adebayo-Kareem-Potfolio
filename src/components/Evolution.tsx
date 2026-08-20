import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Calendar, ChevronRight } from 'lucide-react';

const CHRONOLOGY_STAGES = [
  {
    id: 'stage-01',
    step: '01',
    label: 'MAKE',
    period: '2015 – 2018',
    headline: 'I started by making things.',
    description: 'Design taught me how to communicate an idea visually and pay attention to detail.'
  },
  {
    id: 'stage-02',
    step: '02',
    label: 'LEAD',
    period: '2018 – 2021',
    headline: 'Then I learned that good work also depends on people.',
    description: 'Leading creative and operational teams taught me how to coordinate moving parts, make decisions, and take responsibility for outcomes.'
  },
  {
    id: 'stage-03',
    step: '03',
    label: 'THINK',
    period: '2021 – 2024',
    headline: 'Over time, I became more interested in the problem behind the brief.',
    description: 'That moved my work from simply producing assets toward strategy, positioning, systems, and business thinking.'
  },
  {
    id: 'stage-04',
    step: '04',
    label: 'MULTIPLY',
    period: '2024 – PRESENT',
    headline: 'AI changed the scale of what became possible.',
    description: 'Now I explore how technology can help people build faster, learn new skills, solve problems, and turn ideas into working digital products.'
  }
];

export default function Evolution() {
  const [activeStageId, setActiveStageId] = useState('stage-01');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="evolution" className="py-16 lg:py-24 border-b border-[#202020]" aria-labelledby="evolution-title">
      
      {/* 1. Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#202020] pb-6 mb-12">
        <div>
          <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">04 / CHRONOLOGY</span>
          <h2 id="evolution-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#202020] uppercase">
            HOW THE WORK HAS EVOLVED.
          </h2>
        </div>
      </div>

      {/* 2. Section Introduction */}
      <div className="max-w-3xl mb-16">
        <p className="font-sans text-base sm:text-lg text-[#202020]/95 leading-relaxed font-light">
          The focus of my work has shifted over time, moving from execution to lead roles, strategy, and education.
        </p>
      </div>

      {/* 3. Chronology Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Side Tab Selectors */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="font-mono text-[9px] text-[#202020]/50 uppercase tracking-widest font-bold mb-1">
            CHRONOLOGY PHASES
          </span>
          {CHRONOLOGY_STAGES.map((stage) => {
            const isActive = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left py-4 px-5 border-l-2 transition-all duration-300 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded-none ${
                  isActive 
                    ? 'border-[#FFB404] bg-[#FFFFFF] text-[#202020] font-bold shadow-[3px_3px_0px_0px_rgba(32,32,32,1)]' 
                    : 'border-[#202020]/10 text-[#202020]/60 hover:text-[#202020] hover:border-[#202020]/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#202020]/50">{stage.step}</span>
                  <span className="font-mono text-xs tracking-wider uppercase font-bold">{stage.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#202020]/50 font-bold">
                    {stage.period}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#FFB404]' : 'text-transparent'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side Detail Display */}
        <div className="lg:col-span-8">
          {CHRONOLOGY_STAGES.map((stage) => {
            if (stage.id !== activeStageId) return null;
            return (
              <motion.div
                key={stage.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border border-[#202020] bg-[#FFFFFF] p-8 lg:p-12 relative shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]"
              >
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#202020]" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#202020]" />

                <div className="flex justify-between items-center border-b border-[#202020]/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FFB404]" />
                    <span className="font-mono text-xs font-bold text-[#202020]">
                      {stage.period}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold bg-[#F5F0E8] px-2 py-0.5 border border-[#202020]/10">
                    PHASE // 0{stage.step}
                  </span>
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-[#FFB404] font-bold tracking-widest block uppercase">
                    STAGE {stage.step}: {stage.label}
                  </span>
                  <h3 className="font-sans text-xl lg:text-2xl font-bold tracking-tight text-[#202020] uppercase leading-tight">
                    {stage.headline}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#202020]/80 leading-relaxed pt-2">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#202020]/10 flex justify-between items-center font-mono text-[9px] text-[#202020]/40">
                  <span>RECORD: AK_EVO_LOG_0{stage.step}</span>
                  <span>VERIFIED HISTORIC FACT</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. PHILOSOPHY SECTION (What I Believe) */}
      <div id="philosophy" className="mt-24 lg:mt-32 pt-16 lg:pt-24 border-t-2 border-[#202020] relative">
        {/* Absolute branding lines */}
        <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-[#202020]/50 uppercase tracking-widest font-bold">
          PHILOSOPHY_SYSTEM_AK-01
        </div>

        <div className="max-w-4xl">
          <span className="font-mono text-xs font-bold text-[#FFB404] uppercase block mb-3">05 / GUIDING DOCTRINE</span>
          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#202020] uppercase leading-[0.95] mb-12">
            What I Believe
          </h2>
        </div>

        {/* 5 Concise principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-8 border-t border-[#202020]/10">
          
          {/* Principle 1 */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFB404] font-bold block">01 / DOCTRINE</span>
              <h4 className="font-sans text-base font-bold text-[#202020] uppercase tracking-tight leading-tight">
                Technology should be useful.
              </h4>
              <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                New technology is interesting. Useful technology is better.
              </p>
            </div>
            <span className="font-mono text-[8px] text-[#202020]/40 pt-4 block border-t border-[#202020]/10 uppercase font-bold">UTILITY_FIRST</span>
          </div>

          {/* Principle 2 */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFB404] font-bold block">02 / DOCTRINE</span>
              <h4 className="font-sans text-base font-bold text-[#202020] uppercase tracking-tight leading-tight">
                Design should make things clearer.
              </h4>
              <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                Good design should help people understand, decide, and act.
              </p>
            </div>
            <span className="font-mono text-[8px] text-[#202020]/40 pt-4 block border-t border-[#202020]/10 uppercase font-bold">CLARITY</span>
          </div>

          {/* Principle 3 */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFB404] font-bold block">03 / DOCTRINE</span>
              <h4 className="font-sans text-base font-bold text-[#202020] uppercase tracking-tight leading-tight">
                Strategy comes before execution.
              </h4>
              <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                Before making something, understand why it needs to exist.
              </p>
            </div>
            <span className="font-mono text-[8px] text-[#202020]/40 pt-4 block border-t border-[#202020]/10 uppercase font-bold">ALIGNED_PURPOSE</span>
          </div>

          {/* Principle 4 */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFB404] font-bold block">04 / DOCTRINE</span>
              <h4 className="font-sans text-base font-bold text-[#202020] uppercase tracking-tight leading-tight">
                Skills create options.
              </h4>
              <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                The ability to learn and apply new tools can change what people believe they are capable of doing.
              </p>
            </div>
            <span className="font-mono text-[8px] text-[#202020]/40 pt-4 block border-t border-[#202020]/10 uppercase font-bold">CAPACITY_BUILDING</span>
          </div>

          {/* Principle 5 */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFB404] font-bold block">05 / DOCTRINE</span>
              <h4 className="font-sans text-base font-bold text-[#202020] uppercase tracking-tight leading-tight">
                AI should augment people.
              </h4>
              <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                The goal is not to make people less useful. It is to help people do better work.
              </p>
            </div>
            <span className="font-mono text-[8px] text-[#202020]/40 pt-4 block border-t border-[#202020]/10 uppercase font-bold">HUMAN_AUGMENTATION</span>
          </div>

        </div>
      </div>

    </section>
  );
}
