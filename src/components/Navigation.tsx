import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'evolution', label: 'EVOLUTION' },
    { id: 'contribution', label: 'CONTRIBUTION' }
  ];

  useEffect(() => {
    const handleHashAndScroll = () => {
      const currentHash = window.location.hash;
      
      // If we're on the work page or a project case-study, WORK is active
      if (currentHash.startsWith('#work')) {
        setActiveSection('work');
        return;
      }

      // Otherwise, check section intersections on homepage
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        if (item.id === 'work') continue; // skip scroll detection for work page
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleHashAndScroll);
    window.addEventListener('hashchange', handleHashAndScroll);
    handleHashAndScroll(); // Initial execution

    return () => {
      window.removeEventListener('scroll', handleHashAndScroll);
      window.removeEventListener('hashchange', handleHashAndScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavItemClick = (id: string) => {
    setMobileMenuOpen(false);
    
    if (id === 'work') {
      window.location.hash = '#work';
    } else {
      const currentHash = window.location.hash;
      if (currentHash && currentHash.startsWith('#work')) {
        // Switch to homepage first via hash, then scroll will be handled in App.tsx
        window.location.hash = `#${id}`;
      } else {
        // Already on home, do direct smooth scroll
        scrollToSection(id);
        // Clean up hash to look premium
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header id="nav-header" className="sticky top-0 z-50 w-full bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#202020] px-6 lg:px-16 py-4 flex items-center justify-between transition-all duration-300">
        {/* Left: Branding & Identifier */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer group text-left focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none p-1 rounded"
          aria-label="Back to home section"
        >
          <div className="w-2.5 h-2.5 bg-[#202020] group-hover:bg-[#FFB404] transition-colors duration-300" />
          <span className="font-mono text-xs tracking-wider uppercase text-[#202020]/85">Adebayo Kareem</span>
          <span className="font-mono text-xs font-bold text-[#202020]">/</span>
          <span className="font-mono text-xs font-bold text-[#202020] tracking-wider bg-[#202020] text-[#F5F0E8] group-hover:bg-[#FFB404] group-hover:text-[#202020] transition-colors duration-300 px-1.5 py-0.5">
            01
          </span>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className="relative py-2 font-mono text-[11px] font-bold tracking-widest text-[#202020] hover:text-[#FFB404] transition-colors focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none"
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFB404]"
                    transition={shouldReduceMotion ? { duration: 0.05 } : { type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Editorial Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="hidden sm:flex items-center gap-2 border border-[#202020] bg-transparent text-[#202020] px-5 py-2 font-mono text-[11px] font-bold tracking-widest hover:bg-[#202020] hover:text-[#F5F0E8] transition-all duration-300 uppercase active:scale-95 focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none"
            aria-label="Contact Adebayo Kareem"
          >
            LET'S TALK
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#202020] hover:text-[#FFB404] transition-colors focus-visible:ring-2 focus-visible:ring-[#FFB404] focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Index Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[57px] z-40 w-full bg-[#F5F0E8] border-b border-[#202020] p-6 flex flex-col gap-6 md:hidden max-h-[calc(100vh-57px)] overflow-y-auto"
          >
            <div className="font-mono text-[10px] tracking-widest text-[#202020]/40 uppercase mb-2 border-b border-[#202020]/10 pb-2">
              Navigation Index
            </div>
            
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavItemClick(item.id)}
                    className="flex items-center justify-between py-2 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#202020]/40">0{index + 1}</span>
                      <span className={`font-sans text-lg font-bold tracking-tight ${isActive ? 'text-[#FFB404]' : 'text-[#202020]'}`}>
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 bg-[#FFB404]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#202020]/25 group-hover:text-[#202020] transition-colors" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#202020]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-between bg-[#202020] text-[#F5F0E8] px-5 py-4 font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-[#FFB404] hover:text-[#202020] transition-colors"
              >
                <span>LET'S TALK NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
