import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CARDS = [
  {
    id: 'ai',
    number: '01',
    title: 'PUT AI TO WORK',
    description: "For businesses and organisations that know AI matters but aren't sure where it can create real value.\n\nI help identify practical opportunities and turn them into approaches your people can actually use.",
    cta: 'EXPLORE →'
  },
  {
    id: 'digital-product',
    number: '02',
    title: 'Build Custom AI-powered Products/Applications',
    description: "For founders, businesses, and teams with an idea for a website, platform, or digital product.\n\nI help move the idea from rough concept to a clear, usable digital experience.",
    cta: 'EXPLORE →'
  },
  {
    id: 'training',
    number: '03',
    title: 'BUILD DIGITAL CAPABILITY',
    description: "For organisations, communities, and teams that want their people to become more confident with AI and digital technology.\n\nI create practical learning experiences that help people move from knowing about technology to using it.",
    cta: 'EXPLORE →'
  },
  {
    id: 'advisory',
    number: '04',
    title: 'THINK THROUGH THE NEXT MOVE',
    description: "For founders and leaders who have a challenge, opportunity, or decision they need to work through.\n\nI bring strategic perspective to help clarify the situation and identify a practical next step.",
    cta: 'EXPLORE →'
  }
];

export default function PointOfView() {
  const shouldReduceMotion = useReducedMotion();

  const animY = (amount: number) => shouldReduceMotion ? 0 : amount;
  const animDuration = (duration: number) => shouldReduceMotion ? 0.05 : duration;

  const handleCardClick = (interest: string) => {
    // Route to dedicated inquiry page hash with interest query parameter
    window.location.hash = `#inquiry?interest=${interest}`;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="what-i-do" className="relative py-16 lg:py-24 border-b border-[#202020] overflow-hidden" aria-labelledby="pov-title">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-12">
        {/* Header Block: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Left Column: Section Label & Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: animY(15) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: animDuration(0.6), ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="font-mono text-xs font-bold text-[#FFB404]">01 / WHAT I DO</span>
              <span className="w-12 h-[1px] bg-[#202020]/25" />
            </motion.div>
            
            <motion.h2
              id="pov-title"
              initial={{ opacity: 0, y: animY(20) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: animDuration(0.7), delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#202020] uppercase leading-[1.1]"
            >
              WAYS I CAN HELP YOU MOVE FORWARD.
            </motion.h2>
          </div>

          {/* Right Column: Introduction Paragraph */}
          <div className="lg:col-span-7 flex flex-col justify-end lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: animY(20) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: animDuration(0.7), delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base text-[#202020]/80 leading-relaxed lg:max-w-xl"
            >
              Different challenges need different approaches. Choose the one that feels closest to what you're trying to achieve.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid: 4 premium cards arranged 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              initial={{ opacity: 0, y: animY(30) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: animDuration(0.6), delay: shouldReduceMotion ? 0 : idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-left border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 relative shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[6px_6px_0px_0px_rgba(32,32,32,1)] hover:-translate-y-1 hover:translate-x-[-1px] transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[300px] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB404] w-full"
            >
              {/* Corner Bracket Accents matching existing design system */}
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#202020]" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#202020]" />

              <div className="flex flex-col gap-5">
                {/* Number */}
                <span className="font-mono text-xs font-bold text-[#FFB404] tracking-widest uppercase">
                  {card.number}
                </span>

                {/* Title */}
                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#202020] leading-snug uppercase tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#202020]/75 leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </div>

              {/* EXPLORE → CTA */}
              <div className="mt-8 pt-4 border-t border-[#202020]/10 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#202020] tracking-wider uppercase group-hover:text-[#FFB404] transition-colors">
                  {card.cta}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
