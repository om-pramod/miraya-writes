'use client'

import Link from "next/link"
import { Microscope, ShieldCheck, RefreshCw, Users } from "lucide-react"

export function GenAIMindsetSection() {
  console.log("[v0] GenAIMindsetSection rendering")
  
  const mindsetCards = [
    {
      title: "CURIOSITY",
      description: "I'm curious about the impact of Gen AI and actively experiment with new tools to boost my productivity or solve problems in my personal and/or professional life.",
      icon: Microscope,
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "RESPONSIBILITY",
      description: "I'm confident in using AI tools ethically and in accordance with policies, and I recognize that it is my responsibility to review outputs and make final decisions.",
      icon: ShieldCheck,
      bgColor: "bg-[#FF4A60]",
    },
    {
      title: "ADAPTABILITY",
      description: "I'm adapting to the Gen AI space which is still evolving and changing, improving my knowledge and learning new skills as needed.",
      icon: RefreshCw,
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "HUMAN-CENTERED THINKING",
      description: "I use Gen AI as a collaborative tool that enhances my creativity and efficiency, supporting my work without replacing the unique value I bring.",
      icon: Users,
      bgColor: "bg-[#6366F1]",
    },
  ]

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="text-center mb-4">
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase font-mono text-[#0B0B0B] inline-block border-b-2 border-[#FF4A60] pb-1">
              MY APPROACH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[52px] leading-[60px] font-bold text-center mb-4">
            My mindset towards <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">Gen AI</span>
          </h2>

          {/* Subtext */}
          <p className="text-[#393939] text-[18px] leading-[30px] font-medium max-w-2xl mx-auto text-center mb-12 md:mb-16">
            How I think about, use, and take responsibility for AI tools in my work and creative process.
          </p>

          {/* Four Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mindsetCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[32px] p-8 flex flex-col items-center text-center gap-4 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl border-[3px] border-black ${card.bgColor} flex items-center justify-center text-white mb-2`}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[20px] text-[#0B0B0B] uppercase tracking-wide">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#393939] text-[15px] leading-[26px] font-medium">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Full-Width Banner */}
          <div className="bg-white border-[3px] border-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side */}
            <div>
              <h3 className="font-bold text-[24px] md:text-[28px] text-[#0B0B0B]">
                WANT TO WORK WITH AN <span className="text-[#FF4A60]">AI-AWARE</span> WRITER?
              </h3>
              <p className="text-[#666] text-[13px] font-bold tracking-[0.1em] uppercase mt-1">
                HUMAN WRITING. AI-INFORMED PROCESS. NO FLUFF.
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <Link href="#contact">
              <button className="bg-[#0B0B0B] text-white rounded-lg py-4 px-8 font-bold text-[15px] tracking-[0.05em] uppercase hover:bg-black/90 transition-colors whitespace-nowrap">
                LET&apos;S WORK TOGETHER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
