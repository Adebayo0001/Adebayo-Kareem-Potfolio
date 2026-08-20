import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PointOfView from './components/PointOfView';
import SelectedWork from './components/SelectedWork';
import CapabilityMatrix from './components/CapabilityMatrix';
import Evolution from './components/Evolution';
import Contribution from './components/Contribution';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkArchive from './components/WorkArchive';
import CaseStudy from './components/CaseStudy';
import InquiryPage from './components/InquiryPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navigation bar offset
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

  // Sync scroll targets on Homepage when hash changes to a home section
  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash && !currentHash.startsWith('#work')) {
      const id = currentHash.replace('#', '');
      const timeoutId = setTimeout(() => {
        scrollToAnchor(id);
      }, 150); // wait for homepage components to mount
      return () => clearTimeout(timeoutId);
    }
  }, [hash]);

  const handleContactClick = () => {
    const currentHash = window.location.hash;
    if (currentHash && currentHash.startsWith('#work')) {
      window.location.hash = '#contact';
    } else {
      scrollToAnchor('contact');
    }
  };

  const isWorkArchive = hash === '#work';
  const isCaseStudy = hash.startsWith('#work/');
  const activeProjectId = isCaseStudy ? hash.replace('#work/', '') : null;
  const isInquiry = hash.startsWith('#inquiry');

  // Parse specific interest query parameter (e.g. #inquiry?interest=ai)
  let activeInterestId: string | null = null;
  if (isInquiry) {
    if (hash.includes('?')) {
      const queryPart = hash.split('?')[1];
      const params = new URLSearchParams(queryPart);
      activeInterestId = params.get('interest');
    } else {
      const parts = hash.split('/');
      if (parts.length > 1) {
        activeInterestId = parts[1];
      }
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F5F0E8] font-sans selection:bg-[#FFB404] selection:text-[#202020] overflow-x-clip">
      
      {/* Sticky Editorial Navigation */}
      <Navigation onContactClick={handleContactClick} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col">
        
        {isWorkArchive ? (
          <WorkArchive 
            onNavigateToProject={(id) => {
              window.location.hash = `#work/${id}`;
            }} 
          />
        ) : isCaseStudy && activeProjectId ? (
          <CaseStudy 
            projectId={activeProjectId}
            onBackToWork={() => {
              window.location.hash = '#work';
            }}
            onNavigateToProject={(id) => {
              window.location.hash = `#work/${id}`;
            }}
          />
        ) : isInquiry ? (
          <InquiryPage 
            initialInterestId={activeInterestId}
            onBack={() => {
              window.location.hash = '';
            }}
          />
        ) : (
          /* Homepage Layout */
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Editorial Hero Banner */}
            <Hero 
              onExploreWork={() => {
                scrollToAnchor('how-i-work');
              }}
              onContactClick={handleContactClick}
            />

            {/* Editorial Point of View Manifesto */}
            <PointOfView />

            {/* Large Geometric Case-Study Sequences */}
            <SelectedWork 
              onNavigateToProject={(id) => {
                window.location.hash = `#work/${id}`;
              }} 
            />

            {/* High-Contrast Interactive Capabilities Dashboard */}
            <CapabilityMatrix onContactClick={handleContactClick} />

            {/* Cinematic Professional Evolution Timeline */}
            <Evolution />

            {/* Structured Shared Knowledge & Contribution Index */}
            <Contribution />

            {/* Intent-Based Closing Actions & Dispatch Gateways */}
            <Contact />
          </div>
        )}

      </main>

      {/* Rigid, Flat Black Base Footer Block */}
      <Footer />
    </div>
  );
}
