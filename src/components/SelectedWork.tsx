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

  // Simple image placeholder rendering for all projects
  const renderProjectVisual = (project: any) => {
    return (
      <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center relative overflow-hidden">
        <img 
          src={`/images/projects/${project.id}.png`} 
          alt={`${project.title} Cover`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/eeeeee/999999?text=${project.title.replace(/ /g, '+')}`;
          }}
        />
      </div>
    );
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
                <motion.div 
                  whileHover={shouldReduceMotion ? {} : { scale: 1.005 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[16/10] w-full border border-[#202020] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,180,4,1)] transition-all duration-300 overflow-hidden rounded-none text-left block relative"
                >
                  {renderProjectVisual(project)}
                </motion.div>
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
