import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Target, Layers, ExternalLink, Quote } from 'lucide-react';
import { trackCaseStudyView, trackProjectView } from '../lib/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Contact from './Contact';

interface CaseStudyProps {
  projectId: string;
  onBackToWork: () => void;
  onNavigateToProject: (id: string) => void;
}

export default function CaseStudy({ projectId, onBackToWork, onNavigateToProject }: CaseStudyProps) {
  const project = PROJECTS.find(p => p.id === projectId);
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top on page mount or project swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (project) {
      trackCaseStudyView(projectId);
      trackProjectView(projectId);
      sessionStorage.setItem('last_viewed_project_title', project.title);
    }
  }, [projectId, project]);

  if (!project) {
    return (
      <div className="py-20 text-center flex flex-col gap-4 items-center">
        <span className="font-mono text-xs text-red-500 font-bold">[ CRITICAL_ERROR: RESOURCE_NOT_FOUND ]</span>
        <h2 className="font-sans text-2xl font-bold text-[#202020]">Project Reference Not Identified</h2>
        <button onClick={onBackToWork} className="font-mono text-xs font-bold text-[#202020] underline mt-4 focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded">
          &larr; SECURE DISPATCH ENTRYPOINT
        </button>
      </div>
    );
  }

  // Find related work (projects other than the current one, limiting to 2)
  const relatedWork = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  // Custom visual rendering for editorial project cover
  const renderEditorialCover = (type: string) => {
    const isBuild = type === 'build';
    const isPosition = type === 'position';
    const isEnable = type === 'enable';
    const isTransform = type === 'transform';

    return (
      <div className={`w-full h-full relative p-6 sm:p-12 flex flex-col justify-between overflow-hidden border border-[#202020] ${
        isBuild ? 'bg-[#202020] text-[#F5F0E8]' :
        isPosition ? 'bg-[#FFFFFF] text-[#202020]' :
        isEnable ? 'bg-[#FFB404] text-[#202020]' :
        'bg-[#F5F0E8] text-[#202020]'
      }`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="coverGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coverGrid)" />
          </svg>
        </div>

        {/* Top bar details */}
        <div className="flex justify-between items-start z-10 font-mono text-[10px] tracking-widest font-bold">
          <span>AK-PLATE // COV-{project.num}</span>
          <span className="opacity-70">CLASSIFICATION: {project.category}</span>
        </div>

        {/* Dynamic center graphics */}
        <div className="my-12 flex items-center justify-center z-10">
          {isBuild && (
            <div className="w-40 h-40 border border-[#F5F0E8]/20 flex items-center justify-center relative rounded-full">
              <div className={`absolute inset-4 border border-[#FFB404]/30 rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              <div className="w-16 h-16 border border-[#FFB404] flex items-center justify-center bg-[#202020] rounded-full">
                <Cpu className="w-6 h-6 text-[#FFB404]" />
              </div>
            </div>
          )}

          {isPosition && (
            <div className="flex flex-col items-start border-l-2 border-[#FFB404] pl-6 max-w-sm">
              <span className="font-mono text-[10px] text-[#202020]/50 tracking-widest font-bold uppercase">BRAND GRID</span>
              <span className="font-sans text-xl font-bold tracking-tight text-[#202020] mt-1 italic">
                Restraint is a system, not a style.
              </span>
            </div>
          )}

          {isEnable && (
            <div className="w-48 h-24 border border-[#202020] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]">
              <div className="flex justify-between items-center border-b border-[#202020]/10 pb-2">
                <span className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">CURRICULUM MODULE</span>
                <span className={`w-2 h-2 rounded-full bg-green-500 ${shouldReduceMotion ? '' : 'animate-ping'}`} />
              </div>
              <span className="font-mono text-xs font-bold text-[#202020] uppercase tracking-wider">TSE_ACADEMY_ACTIVE_RUN</span>
            </div>
          )}

          {isTransform && (
            <div className="flex flex-col gap-3 max-w-xs w-full">
              <div className="flex items-center justify-between border border-[#202020] bg-[#FFFFFF] p-2 text-xs shadow-[3px_3px_0px_0px_rgba(32,32,32,1)]">
                <span className="font-mono text-[9px] text-[#202020] font-bold">COMPLIANT SECURE</span>
                <ShieldCheck className="w-4 h-4 text-green-600" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar details */}
        <div className="flex justify-between items-end z-10 border-t border-current/15 pt-4 font-mono text-[9px] uppercase">
          <span>ALIGNED METADATA: {project.domain}</span>
          <span className="font-bold">YEAR: {project.year}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 lg:py-20 flex flex-col gap-16 lg:gap-24 relative" aria-labelledby="casestudy-title">
      
      {/* 1. Header Navigation Back Control */}
      <div className="flex justify-between items-center border-b border-[#202020] pb-6">
        <button
          onClick={onBackToWork}
          className="group flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#202020] hover:text-[#FFB404] transition-colors uppercase focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
          aria-label="Back to active work archive"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>&larr; BACK TO WORK</span>
        </button>

        <span className="font-mono text-[10px] text-[#202020]/50 uppercase tracking-widest font-bold">
          CASE STUDY GATEWAY // SECURED
        </span>
      </div>

      {/* 2. Top-Level Editorial Header */}
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
          <span className="text-[#FFB404] bg-[#202020] px-2.5 py-0.5 uppercase tracking-widest">
            {project.num}
          </span>
          <span className="text-[#202020]/45">/</span>
          <span className="text-[#202020] uppercase tracking-wider font-bold">
            {project.domain}
          </span>
        </div>

        <h1 id="casestudy-title" className="font-sans text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#202020] uppercase leading-none">
          {project.title}
        </h1>

        {project.shortDescription && (
          <p className="font-sans text-xl sm:text-2xl font-light text-[#202020]/90 leading-relaxed max-w-4xl italic border-l-2 border-[#FFB404] pl-6 mt-2">
            {project.shortDescription}
          </p>
        )}
      </div>

      {/* 3. Hero Visual Box */}
      <div className="w-full aspect-[16/9] sm:aspect-[16/8] shadow-[8px_8px_0px_0px_rgba(32,32,32,1)] relative">
        {renderEditorialCover(project.imageType || 'build')}
      </div>

      {/* 4. Strategic Content Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Core Narrative (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-16">
          
          {/* Context Module */}
          {project.context && (
            <section className="flex flex-col gap-3" aria-labelledby="module-context">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">01 / CONTEXT</span>
              <h3 id="module-context" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">OPERATIONAL ENVIRONMENT</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.context}
              </p>
            </section>
          )}

          {/* Challenge Module */}
          {project.challenge && (
            <section className="flex flex-col gap-3" aria-labelledby="module-challenge">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">02 / CHALLENGE</span>
              <h3 id="module-challenge" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">THE PROBLEM VECTOR</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.challenge}
              </p>
            </section>
          )}

          {/* Approach Module */}
          {project.approach && (
            <section className="flex flex-col gap-3" aria-labelledby="module-approach">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">03 / APPROACH</span>
              <h3 id="module-approach" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">STRATEGIC FORMULATION</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.approach}
              </p>
            </section>
          )}

          {/* Contribution Module */}
          {project.contribution && (
            <section className="flex flex-col gap-3" aria-labelledby="module-contribution">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">04 / CONTRIBUTION</span>
              <h3 id="module-contribution" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">HANDS-ON SPECIALIST EXECUTION</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.contribution}
              </p>
            </section>
          )}

          {/* Outcome Module */}
          {project.outcome && (
            <section className="flex flex-col gap-3" aria-labelledby="module-outcome">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">05 / OUTCOME</span>
              <h3 id="module-outcome" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">OPERATIONAL telemetry RESULTS</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.outcome}
              </p>
            </section>
          )}

          {/* Optional Testimonial block */}
          {project.testimonial && (
            <div className="border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 relative mt-4 shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#FFB404] opacity-20 pointer-events-none" />
              <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold tracking-widest block mb-4">CONFIRMED ENDORSEMENT</span>
              <p className="font-sans text-sm sm:text-base italic text-[#202020] leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-[#202020]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="font-sans text-xs font-bold text-[#202020] block">{project.testimonial.author}</span>
                  <span className="font-mono text-[10px] text-[#202020]/60 block font-semibold">{project.testimonial.role}</span>
                </div>
                {project.testimonial.organization && (
                  <span className="font-mono text-[10px] text-[#FFB404] uppercase font-bold bg-[#202020] px-2 py-0.5">
                    {project.testimonial.organization}
                  </span>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Static Technical Specifications (4 cols) */}
        <div className="lg:col-span-4 border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col gap-6 relative shadow-[1px_1px_0px_0px_rgba(32,32,32,1)]">
          <span className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#202020]" />
          <span className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-[#202020]" />
          
          <div className="border-b border-[#202020]/10 pb-4">
            <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold tracking-widest">GATEWAY_CLASSIFICATION</span>
            <span className="block font-sans text-lg font-bold text-[#202020] mt-1">PROJECT DETAILS</span>
          </div>

          <div className="flex flex-col gap-4 font-mono text-[11px]">
            {/* Project Year */}
            <div className="flex justify-between border-b border-[#202020]/5 pb-2">
              <span className="text-[#202020]/60 font-bold">YEAR:</span>
              <span className="font-bold text-[#202020]">{project.year}</span>
            </div>

            {/* Client */}
            <div className="flex flex-col gap-1 border-b border-[#202020]/5 pb-2 text-left">
              <span className="text-[#202020]/60 font-bold">CLIENT/ENTITY:</span>
              <span className="font-bold text-[#202020] uppercase text-left">
                {project.client || '[PLACEHOLDER: CONFIDENTIAL ENTERPRISE]'}
              </span>
            </div>

            {/* Role */}
            <div className="flex flex-col gap-1 border-b border-[#202020]/5 pb-2 text-left">
              <span className="text-[#202020]/60 font-bold">ROLE:</span>
              <span className="font-bold text-[#202020] uppercase text-left">
                {project.role || '[PLACEHOLDER: LEAD STRATEGIST]'}
              </span>
            </div>

            {/* Case Study Status */}
            {project.caseStudyStatus && (
              <div className="flex justify-between border-b border-[#202020]/5 pb-2">
                <span className="text-[#202020]/60 font-bold">STATUS:</span>
                <span className="font-bold text-[#FFB404] bg-[#202020] px-1.5 py-0.5">{project.caseStudyStatus}</span>
              </div>
            )}

            {/* External links */}
            {project.externalLink && (
              <div className="flex justify-between border-b border-[#202020]/5 pb-2">
                <span className="text-[#202020]/60 font-bold">EXTERNAL BRIDGE:</span>
                <a 
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FFB404] hover:text-[#202020] underline inline-flex items-center gap-1 uppercase focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
                >
                  SECURE PORTAL <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            )}
          </div>

          {/* Tools & Technologies */}
          {project.tools && project.tools.length > 0 && (
            <div className="mt-4">
              <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold tracking-widest block mb-3">SYSTEM TECHNOLOGY</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map(tool => (
                  <span 
                    key={tool}
                    className="font-mono text-[10px] border border-[#202020]/15 bg-[#F5F0E8] text-[#202020] px-2.5 py-1 font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 border-t border-[#202020]/10 pt-4">
              <span className="font-mono text-[9px] text-[#202020]/50 uppercase font-bold tracking-widest block mb-3">OPERATIONAL FOCUS</span>
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="font-sans text-[10px] text-[#202020]/75 uppercase bg-transparent border border-[#202020]/10 px-2 py-0.5 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* 5. Related Work Footer section */}
      <div className="border-t border-[#202020] pt-16">
        <span className="font-mono text-xs font-bold text-[#FFB404] uppercase tracking-wider block mb-8 font-bold">
          06 / BREADCRUMB ROUTE
        </span>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h3 className="font-sans text-2xl font-bold text-[#202020] uppercase tracking-tight">Related Case Studies</h3>
          <button 
            onClick={onBackToWork}
            className="font-mono text-xs font-bold text-[#202020]/75 hover:text-[#FFB404] transition-colors uppercase focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
          >
            VIEW ENTIRE ARCHIVE &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedWork.map(rel => (
            <button 
              key={rel.id}
              onClick={() => onNavigateToProject(rel.id)}
              className="border border-[#202020]/15 bg-[#FFFFFF] p-6 hover:border-[#202020] transition-colors cursor-pointer flex flex-col justify-between min-h-[180px] group text-left w-full focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none shadow-[2px_2px_0px_0px_rgba(32,32,32,0.05)] rounded"
            >
              <div className="w-full">
                <div className="flex justify-between items-center border-b border-[#202020]/10 pb-3 mb-4 w-full">
                  <span className="font-mono text-xs font-bold text-[#FFB404]">{rel.num}</span>
                  <span className="font-mono text-[9px] bg-[#202020] text-[#F5F0E8] px-2 py-0.5 uppercase font-bold">{rel.category}</span>
                </div>
                <h4 className="font-sans text-lg font-bold text-[#202020] uppercase group-hover:text-[#FFB404] transition-colors w-full">
                  {rel.title}
                </h4>
                <p className="font-sans text-xs text-[#202020]/75 mt-2 line-clamp-2 w-full leading-relaxed">
                  {rel.shortDescription}
                </p>
              </div>

              <span className="font-mono text-[9px] text-[#202020]/50 uppercase tracking-widest mt-4 block font-bold">
                EXPLORE CASE STUDY &rarr;
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Integrated Contact Gateway */}
      <div className="border-t border-[#202020] mt-16">
        <Contact projectId={projectId} />
      </div>

    </div>
  );
}
