import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SelectedWorkProps {
  onNavigateToProject: (id: string) => void;
}

export default function SelectedWork({ onNavigateToProject }: SelectedWorkProps) {
  const shouldReduceMotion = useReducedMotion();

  // Custom visual rendering for each placeholder category
  const renderProjectVisual = (type: string) => {
    switch (type) {
      case 'build':
        return (
          <div className="w-full h-full bg-[#202020] text-[#F5F0E8] p-6 relative flex flex-col justify-between overflow-hidden">
            {/* Visual background element representing cognitive node routing */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#F5F0E8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
              </svg>
            </div>

            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[10px] tracking-widest text-[#FFB404] uppercase font-bold">[ IMPLEMENT ]</span>
              <span className="font-mono text-[9px] text-[#F5F0E8]/70">AI_IMPLEMENT_INTEGRATION_V1.1</span>
            </div>

            {/* Pulsing interactive engineering wireframe mock */}
            <div className="relative my-8 flex items-center justify-center z-10">
              <div className="w-48 h-48 border border-[#F5F0E8]/20 flex items-center justify-center relative">
                <div className="absolute inset-4 border border-[#F5F0E8]/10 flex items-center justify-center">
                  <div className={`absolute inset-4 border border-[#FFB404]/30 rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  <div className="w-16 h-16 border border-[#FFB404] flex items-center justify-center bg-[#202020]">
                    <Cpu className="w-6 h-6 text-[#FFB404]" />
                  </div>
                </div>
                <span className="absolute -top-2 left-4 px-2 bg-[#202020] font-mono text-[9px] text-[#F5F0E8]/80">PROCESS_INLET</span>
                <span className="absolute -bottom-2 right-4 px-2 bg-[#202020] font-mono text-[9px] text-[#F5F0E8]/80">SYSTEM_OUTLET</span>
              </div>
            </div>

            <div className="flex justify-between items-end z-10 border-t border-[#F5F0E8]/10 pt-4">
              <span className="font-mono text-[9px] text-[#F5F0E8]/60">TARGET_SYSTEM: WORKSPACE</span>
              <span className="font-mono text-[9px] text-[#FFB404]">SCALE: 1:1 PRACTICAL</span>
            </div>
          </div>
        );

      case 'position':
        return (
          <div className="w-full h-full bg-[#FFFFFF] text-[#202020] p-6 relative flex flex-col justify-between border border-[#202020]/15 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full architectural-grid" />
            </div>

            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[10px] tracking-widest text-[#202020] uppercase font-bold">[ BUILD ]</span>
              <span className="font-mono text-[9px] text-[#202020]/60">BRAND_SYSTEM_DEVELOPMENT</span>
            </div>

            {/* Typography/asymmetric composition mock */}
            <div className="relative my-6 flex flex-col items-start gap-4 z-10 max-w-sm mx-auto">
              <div className="border-l-2 border-[#FFB404] pl-4">
                <div className="font-mono text-[10px] uppercase text-[#202020]/60 tracking-widest">PROPORTIONAL SCALE</div>
                <h4 className="font-sans text-xl font-bold tracking-tight text-[#202020] mt-1 leading-tight">
                  Restraint as <br />the ultimate value.
                </h4>
              </div>
              
              <div className="grid grid-cols-4 gap-2 w-full mt-2">
                <div className="h-1 bg-[#202020]" />
                <div className="h-1 bg-[#202020]/60" />
                <div className="h-1 bg-[#202020]/30" />
                <div className="h-1 bg-[#FFB404]" />
              </div>
            </div>

            <div className="flex justify-between items-end z-10 border-t border-[#202020]/10 pt-4">
              <span className="font-mono text-[9px] text-[#202020]/60">TYPOGRAPHY: JAKARTA + MONO</span>
              <span className="font-mono text-[9px] text-[#202020]/80">ALIGN: ASYMMETRIC</span>
            </div>
          </div>
        );

      case 'enable':
        return (
          <div className="w-full h-full bg-[#FFB404] text-[#202020] p-6 relative flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <pattern id="diagLines" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#202020" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagLines)" />
              </svg>
            </div>

            <div className="flex justify-between items-start z-10 font-mono text-[10px] tracking-widest uppercase font-bold">
              <span>[ ENABLE ]</span>
              <span className="text-[#202020]/75">PRACTICAL_TRAINING_MODULE</span>
            </div>

            <div className="relative my-8 flex items-center justify-center z-10">
              <div className="w-48 h-20 border border-[#202020] bg-[#FFFFFF] p-3 shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] flex flex-col justify-between">
                <span className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">MODULE STATUS</span>
                <span className="font-mono text-xs font-bold text-[#202020]">CURRICULUM: SYMMETRIC_PROMPTS</span>
              </div>
            </div>

            <div className="flex justify-between items-end z-10 border-t border-[#202020]/15 pt-4 font-mono text-[9px] uppercase">
              <span>PEDAGOGY: CODE-FIRST</span>
              <span className="font-bold">INTEGRITY: SECURE</span>
            </div>
          </div>
        );

      case 'transform':
        return (
          <div className="w-full h-full bg-[#F5F0E8] text-[#202020] p-6 relative flex flex-col justify-between border border-[#202020] overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div className="w-full h-full architectural-grid-fine" />
            </div>

            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[10px] tracking-widest text-[#202020] uppercase font-bold">[ RESEARCH ]</span>
              <span className="font-mono text-[9px] text-[#202020]/60">LEARNING_RESEARCH_PROTOCOL</span>
            </div>

            {/* Transform Flow visualization */}
            <div className="my-8 flex flex-col gap-3 relative z-10 max-w-xs mx-auto w-full">
              <div className="flex items-center justify-between border border-[#202020]/15 bg-[#FFFFFF] p-2 text-xs">
                <span className="font-mono text-[9px] text-[#202020]/60">LEGACY_SILO</span>
                <span className="w-2 h-2 rounded-full bg-red-400" />
              </div>
              <div className="h-6 w-[1px] bg-[#202020] mx-auto border-dashed" />
              <div className="flex items-center justify-between border border-[#202020] bg-[#FFB404] p-2 text-xs font-bold">
                <span className="font-mono text-[9px] text-[#202020]">INTEGRATED_SANDBOX</span>
                <ShieldCheck className="w-4.5 h-4.5 text-[#202020]" />
              </div>
            </div>

            <div className="flex justify-between items-end z-10 border-t border-[#202020]/10 pt-4">
              <span className="font-mono text-[9px] text-[#202020]/60">PROTOCOL: TSE MASTERCLASS</span>
              <span className="font-mono text-[9px] text-[#202020]/80">YEAR: 2024</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 lg:py-24 border-b border-[#202020]" aria-labelledby="selected-work-title">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#202020] pb-6 mb-10">
        <div>
          <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">03 / IMPLEMENTATION</span>
          <h2 id="selected-work-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#202020] uppercase">
            IDEAS I HAVE HELPED MOVE FORWARD.
          </h2>
        </div>
      </div>

      {/* Editorial Section Introduction */}
      <div className="max-w-3xl mb-16 space-y-4">
        <p className="font-sans text-base sm:text-lg text-[#202020]/95 leading-relaxed font-light">
          The projects below show different ways I have applied strategy, creativity, technology, and practical problem-solving.
        </p>
        <p className="font-sans text-sm sm:text-base text-[#202020]/75 leading-relaxed">
          Some began with a business challenge. Some started as a brand problem. Others came from an opportunity to teach, experiment, or build.
        </p>
      </div>

      {/* Editorial Layout Sequence */}
      <div className="flex flex-col gap-24 lg:gap-32">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image Visualizer Frame - Alternating layout on desktop */}
              <div className={`lg:col-span-7 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.button 
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[16/10] w-full border border-[#202020] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,180,4,1)] transition-all duration-300 overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded-none text-left block"
                  onClick={() => onNavigateToProject(project.id)}
                  aria-label={`Open case study of ${project.title}`}
                >
                  {renderProjectVisual(project.imageType || 'build')}
                </motion.button>
              </div>

              {/* Text Description Block */}
              <div className={`lg:col-span-5 flex flex-col items-start gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#FFB404]">0{index + 1}</span>
                  <span className="font-mono text-xs text-[#202020]/60 uppercase tracking-widest">/ {project.category}</span>
                </div>
                
                <button 
                  onClick={() => onNavigateToProject(project.id)}
                  className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#202020] cursor-pointer hover:text-[#FFB404] transition-colors uppercase leading-snug text-left focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded-none"
                >
                  {project.title}
                </button>
                
                <div className="space-y-1 w-full border-t border-[#202020]/10 pt-2">
                  <span className="font-mono text-[9px] text-[#202020]/50 uppercase tracking-widest font-bold block">
                    ROLE
                  </span>
                  <p className="font-sans text-sm font-semibold text-[#202020]/90">
                    {project.role}
                  </p>
                </div>

                <div className="space-y-1 w-full border-t border-[#202020]/10 pt-2">
                  <span className="font-mono text-[9px] text-[#202020]/50 uppercase tracking-widest font-bold block">
                    SUMMARY
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#202020]/85 leading-relaxed">
                    {project.shortDescription || '[No descriptive summary provided]'}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToProject(project.id)}
                  className="group flex items-center gap-2 mt-4 font-mono text-[11px] font-bold tracking-widest text-[#202020] hover:text-[#FFB404] transition-colors uppercase focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1"
                  aria-label={`View full case study of ${project.title}`}
                >
                  VIEW THE PROJECT &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Archive Redirect CTA */}
      <div className="mt-16 pt-12 border-t border-[#202020]/10 flex justify-center">
        <button
          onClick={() => {
            window.location.hash = '#work';
          }}
          className="inline-flex items-center gap-3 font-mono text-[11px] font-bold text-[#202020] uppercase bg-transparent border-2 border-[#202020] px-6 py-4 hover:bg-[#202020] hover:text-[#F5F0E8] transition-colors rounded-none"
        >
          <span>EXPLORE ALL PROJECTS &rarr;</span>
        </button>
      </div>
    </section>
  );
}
