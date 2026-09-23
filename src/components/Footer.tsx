import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Footer() {
  const socialLinks = PORTFOLIO_CONFIG.socialLinks;
  const email = PORTFOLIO_CONFIG.email;
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#202020] text-[#F5F0E8] border-t border-[#202020] px-6 lg:px-16 py-12 lg:py-16 relative" aria-label="Primary Site Footer">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Editorial Branding */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div>
            <h3 className="font-sans text-lg font-bold text-[#FFFFFF] leading-snug">
              Adebayo Kareem
            </h3>
            <p className="font-sans text-xs text-[#F5F0E8]/60 mt-1 uppercase tracking-wider font-semibold">
              AI Strategy &middot; Creative Technology &middot; Digital Transformation
            </p>
          </div>
        </div>

        {/* Center: Contact Point placeholders */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-[#F5F0E8]/50 uppercase tracking-widest font-bold block mb-1">CONNECTIVITY</span>
          <a href={`mailto:${email}`} className="font-mono text-xs text-[#F5F0E8]/90 hover:text-[#FFB404] transition-colors block focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded">
            {email}
          </a>
          <span className="font-sans text-xs text-[#F5F0E8]/50 block mt-1 font-semibold">London &middot; Lagos &middot; Hybrid</span>
        </div>

        {/* Right: Social Index */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-[#F5F0E8]/50 uppercase tracking-widest font-bold block mb-1">SOCIAL CHANNELS</span>
          <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-2">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#F5F0E8]/80 hover:text-[#FFB404] transition-colors font-bold tracking-wider block focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
              >
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </div>

        {/* Back To Top Floating Action inside grid */}
        <div className="md:col-span-1 flex justify-end">
          <button 
            onClick={handleScrollToTop}
            className="p-3 border border-[#F5F0E8]/20 text-[#F5F0E8] hover:text-[#FFB404] hover:border-[#FFB404] transition-all focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none uppercase rounded"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Baseline Footer metadata */}
      <div className="border-t border-[#F5F0E8]/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <span className="font-mono text-[9px] text-[#F5F0E8]/50 font-bold">
          &copy; {currentYear} ADEBAYO KAREEM. ALL RIGHTS RESERVED.
        </span>
        <span className="font-mono text-[9px] text-[#F5F0E8]/40 font-bold">
          DESIGNED WITH GEOMETRIC RESTRAINT &middot; V1.0.0
        </span>
      </div>
    </footer>
  );
}
