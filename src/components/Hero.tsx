import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { STATS_CONFIG } from '../data';
import { PORTFOLIO_CONFIG } from '../config';

// Portrait image served from the public folder with online fallback
const PORTRAIT_IMAGE_URL = PORTFOLIO_CONFIG.portraitImage || "/portrait.jpg";
const FALLBACK_PORTRAIT_URL = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&h=1067";

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreWork, onContactClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const [portraitImage, setPortraitImage] = React.useState<string>(PORTRAIT_IMAGE_URL);

  // Subtle parallax translation for the portrait image on scroll
  const portraitY = useTransform(scrollY, [0, 600], [0, 45]);
  const yShift = shouldReduceMotion ? 0 : portraitY;

  // Motion configurations respecting user preference
  const animY = (amount: number) => shouldReduceMotion ? 0 : amount;
  const animDuration = (duration: number) => shouldReduceMotion ? 0.05 : duration;

  // Shared Editorial Portrait Component - clean display with no upload or hover effects
  const EditorialPortrait = ({ className = "" }: { className?: string }) => {
    return (
      <div 
        className={`relative w-full aspect-[3/4] bg-[#202020]/5 overflow-hidden border border-[#202020] shadow-[1px_1px_0px_0px_rgba(32,32,32,0.1)] ${className}`}
      >
        <motion.img
          src={portraitImage}
          onError={() => {
            if (portraitImage !== FALLBACK_PORTRAIT_URL) {
              setPortraitImage(FALLBACK_PORTRAIT_URL);
            }
          }}
          alt="Adebayo Kareem Editorial Portrait"
          className="w-full h-full object-cover object-center"
          style={{ y: yShift }}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: animDuration(1.2), ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center border-b border-[#202020] py-12 lg:py-20 overflow-hidden" aria-label="Hero Section">
        {/* Background Subtle Subgrid Overlay */}
        <div className="absolute inset-0 architectural-grid opacity-85 pointer-events-none" />
        <div className="absolute inset-0 architectural-grid-fine opacity-50 pointer-events-none" />

        {/* 12-Column Responsive Grid / Recomposed Mobile Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Information Stack */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-8 lg:gap-10">
            
            {/* 3. Positioning & Supporting Copy */}
            <motion.div 
              initial={{ opacity: 0, y: animY(20) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animDuration(0.8), delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 max-w-xl"
            >
              <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#202020] leading-snug uppercase tracking-tight">
                I build AI implementation and growth systems for organizations and institutions
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#202020]/85 leading-relaxed">
                Helping businesses and organisations clarify what they need, build what matters, and develop the skills to use technology effectively.
              </p>
            </motion.div>

            {/* 4. Disciplines Block */}
            <motion.div 
              initial={{ opacity: 0, y: animY(15) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animDuration(0.8), delay: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="flex items-center gap-3 border-y border-[#202020]/15 py-4 w-full max-w-xl">
                <span className="w-2 h-2 bg-[#FFB404] shrink-0" />
                <p className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#202020] uppercase leading-relaxed">
                  AI STRATEGY &middot; BRAND STRATEGY &middot; CREATIVE TECHNOLOGY
                </p>
              </div>
            </motion.div>

            {/* 5. CTA Block */}
            <motion.div 
              initial={{ opacity: 0, y: animY(15) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animDuration(0.8), delay: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onExploreWork}
                  className="group flex items-center justify-center gap-3 bg-[#202020] text-[#F5F0E8] px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#FFB404] hover:text-[#202020] transition-all duration-300 active:scale-98 focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded-none"
                  aria-label="See how I work"
                >
                  <span>SEE HOW I WORK &rarr;</span>
                </button>
                <button
                  onClick={onContactClick}
                  className="flex items-center justify-center gap-3 border border-[#202020] bg-transparent text-[#202020] px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#202020] hover:text-[#F5F0E8] transition-all duration-300 active:scale-98 focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none rounded-none"
                  aria-label="Start a conversation"
                >
                  <span>START A CONVERSATION &rarr;</span>
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Desktop Editorial Portrait */}
          <div className="hidden lg:flex lg:col-span-5 w-full justify-end">
            <EditorialPortrait className="max-w-[280px] xl:max-w-[330px]" />
          </div>

        </div>
      </section>

      {/* Proof and Experience Strip: WORK IN NUMBERS */}
      <section className="border-b border-[#202020] py-12 relative overflow-hidden" aria-label="Work in Numbers">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs font-bold tracking-widest text-[#202020]/50 uppercase">
              // WORK IN NUMBERS
            </h3>
          </div>
          <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Stat 01 */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-none select-none">
                {STATS_CONFIG.yearsOfExperience}+
              </span>
              <p className="font-mono text-[9px] sm:text-[10px] text-[#202020]/75 uppercase tracking-wider leading-snug">
                Years of Professional Experience
              </p>
            </div>

            {/* Stat 02 */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-none select-none">
                {STATS_CONFIG.peopleTrained}+
              </span>
              <p className="font-mono text-[9px] sm:text-[10px] text-[#202020]/75 uppercase tracking-wider leading-snug">
                People Trained
              </p>
            </div>

            {/* Stat 03 */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-none select-none">
                {STATS_CONFIG.projectsAndInitiatives}+
              </span>
              <p className="font-mono text-[9px] sm:text-[10px] text-[#202020]/75 uppercase tracking-wider leading-snug">
                Projects and Initiatives
              </p>
            </div>

            {/* Stat 04 */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-none select-none">
                {STATS_CONFIG.digitalLearningCredentials}
              </span>
              <p className="font-mono text-[9px] sm:text-[10px] text-[#202020]/75 uppercase tracking-wider leading-snug">
                AI and Digital Learning Credentials
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
