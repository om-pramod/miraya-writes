'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Problem {
  id: number
  title: string
  accentColor: string
  label: string
  subtitle: string
  body: (JSX.Element | string)[]
  link?: string
  linkText?: string
}

const problems: Problem[] = [
  {
    id: 1,
    title: 'Developer Onboarding Friction',
    accentColor: '#FF4A60',
    label: 'PROBLEM 01 — DEVELOPER EXPERIENCE',
    subtitle: 'Time lost due to unclear documentation',
    body: [
      'Developers often spend significant time understanding internal systems, terminology, and architecture before they can contribute effectively. This is not always due to complexity alone, but often unclear architecture notes, missing glossaries, and poorly structured guides create a slow ramp-up.',
      '\n\n',
      'Developer experience research from ',
      <a
        key="atlassian-link"
        href="https://www.atlassian.com/developer-experience"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2 text-[#FF4A60] hover:opacity-70 transition-opacity"
      >
        Atlassian
      </a>,
      ' shows that accessible documentation and organized knowledge-sharing practices contribute to faster onboarding and smoother collaboration within teams.',
    ],
  },
  {
    id: 2,
    title: 'Executive and Stakeholder Misalignment',
    accentColor: '#2F81F7',
    label: 'PROBLEM 02 — ORGANIZATIONAL ALIGNMENT',
    subtitle: 'Decisions slow down when technical clarity is missing',
    body: [
      'AI systems are often complex, and when they are not explained clearly, different stakeholders interpret them in different ways. This creates gaps between technical teams, leadership, and business stakeholders.',
      '\n\n',
      'Insights from ',
      <a
        key="mckinsey-link"
        href="https://www.mckinsey.com/featured-insights/artificial-intelligence/ai-adoption-advances-but-foundational-barriers-remain"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2 text-[#2F81F7] hover:opacity-70 transition-opacity"
      >
        McKinsey & Company
      </a>,
      ' highlight that organizations face significant barriers in AI adoption due to lack of clear understanding, fragmented communication, and weak alignment across functions. When stakeholders lack clarity on systems and their limits, decision-making becomes inefficient.',
    ],
  },
  {
    id: 3,
    title: 'Documentation and Compliance Gaps',
    accentColor: '#6366F1',
    label: 'PROBLEM 03 — GOVERNANCE & COMPLIANCE',
    subtitle: 'Poor documentation is a governance necessity',
    body: [
      'In AI and Machine Learning systems, documentation is not optional — it is a governance necessity. Documentation directly impacts trust, accountability, and risk management. Unlike traditional software, AI systems require a higher level of transparency and compliance.',
      '\n\n',
      'The ',
      <a
        key="nist-link"
        href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2 text-[#6366F1] hover:opacity-70 transition-opacity"
      >
        NIST AI Risk Management Framework
      </a>,
      ' clearly states that documentation, traceability, and explainability are essential for responsible AI systems. Organizations that treat documentation as an afterthought expose themselves to regulatory risk and make systems harder to understand as AI regulations expand.',
    ],
  },
]

export function ClarityGapSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProblem = problems[activeIndex]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[52px] leading-[60px] font-bold mb-4">
              The{' '}
              <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">
                clarity
              </span>{' '}
              gap.
            </h2>
            <p className="text-[#393939] text-[18px] leading-[30px] font-medium max-w-2xl mx-auto">
              When technical concepts stay unclear, the cost is quiet but continuous.
            </p>
          </div>

          {/* Two-Panel Container */}
          <div className="border-[3px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row min-h-[520px] mb-8">
            {/* LEFT SIDEBAR PANEL */}
            <div className="md:w-[340px] flex-shrink-0 bg-[#0B0B0B] p-6 md:p-8 border-r-[3px] border-black flex flex-col">
              {/* Problems Label */}
              <div className="text-[#666] text-[11px] font-bold tracking-[0.15em] uppercase font-mono mb-6">
                PROBLEMS
              </div>

              {/* Problem Buttons */}
              <div className="space-y-3 flex-1">
                {problems.map((problem, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-5 rounded-2xl transition-all duration-200 flex items-start gap-4 ${
                      activeIndex === index
                        ? `bg-white border-[3px] border-[${problem.accentColor}] text-[#0B0B0B]`
                        : 'bg-transparent hover:bg-white/5 text-[#666]'
                    }`}
                    style={
                      activeIndex === index
                        ? { borderColor: problem.accentColor }
                        : undefined
                    }
                  >
                    {/* Number Badge */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[12px] font-bold font-mono ${
                        activeIndex === index
                          ? 'text-white'
                          : 'bg-white/10 text-white'
                      }`}
                      style={
                        activeIndex === index
                          ? { backgroundColor: problem.accentColor }
                          : undefined
                      }
                    >
                      {String(problem.id).padStart(2, '0')}
                    </div>

                    {/* Problem Title */}
                    <span
                      className={`text-[14px] leading-[20px] ${
                        activeIndex === index
                          ? 'font-bold text-[#0B0B0B]'
                          : 'font-medium text-[#999]'
                      }`}
                    >
                      {problem.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Status Bar */}
              <div className="text-[#444] text-[11px] font-mono mt-auto">
                ● STATUS: ACTIVE   PROBLEMS: 3/3
              </div>
            </div>

            {/* RIGHT CONTENT PANEL */}
            <div className="flex-1 bg-white p-8 md:p-12 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="flex-1 flex flex-col"
                >
                  {/* Top Label Row */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeProblem.accentColor }}
                    />
                    <span className="text-[11px] font-bold font-mono tracking-[0.15em] uppercase text-[#666]">
                      {activeProblem.label}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-[#666] text-[15px] font-medium italic mb-4">
                    {activeProblem.subtitle}
                  </p>

                  {/* Body Text */}
                  <div className="text-[#393939] text-[17px] leading-[30px] mb-6 flex-1">
                    {activeProblem.body}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex gap-2 items-center mt-auto">
                {problems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="rounded-full cursor-pointer transition-all duration-200"
                    style={{
                      width: activeIndex === index ? '20px' : '10px',
                      height: '10px',
                      backgroundColor:
                        activeIndex === index
                          ? problems[index].accentColor
                          : '#EDEDED',
                    }}
                    onMouseEnter={(e) => {
                      if (activeIndex !== index) {
                        e.currentTarget.style.backgroundColor = '#ccc'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeIndex !== index) {
                        e.currentTarget.style.backgroundColor = '#EDEDED'
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Closing Block */}
          <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-black font-medium text-[18px] leading-[30px]">
                Whether the audience is a new developer, a CEO, or an auditor — content that communicates clearly reduces risk, accelerates decisions, and builds the kind of trust that holds organizations together.
              </p>
              <p className="text-black font-bold text-[17px] mt-2">
                That&apos;s what I do.
              </p>
            </div>
            <Link href="#contact">
              <button className="bg-[#0B0B0B] text-white hover:bg-black/90 transition-colors rounded-lg py-5 px-8 font-semibold text-[16px] whitespace-nowrap flex-shrink-0">
                Schedule a Free Audit →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
