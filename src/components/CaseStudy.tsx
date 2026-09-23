import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Target, Layers, ExternalLink, Quote, AlertTriangle, Sparkles, CheckCircle, Smartphone, BarChart3, Bot } from 'lucide-react';
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
          BACK TO WORK
        </button>
      </div>
    );
  }

  // Find related work (projects other than the current one, limiting to 2)
  const relatedWork = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  // Custom visual rendering for editorial project cover
  const renderEditorialCover = (project: any) => {
    return (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#F5F0E8] border border-[#202020]">
        <img 
          src={`/images/projects/${project.id}.png`} 
          alt={`${project.title} Editorial Cover`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/eeeeee/999999?text=${project.title.replace(/ /g, '+')}`;
          }}
        />
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
          <span>BACK TO WORK</span>
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
        {renderEditorialCover(project)}
      </div>

      {/* 4. Strategic Content Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Main Column: Core Narrative (12 cols) */}
        <div className="lg:col-span-12 flex flex-col gap-12 lg:gap-16">
          
          {/* Context Module */}
          {project.context && (
            <section className="flex flex-col gap-3" aria-labelledby="module-context">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">01 / CONTEXT & OVERVIEW</span>
              <h3 id="module-context" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">PROJECT OVERVIEW</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.context}
              </p>
            </section>
          )}

          {/* Challenge Module & Problem Points */}
          {project.challenge && (
            <section className="flex flex-col gap-4" aria-labelledby="module-challenge">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">02 / CHALLENGE & PAIN POINTS</span>
              <h3 id="module-challenge" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">THE PROBLEM</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed">
                {project.challenge}
              </p>

              {/* Numbered Problem Points */}
              {project.problemPoints && project.problemPoints.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {project.problemPoints.map((point, idx) => (
                    <div key={idx} className="border border-[#202020] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(32,32,32,1)]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#FFB404] bg-[#202020] px-1.5 py-0.5">
                          0{idx + 1}
                        </span>
                        <h4 className="font-sans text-sm font-bold text-[#202020] uppercase">
                          {point.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-[#202020]/80 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Approach / Solution Module */}
          {project.approach && (
            <section className="flex flex-col gap-3" aria-labelledby="module-approach">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">03 / ARCHITECTURAL APPROACH</span>
              <h3 id="module-approach" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">THE SOLUTION</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.approach}
              </p>
            </section>
          )}

          {/* Key Features Developed (if available) */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="flex flex-col gap-4" aria-labelledby="module-features">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">04 / FUNCTIONAL BLUEPRINT</span>
              <h3 id="module-features" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">KEY FEATURES DEVELOPED</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
                {project.keyFeatures.map((feat, idx) => {
                  // Extract leading number if present (e.g., "1. ")
                  const rawNumber = feat.title.match(/^\d+/)?.[0] || String(idx + 1);
                  const cleanTitle = feat.title.replace(/^\d+\.\s*/, '');
                  
                  return (
                    <div key={idx} className="group relative flex flex-col justify-between border border-[#202020]/20 bg-[#FFFFFF] p-6 shadow-[2px_2px_0px_0px_rgba(32,32,32,0.05)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all duration-300">
                      
                      {/* Accent Top Border */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#202020]/5 group-hover:bg-[#FFB404] transition-colors duration-300" />
                      
                      <div className="flex flex-col gap-3 z-10 pt-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] bg-[#F5F0E8] border border-[#202020]/10 px-1.5 py-0.5 text-[#202020]/60 font-bold shrink-0 group-hover:bg-[#202020] group-hover:text-[#FFB404] transition-colors duration-300">
                            {String(rawNumber).padStart(2, '0')}
                          </span>
                          <h4 className="font-sans text-sm font-bold text-[#202020] uppercase tracking-tight">
                            {cleanTitle}
                          </h4>
                        </div>
                        <p className="font-sans text-sm text-[#202020]/80 leading-relaxed mt-1">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Behind The Scenes Workflow (if available) */}
          {project.behindTheScenes && project.behindTheScenes.length > 0 && (
            <section className="flex flex-col gap-4" aria-labelledby="module-workflow">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">05 / PIPELINE ARCHITECTURE</span>
              <h3 id="module-workflow" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">HOW IT WORKED BEHIND THE SCENES</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                {project.behindTheScenes.map((bts, idx) => (
                  <div key={idx} className="border border-[#202020] bg-[#F5F0E8] p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-[#202020] bg-[#FFB404] px-2 py-0.5">
                        STEP {bts.step}
                      </span>
                      <h4 className="font-sans text-sm font-bold text-[#202020] uppercase">
                        {bts.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-[#202020]/80 leading-relaxed mt-1">
                      {bts.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contribution Module */}
          {project.contribution && (
            <section className="flex flex-col gap-3" aria-labelledby="module-contribution">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">06 / CONTRIBUTION</span>
              <h3 id="module-contribution" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">HANDS-ON SPECIALIST EXECUTION</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.contribution}
              </p>
            </section>
          )}

          {/* Outcome & Impact Module */}
          {project.outcome && (
            <section className="flex flex-col gap-3" aria-labelledby="module-outcome">
              <span className="font-mono text-[10px] text-[#202020]/50 font-bold uppercase tracking-widest">07 / OUTCOME & IMPACT</span>
              <h3 id="module-outcome" className="font-sans text-xl sm:text-2xl font-bold text-[#202020] uppercase tracking-tight">THE IMPACT & RESULTS</h3>
              <p className="font-sans text-base text-[#202020]/90 leading-relaxed mt-1">
                {project.outcome}
              </p>
              {project.impactStatement && (
                <div className="mt-3 p-4 bg-[#202020] text-[#F5F0E8] border-l-4 border-[#FFB404]">
                  <span className="font-mono text-[10px] text-[#FFB404] uppercase font-bold tracking-widest block mb-1">KEY PERFORMANCE METRIC</span>
                  <p className="font-sans text-sm font-medium leading-relaxed">
                    {project.impactStatement}
                  </p>
                </div>
              )}
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
