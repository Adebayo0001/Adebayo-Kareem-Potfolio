import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowRight, Filter, Eye } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface WorkArchiveProps {
  onNavigateToProject: (id: string) => void;
}

export default function WorkArchive({ onNavigateToProject }: WorkArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BUILD' | 'POSITION' | 'ENABLE' | 'TRANSFORM'>('ALL');
  const shouldReduceMotion = useReducedMotion();
  
  const filters: ('ALL' | 'BUILD' | 'POSITION' | 'ENABLE' | 'TRANSFORM')[] = [
    'ALL',
    'BUILD',
    'POSITION',
    'ENABLE',
    'TRANSFORM'
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="work-archive-page" className="py-12 lg:py-20 flex flex-col gap-12" aria-labelledby="archive-title">
      {/* Editorial Title */}
      <div className="border-b border-[#202020] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-bold text-[#FFB404] uppercase tracking-wider block mb-2">INDEX / CATALOGUE</span>
          <h1 id="archive-title" className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#202020] uppercase leading-none">
            Selected Work
          </h1>
          <p className="font-sans text-base text-[#202020]/85 mt-4 leading-relaxed">
            A chronological archive of strategic systems, typographic brand directions, and technical upskilling initiatives engineered with absolute aesthetic restraint.
          </p>
        </div>
        <div className="font-mono text-[10px] text-[#202020]/60 tracking-widest uppercase text-left md:text-right font-bold">
          RECORD COUNT: {PROJECTS.length} ACTIVE &middot; EST_2015
        </div>
      </div>

      {/* Subtle, Fast Filtering Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#202020]/10 pb-4 gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-[#202020]/50" />
          <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest">FILTER MATRIX:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[10px] font-bold tracking-widest px-3 py-1.5 border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none ${
                  isActive 
                    ? 'bg-[#202020] border-[#202020] text-[#F5F0E8]' 
                    : 'bg-transparent border-[#202020]/15 text-[#202020]/75 hover:text-[#202020] hover:border-[#202020]'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Large Editorial Project Entries */}
      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-[#202020] py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group"
              >
                {/* Identification */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#FFB404] block">
                    {project.num}
                  </span>
                  <div>
                    <span className="font-mono text-[9px] bg-[#202020] text-[#F5F0E8] px-2 py-0.5 font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] text-[#202020]/60 uppercase tracking-widest ml-3 font-semibold">
                      {project.year}
                    </span>
                  </div>
                  {project.caseStudyStatus && (
                    <span className="font-mono text-[9px] text-[#202020]/60 tracking-wider uppercase mt-1 font-bold">
                      STATUS: {project.caseStudyStatus}
                    </span>
                  )}
                </div>

                {/* Main Content & Strategic Description */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <button 
                    onClick={() => onNavigateToProject(project.id)}
                    className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#202020] uppercase hover:text-[#FFB404] cursor-pointer transition-colors leading-tight text-left focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
                  >
                    {project.title}
                  </button>
                  
                  <span className="font-mono text-xs text-[#202020]/60 uppercase tracking-wider font-semibold">
                    {project.domain}
                  </span>

                  <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-2">
                    {project.shortDescription || '[No descriptive summary provided]'}
                  </p>

                  {/* Core tags if available */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="font-mono text-[9px] text-[#202020]/60 border border-[#202020]/10 bg-[#FFFFFF] px-2 py-0.5 uppercase font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Operational Details & Navigation CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full lg:min-h-[140px] items-start lg:items-end gap-6">
                  {project.client && (
                    <div className="text-left lg:text-right">
                      <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold tracking-widest block">CLIENT</span>
                      <span className="font-sans text-xs text-[#202020] font-bold mt-1 block uppercase">
                        {project.client}
                      </span>
                    </div>
                  )}
                  
                  <button
                    onClick={() => onNavigateToProject(project.id)}
                    className="flex items-center gap-2 border border-[#202020] bg-transparent text-[#202020] px-5 py-2.5 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-[#202020] hover:text-[#F5F0E8] transition-all duration-300 w-full lg:w-auto text-center justify-center group-hover:bg-[#FFB404] group-hover:border-[#FFB404] group-hover:text-[#202020] focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded"
                    aria-label={`Explore case study of ${project.title}`}
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-[#202020]/10 bg-[#FFFFFF] my-8">
            <span className="font-mono text-xs text-[#202020]/50 uppercase tracking-widest font-bold">
              [ NO CASE STUDIES FOUND IN THIS SECTOR ]
            </span>
          </div>
        )}
      </div>

      {/* Editorial closing note */}
      <div className="mt-12 p-8 border border-[#202020]/15 bg-[#FFFFFF] relative overflow-hidden shadow-[1px_1px_0px_0px_rgba(32,32,32,0.05)]">
        <span className="absolute top-0 right-0 w-24 h-24 bg-[#FFB404] opacity-5 blur-xl pointer-events-none" />
        <h3 className="font-sans text-lg font-bold text-[#202020] uppercase mb-2">OPERATIONAL INTEGRITY PROMISE</h3>
        <p className="font-sans text-sm text-[#202020]/85 leading-relaxed max-w-3xl">
          Due to active strategic engagement bounds and high-level enterprise non-disclosure agreements, certain technology architectures, client-side corporate names, and quantitative system telemetry outcomes remain strictly protected or abstracted.
        </p>
      </div>
    </div>
  );
}
