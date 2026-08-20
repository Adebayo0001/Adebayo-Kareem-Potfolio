import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Compass, HelpCircle, Target, FileCode, Activity } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface CapabilityMatrixProps {
  onContactClick: () => void;
}

const STAGES = [
  {
    id: 'stage-01',
    number: 'STAGE 01',
    title: 'UNDERSTAND',
    description: 'Before making anything, I learn about the situation.',
    questions: [
      'What is the actual problem?',
      'Who is involved?',
      'What needs to change?',
      'What already exists?'
    ],
    summary: 'This stage may involve conversations, research, reviewing the current situation, and asking better questions.'
  },
  {
    id: 'stage-02',
    number: 'STAGE 02',
    title: 'DEFINE',
    description: 'Once the situation is clearer, I help define what needs to happen next.',
    bullets: [
      'clarifying a brand position',
      'identifying an opportunity',
      'defining a digital product',
      'finding where AI can be useful',
      'creating a clearer plan for execution'
    ],
    summary: 'The goal is to move from a broad idea to a clear direction.'
  },
  {
    id: 'stage-03',
    number: 'STAGE 03',
    title: 'DESIGN',
    description: 'I turn the direction into a practical plan.',
    bullets: [
      'brand systems',
      'user journeys',
      'website structures',
      'visual direction',
      'content systems',
      'workflows',
      'prototypes'
    ],
    summary: 'This is where thinking starts taking shape.'
  },
  {
    id: 'stage-04',
    number: 'STAGE 04',
    title: 'BUILD',
    description: 'Ideas are tested by implementation.',
    summary: 'I work on turning the plan into something real. This may involve designing an identity, building a website, creating a prototype, setting up a workflow, or using AI-assisted tools to develop a working solution.\n\nThe focus is progress, not unnecessary complexity.'
  },
  {
    id: 'stage-05',
    number: 'STAGE 05',
    title: 'IMPROVE',
    description: 'Once something exists, the work is not automatically finished.',
    summary: 'I look at what is working, what needs attention, and what can be improved.\n\nThe goal is to leave behind something useful that can continue to develop.'
  }
];

export default function CapabilityMatrix({ onContactClick }: CapabilityMatrixProps) {
  const [activeStageId, setActiveStageId] = useState<string>('stage-01');
  const shouldReduceMotion = useReducedMotion();

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'stage-01': return <HelpCircle className="w-5 h-5 text-[#202020]" />;
      case 'stage-02': return <Target className="w-5 h-5 text-[#202020]" />;
      case 'stage-03': return <Compass className="w-5 h-5 text-[#202020]" />;
      case 'stage-04': return <FileCode className="w-5 h-5 text-[#202020]" />;
      case 'stage-05': return <Activity className="w-5 h-5 text-[#202020]" />;
      default: return <HelpCircle className="w-5 h-5 text-[#202020]" />;
    }
  };

  const currentStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  return (
    <section id="how-i-work" className="relative py-16 lg:py-24 border-b border-[#202020]" aria-labelledby="matrix-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Hand: Explanatory Copy & Manifest Title */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">02 / HOW I WORK</span>
              <h2 id="matrix-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#202020] uppercase leading-none">
                HOW I WORK
              </h2>
            </div>
            
            <p className="font-sans text-base text-[#202020]/90 leading-relaxed">
              The work changes from project to project, but the way I approach problems follows a clear pattern. I start by understanding what is really needed, then work towards something practical.
            </p>

            <div className="border-t border-b border-[#202020]/15 py-4 my-6 space-y-2">
              <span className="font-mono text-[9px] text-[#FFB404] font-bold block uppercase tracking-wider">
                PRINCIPLE OF ENGAGEMENT
              </span>
              <p className="font-sans text-sm font-bold text-[#202020] uppercase tracking-tight leading-snug">
                EVERY PROJECT DOES NOT NEED THE SAME ANSWER.
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#202020]/75 leading-relaxed">
                The process gives the work structure, but the solution should always fit the actual problem.
              </p>
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#F5F0E8] uppercase bg-[#202020] border border-[#202020] px-5 py-3 hover:bg-[#FFB404] hover:text-[#202020] transition-colors rounded-none"
            >
              <span>START WITH A CONVERSATION &rarr;</span>
            </button>
          </div>

          <div className="hidden lg:block border-t border-[#202020]/15 pt-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#FFB404]" />
              <span className="font-mono text-[10px] text-[#202020]/60 tracking-widest uppercase font-bold">
                PROCESS & TIMELINE CONSOLE
              </span>
            </div>
          </div>
        </div>

        {/* Right Hand: High-End Interactive Step Grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 xl:grid-cols-2">
            {STAGES.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`text-left p-5 border border-[#202020] cursor-pointer transition-all duration-300 relative focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded-none ${
                    isActive 
                      ? 'bg-[#FFFFFF] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]' 
                      : 'bg-transparent hover:bg-[#FFFFFF]/50'
                  }`}
                  aria-expanded={isActive}
                >
                  {/* Subtle Yellow Active Signifier */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#FFB404]" />
                  )}

                  <div className="flex items-center gap-3 border-b border-[#202020]/10 pb-3 mb-3">
                    {getStageIcon(stage.id)}
                    <span className="font-mono text-[11px] font-bold text-[#202020]/60 tracking-widest">
                      {stage.number}
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-[#202020] leading-snug">
                    {stage.title}
                  </h3>

                  <p className="font-sans text-xs text-[#202020]/75 mt-1 line-clamp-1">
                    {stage.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#202020]/60 font-bold uppercase">
                    <span>EXPLORE STAGE</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#FFB404]' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>



        </div>

      </div>
    </section>
  );
}
