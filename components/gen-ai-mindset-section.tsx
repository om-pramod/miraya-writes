"use client"

import Link from "next/link"
import { Microscope, ShieldCheck, RefreshCw, Users } from "lucide-react"

export function GenAIMindsetSection() {
  const mindsetCards = [
    {
      title: "Curiosity",
      description:
        "I test new AI tools against real writing jobs: outlining, research triage, and draft pressure. If a tool does not change a measurable step, I drop it.",
      icon: Microscope,
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "Responsibility",
      description:
        "AI-assisted lines still get human review. Sources are checked. Uncertainty in model behavior is labeled. Final decisions stay with a named owner.",
      icon: ShieldCheck,
      bgColor: "bg-[#FF4A60]",
    },
    {
      title: "Adaptability",
      description:
        "Tooling and model behavior change. Process does not: intake, fact ledger, draft, SME pass, humanization, Responsible AI checklist, publish.",
      icon: RefreshCw,
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Human judgment",
      description:
        "AI speeds research and structure. It does not own product truth, ethics calls, or the sentence a customer will trust under stress.",
      icon: Users,
      bgColor: "bg-[#6366F1]",
    },
  ]

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[36px] md:text-[52px] leading-tight md:leading-[60px] font-bold text-center mb-4">
            How I work with{" "}
            <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">generative AI</span>
          </h2>

          <p className="text-[#393939] text-[18px] leading-[30px] font-medium max-w-2xl mx-auto text-center mb-12 md:mb-16">
            Treat model output like a post-it from an overeager colleague: useful effort, still verified before you act.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mindsetCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[32px] p-8 flex flex-col items-center text-center gap-4 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl border-[3px] border-black ${card.bgColor} flex items-center justify-center text-white mb-2`}
                  >
                    <IconComponent size={32} strokeWidth={2} />
                  </div>

                  <h3 className="font-bold text-[20px] text-[#0B0B0B] uppercase tracking-wide">{card.title}</h3>

                  <p className="text-[#393939] text-[15px] leading-[26px] font-medium">{card.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-8 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="max-w-2xl">
              <h3 className="font-bold text-[28px] md:text-[32px] leading-tight text-[#0B0B0B] mb-2">
                Need content that{" "}
                <span className="underline decoration-[#FF4A60] decoration-4 underline-offset-4">communicates</span>?
              </h3>
              <p className="text-[#0B0B0B] font-bold text-[14px] md:text-[16px] tracking-[0.05em]">
                Strategy first. Human final. AI only where it earns its place.
              </p>
            </div>

            <Link href="/contact" className="w-full md:w-auto">
              <button className="bg-[#0B0B0B] text-white rounded-lg py-5 px-10 font-bold text-[16px] tracking-[0.05em] hover:bg-black/90 transition-colors whitespace-nowrap text-center flex-shrink-0 w-full md:w-auto">
                Request a strategy session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
