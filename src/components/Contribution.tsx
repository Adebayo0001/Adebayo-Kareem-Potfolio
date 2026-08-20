import React from 'react';
import { BookOpen, Award, Repeat, ShieldAlert, GraduationCap, Link2 } from 'lucide-react';
import { CONTRIBUTIONS, PROOF_TESTIMONIALS, STRUCTURED_CONTRIBUTIONS } from '../data';

export default function Contribution() {
  const pillars = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#FFB404]" />,
      num: '01',
      title: 'TEACH',
      subtitle: 'AI & Technical Literacy',
      desc: 'Conducting high-level workshops, structuring custom generative syllabus kits, and educating executives to navigate systemic shifts with deep strategic clarity.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#FFB404]" />,
      num: '02',
      title: 'BUILD',
      subtitle: 'Applied Sandboxes',
      desc: 'Coaching teams to transition from passive prompt consumption to designing active, custom codebase integrations and live prototype workflows.'
    },
    {
      icon: <Repeat className="w-5 h-5 text-[#FFB404]" />,
      num: '03',
      title: 'MULTIPLY',
      subtitle: 'Capability Continuity',
      desc: 'Formulating structured governance guides and training frameworks to guarantee teams preserve and expand capabilities long after training ends.'
    }
  ];

  return (
    <section id="contribution" className="py-16 lg:py-24 border-b border-[#202020]" aria-labelledby="contribution-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Editorial Introduction & Big Statement */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">07 / SHARED VALUE</span>
            <h2 id="contribution-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#202020] uppercase leading-none">
              Contribution
            </h2>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#202020] leading-snug">
              &ldquo;Professional work can create value. Knowledge shared can multiply it.&rdquo;
            </h3>
            <p className="font-sans text-sm text-[#202020]/75 mt-4 leading-relaxed">
              True transformation is structural. Handing over finished components to client silos offers brief leverage; educating their engineers to design and extend these models creates compounding, long-term enterprise assets.
            </p>
          </div>
        </div>

        {/* Right Side: Dynamic Content from data.ts */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Three Pillars Row (Static structural design pillars remain) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div 
                key={p.title}
                className="border border-[#202020]/15 bg-[#FFFFFF] p-6 relative flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-[#202020]/10 pb-3 mb-4">
                    {p.icon}
                    <span className="font-mono text-xs font-bold text-[#202020]/40">PIN_0{p.num}</span>
                  </div>
                  <h4 className="font-sans text-lg font-bold text-[#202020] uppercase">{p.title}</h4>
                  <span className="font-mono text-[9px] text-[#FFB404] uppercase font-bold tracking-widest block mt-0.5">{p.subtitle}</span>
                  <p className="font-sans text-xs text-[#202020]/80 mt-3 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Publications & Presentations List */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest border-b border-[#202020]/10 pb-2">
              STRUCTURED CONTRIBUTION SYSTEM & REGISTERS
            </span>

            <div className="grid grid-cols-1 gap-6">
              {STRUCTURED_CONTRIBUTIONS.map(contrib => (
                <div 
                  key={contrib.id}
                  className="border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between gap-6 relative group shadow-[1px_1px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all"
                >
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#202020]" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left details */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[9px]">
                        <span className="font-bold text-[#FFB404] bg-[#202020] px-2 py-0.5">{contrib.role}</span>
                        <span className="text-[#202020]/45">&middot;</span>
                        <span className="text-[#202020]/75 font-semibold">{contrib.organization}</span>
                        <span className="text-[#202020]/45">&middot;</span>
                        <span className="text-[#202020]/65 font-bold">{contrib.date}</span>
                      </div>

                      <div>
                        <h4 className="font-sans text-lg font-bold text-[#202020] uppercase tracking-tight leading-snug">
                          {contrib.programName}
                        </h4>
                        <p className="font-mono text-[9px] text-[#202020]/60 uppercase mt-1 font-bold">TOPIC: {contrib.topic}</p>
                      </div>

                      <p className="font-sans text-xs text-[#202020]/85 leading-relaxed">
                        {contrib.description}
                      </p>

                      {contrib.quote && (
                        <p className="font-sans text-xs italic text-[#202020]/90 border-l-2 border-[#FFB404] pl-3">
                          &ldquo;{contrib.quote}&rdquo;
                        </p>
                      )}
                    </div>

                    {/* Right side status / media wireframe */}
                    <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#202020]/10 pt-4 lg:pt-0 lg:pl-6 text-[10px] font-mono text-[#202020]/70">
                      <div className="space-y-2">
                        <div className="border border-dashed border-[#202020]/25 p-3 bg-[#F5F0E8]/40 text-center text-[9px]">
                          <span className="text-[#202020]/50 uppercase block mb-1 font-bold">MEDIA_ASSET_WIRE_MOCK</span>
                          <span className="font-bold uppercase text-[#202020]/80">[{contrib.media}]</span>
                        </div>

                        {contrib.evidence && (
                          <div className="space-y-1">
                            <span className="text-[#202020]/50 block text-[9px] uppercase font-bold">VERIFICATION_STATUS:</span>
                            <span className="font-sans text-[11px] text-[#202020]/90 block leading-tight font-semibold">
                              {contrib.evidence}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-[9px] text-[#202020]/45 pt-4 lg:pt-0 font-semibold">
                        HASH_ID: {contrib.id.toUpperCase()}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Contextual Proof / Testimonial Statistics Row */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest border-b border-[#202020]/10 pb-2">
              VERIFIABLE SYSTEM METRICS & IMPACT
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROOF_TESTIMONIALS.map(proof => (
                <div 
                  key={proof.id}
                  className="border border-[#202020] bg-[#FFFFFF] p-5 flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]"
                >
                  <div>
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-[#FFB404] tracking-tight block">
                      {proof.metric || '[N/A]'}
                    </span>
                    <span className="font-mono text-[9px] text-[#202020]/60 uppercase tracking-widest font-bold mt-1 block">
                      {proof.label}
                    </span>
                    <p className="font-sans text-[11px] text-[#202020]/85 mt-2 leading-relaxed line-clamp-3 italic">
                      &ldquo;{proof.quote}&rdquo;
                    </p>
                  </div>
                  <span className="font-mono text-[8px] text-[#202020]/50 uppercase block mt-3 border-t border-[#202020]/5 pt-2 font-bold">
                    AUTH: {proof.author} &middot; {proof.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Evidence Frame (TSE Academy Reference) */}
          <div className="border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 relative overflow-hidden shadow-[1px_1px_0px_0px_rgba(32,32,32,1)]">
            <span className="absolute top-0 right-0 w-32 h-32 bg-[#FFB404] opacity-10 blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start border-b border-[#202020]/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="font-mono text-[10px] text-[#202020]/50 uppercase tracking-widest font-bold">
                  INSTITUTIONAL PARTNERSHIP
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#202020]/60 font-bold">[ TSE_ACADEMY ]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <h4 className="font-sans text-xl font-bold text-[#202020] tracking-tight">
                  TSE Academy (The Skills Exchange)
                </h4>
                <p className="font-sans text-sm text-[#202020]/85 mt-2 leading-relaxed">
                  Adebayo co-founded and supports active digital technology and generative AI literacy initiatives inside TSE Academy. The curriculum focuses on removing complex, unnecessary technology jargon and substituting direct, hand-coded product design and AI API integration training for future practitioners.
                </p>
              </div>

              {/* Secure Credentials log block */}
              <div className="md:col-span-4 border border-[#202020]/10 bg-[#F5F0E8] p-4 font-mono text-[10px] flex flex-col gap-2 shadow-[1px_1px_0px_0px_rgba(32,32,32,0.05)]">
                <div className="flex justify-between">
                  <span className="text-[#202020]/50 font-bold">CURRICULUM:</span>
                  <span className="font-bold">PROD_DEV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#202020]/50 font-bold">ROLE:</span>
                  <span className="font-bold">CHIEF_EDUCATOR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#202020]/50 font-bold">STATUS:</span>
                  <span className="font-bold text-[#FFB404] bg-[#202020] px-1">[ ONLINE ]</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202020]/10 flex justify-between items-center font-mono text-[9px] text-[#202020]/40">
              <span>REFERENCE: ACTIVE TR_098</span>
              <span>VERIFIED DIGITAL INTEGRITY LOG</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
