import Image from "next/image"

export function PullQuoteBlock() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
            The AI <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">Perspective</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Global insights from UNESCO on the intersection of human intelligence and artificial systems in modern education.
          </p>
        </div>

        {/* Staggered Quotes Container */}
        <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 relative">
          
          {/* Quote 1 - Aligned Left */}
          <div className="self-start w-full max-w-2xl -rotate-1 md:-rotate-2 hover:rotate-0 transition-transform duration-300 group">
            <div className="bg-[#6366F1] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px]">
              <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
                "To reach its full potential, AI must complement the human and social dimensions of learning, rather than
                replace them."
              </blockquote>
              <a 
                href="https://www.unesco.org/en/articles/international-day-education-unesco-chief-calls-human-centered-ai-schools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white underline decoration-2 underline-offset-4 uppercase tracking-widest transition-colors"
              >
                Official 2025 Message
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Quote 2 - Aligned Right */}
          <div className="self-end w-full max-w-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-300 group">
            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px]">
              <blockquote className="text-xl md:text-2xl font-bold text-black leading-relaxed mb-6">
                "AI literacy in academia is not the future of learning — it is the present, and we need to invest in
                ethical technical content immediately."
              </blockquote>
              <a 
                href="https://unesdoc.unesco.org/ark:/48223/pf0000386693" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-black/70 hover:text-black underline decoration-2 underline-offset-4 uppercase tracking-widest transition-colors"
              >
                AI Guidance Briefing
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Quote 3 - Aligned Left (Offset) */}
          <div className="self-start md:ml-12 w-full max-w-2xl -rotate-1 hover:rotate-0 transition-transform duration-300 group">
            <div className="bg-[#FF4A60] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px]">
              <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
                "Digital literacy must be part of the core competencies all citizens should have. Decision making is and
                will remain our responsibility as humankind."
              </blockquote>
              <a 
                href="https://www.unesco.org/en/ethics-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white underline decoration-2 underline-offset-4 uppercase tracking-widest transition-colors"
              >
                Ethics of AI Framework
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  )
}
