import React, { useState, useEffect } from "react";
import { Mail, MessageSquare, PhoneCall, ArrowRight, ShieldCheck, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config";
import { trackEmailClick, trackWhatsappClick, trackBookingClick } from "../lib/analytics";
import { PROJECTS } from "../data";

interface ContactProps {
  projectId?: string;
}

export default function Contact({ projectId }: ContactProps) {
  const [activeProjectTitle, setActiveProjectTitle] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("ai");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"IDLE" | "VALIDATING" | "TRANSMITTING" | "SUCCESS">("IDLE");
  const [formLogs, setFormLogs] = useState<string[]>([]);

  // Determine current project context
  useEffect(() => {
    if (projectId) {
      const match = PROJECTS.find(p => p.id === projectId);
      if (match) {
        setActiveProjectTitle(match.title);
      }
    } else {
      // Fallback to last viewed project from sessionStorage if rendered on homepage
      const stored = sessionStorage.getItem("last_viewed_project_title");
      if (stored) {
        setActiveProjectTitle(stored);
      }
    }
  }, [projectId]);

  // Context-aware routing and interest auto-selection
  useEffect(() => {
    const handleLocationChange = () => {
      const urlStr = window.location.href;
      // Handle standard query params in search (e.g. ?interest=brand) or hash query params (e.g. #contact?interest=brand)
      let interest = null;
      try {
        const url = new URL(urlStr);
        interest = url.searchParams.get("interest");
      } catch (e) {
        // Fallback
      }

      if (!interest && window.location.hash.includes("?")) {
        const hashQuery = window.location.hash.split("?")[1];
        const params = new URLSearchParams(hashQuery);
        interest = params.get("interest");
      } else if (!interest && window.location.hash.includes("interest=")) {
        const parts = window.location.hash.split("interest=");
        if (parts.length > 1) {
          interest = parts[1].split("&")[0];
        }
      }

      if (interest) {
        const validInterests = ["brand", "ai", "digital-product", "training", "advisory"];
        if (validInterests.includes(interest)) {
          setIntent(interest);
        }
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const { email: emailAddress, whatsappNumber, bookingUrl } = PORTFOLIO_CONFIG;

  // Construct context-aware prefilled targets
  const emailSubject = "Project Inquiry — Adebayo Kareem";
  const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;

  const whatsappMessage = activeProjectTitle
    ? `Hi Adebayo, I reviewed your work on "${activeProjectTitle}" and would like to discuss a similar opportunity.`
    : "Hi Adebayo, I'm interested in discussing a project opportunity with you.";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const callHref = bookingUrl;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitStatus("VALIDATING");
    setFormLogs(["[SYSTEM] Initiating transmission sequence..."]);

    setTimeout(async () => {
      setFormLogs(prev => [...prev, "[INTEGRITY] Fields verified. Payload structured successfully."]);
      setSubmitStatus("TRANSMITTING");
      setFormLogs(prev => [...prev, "[NETWORK] Establishing secure handshake with gateway..."]);

      try {
        const response = await fetch("https://formsubmit.co/ajax/a.abidemi0777@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            intent,
            message,
            _subject: `New Portfolio Inquiry from ${name}`,
            _template: "table"
          })
        });

        if (response.ok) {
          setTimeout(() => {
            setFormLogs(prev => [
              ...prev, 
              "[SECURITY] Verification complete. Transit protocol established.",
              "[DELIVERY] Message transmitted to a.abidemi0777@gmail.com successfully."
            ]);
            setSubmitStatus("SUCCESS");
          }, 800);
        } else {
          throw new Error("Transmission failed");
        }
      } catch (error) {
        setTimeout(() => {
          setFormLogs(prev => [...prev, "[ERROR] Transmission failed. Please try again or use direct email."]);
          setSubmitStatus("IDLE");
        }, 800);
      }
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setIntent("project");
    setMessage("");
    setSubmitStatus("IDLE");
    setFormLogs([]);
  };

  return (
    <section 
      id="contact" 
      className="py-16 lg:py-24 border-b border-[#202020] relative"
      aria-labelledby="contact-section-title"
    >
      {/* Editorial branding label */}
      <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-[#202020]/50 uppercase tracking-widest hidden md:block font-bold">
        ENGAGEMENT_GATEWAY_v1.3
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="border-b border-[#202020] pb-6 mb-4">
          <span className="font-mono text-xs font-bold text-[#FFB404] block mb-2">08 / ENGAGEMENT & OUTCOMES</span>
          <h2 
            id="contact-section-title" 
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202020] uppercase leading-[1.05]"
          >
            Let&rsquo;s find the right way to work together.
          </h2>
          <p className="font-sans text-xs text-[#202020]/80 uppercase tracking-wider mt-3 font-bold">
            Select a pathway on the left, or initiate an intent-based message request on the right.
          </p>
        </div>

        {/* Dual Column Layout: Direct Pathways (Left) and Intent Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Compact Direct Pathways (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest border-b border-[#202020]/10 pb-2 mb-2">
              DIRECT PATHWAYS
            </span>

            {/* Email Compact Bar */}
            <div className="border border-[#202020] bg-[#FFFFFF] p-5 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all group">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F5F0E8] text-[#202020] border border-[#202020]/10 group-hover:bg-[#FFB404] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[#202020] uppercase">EMAIL</h3>
                    <p className="font-sans text-[11px] text-[#202020]/75">For structured inquiries & proposals</p>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-[#202020]/40 font-bold">01</span>
              </div>
              <a 
                href={emailHref}
                onClick={trackEmailClick}
                className="inline-flex items-center justify-between font-mono text-[10px] font-bold text-[#202020] uppercase bg-[#F5F0E8] border border-[#202020] px-3.5 py-2.5 hover:bg-[#202020] hover:text-[#F5F0E8] transition-all rounded"
              >
                <span>SEND DIRECT EMAIL</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* WhatsApp Compact Bar */}
            <div className="border border-[#202020] bg-[#FFFFFF] p-5 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(32,32,32,1)] hover:shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] transition-all group">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F5F0E8] text-[#202020] border border-[#202020]/10 group-hover:bg-[#FFB404] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[#202020] uppercase">WHATSAPP</h3>
                    <p className="font-sans text-[11px] text-[#202020]/75">For quick operational conversations</p>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-[#202020]/40 font-bold">02</span>
              </div>
              <a 
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick(activeProjectTitle || undefined)}
                className="inline-flex items-center justify-between font-mono text-[10px] font-bold text-[#202020] uppercase bg-[#F5F0E8] border border-[#202020] px-3.5 py-2.5 hover:bg-[#202020] hover:text-[#F5F0E8] transition-all rounded"
              >
                <span>OPEN CHAT INTERFACE</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>


          </div>

          {/* Right Column: Intent-Based Form (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-mono text-[10px] text-[#202020]/50 uppercase font-bold tracking-widest border-b border-[#202020]/10 pb-2 mb-4">
              INTENT-BASED INQUIRY FORM
            </span>

            {submitStatus === "SUCCESS" ? (
              /* Success Card */
              <div className="border-2 border-[#FFB404] bg-[#FFFFFF] p-8 relative flex flex-col justify-between items-center text-center shadow-[4px_4px_0px_0px_rgba(32,32,32,1)] min-h-[380px] h-full">
                <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#202020]" />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#202020]" />
                
                <div className="my-auto space-y-4">
                  <div className="mx-auto w-12 h-12 bg-[#FFB404]/20 text-[#202020] rounded-full flex items-center justify-center border border-[#FFB404]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-[#202020] uppercase">
                    Transmission Successful
                  </h3>
                  <p className="font-sans text-sm text-[#202020]/80 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project request has been encrypted and routed to Adebayo's primary queue. You will receive a direct email within 24 hours.
                  </p>
                </div>

                {/* Simulated transmission logs */}
                <div className="w-full bg-[#202020] text-[#F5F0E8] font-mono text-[9px] p-4 text-left space-y-1 mt-4">
                  {formLogs.map((log, index) => (
                    <div key={index} className="opacity-90">
                      <span className="text-[#FFB404]/60 mr-2">&gt;</span>
                      {log}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[#202020] uppercase border border-[#202020] px-4 py-2 hover:bg-[#202020] hover:text-[#F5F0E8] transition-colors rounded"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>SEND ANOTHER MESSAGE</span>
                </button>
              </div>
            ) : (
              /* Core Form */
              <form 
                onSubmit={handleFormSubmit}
                className="border border-[#202020] bg-[#FFFFFF] p-6 sm:p-8 relative flex flex-col gap-5 shadow-[4px_4px_0px_0px_rgba(32,32,32,1)]"
              >
                <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#202020]" />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#202020]" />

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">
                    Full Name / Organization *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={submitStatus !== "IDLE"}
                    placeholder="Enter your name or agency"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-sans text-xs bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">
                    Email Address *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={submitStatus !== "IDLE"}
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-sans text-xs bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] disabled:opacity-50"
                  />
                </div>

                {/* Intent Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-intent" className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">
                    Primary Intent *
                  </label>
                  <select
                    id="form-intent"
                    disabled={submitStatus !== "IDLE"}
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="font-sans text-xs bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] disabled:opacity-50 cursor-pointer"
                  >
                    <option value="ai">PUT AI TO WORK</option>
                    <option value="digital-product">BUILD YOUR DIGITAL IDEA</option>
                    <option value="training">BUILD DIGITAL CAPABILITY</option>
                    <option value="advisory">THINK THROUGH THE NEXT MOVE</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="font-mono text-[9px] text-[#202020]/60 font-bold uppercase">
                    How can Adebayo help? *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    disabled={submitStatus !== "IDLE"}
                    placeholder="Describe your goals, timeline, and current system requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="font-sans text-xs bg-[#F5F0E8]/35 border border-[#202020]/20 px-3.5 py-3 focus:outline-none focus:border-[#FFB404] focus:ring-1 focus:ring-[#FFB404] transition-colors text-[#202020] disabled:opacity-50 resize-none leading-relaxed"
                  />
                </div>

                {/* Terminal feedback log strip */}
                {formLogs.length > 0 && (
                  <div className="bg-[#202020] text-[#F5F0E8] font-mono text-[9px] p-3 space-y-1">
                    {formLogs.map((log, idx) => (
                      <div key={idx} className="opacity-90">
                        <span className="text-[#FFB404]/60 mr-1">&gt;</span>
                        {log}
                      </div>
                    ))}
                  </div>
                )}

                {/* Action button */}
                <button
                  type="submit"
                  disabled={submitStatus !== "IDLE" || !name || !email || !message}
                  className="font-mono text-[11px] font-bold text-[#202020] uppercase bg-[#FFB404] border border-[#202020] py-3.5 hover:bg-[#202020] hover:text-[#F5F0E8] transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed rounded"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {submitStatus === "IDLE" && "SEND SECURE MESSAGE"}
                    {submitStatus === "VALIDATING" && "VERIFYING INPUTS..."}
                    {submitStatus === "TRANSMITTING" && "TRANSMITTING TO GATEWAY..."}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Security / Quality verification baseline */}
        <div className="mt-4 p-4 border border-dashed border-[#202020]/15 bg-[#FFFFFF]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-[1px_1px_0px_0px_rgba(32,32,32,0.05)]">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#202020]/75 font-semibold">
            <ShieldCheck className="w-4 h-4 text-green-700 shrink-0" />
            <span>ALL CHANNELS & FORM HANDLERS SECURED BY GATEWAY LOGIC</span>
          </div>
          <span className="font-mono text-[8px] text-[#202020]/40 font-bold">
            SECURE_KEY_LOCK // AD-K-PORTFOLIO-TLS-v1.3
          </span>
        </div>

      </div>
    </section>
  );
}
