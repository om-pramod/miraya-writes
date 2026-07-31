"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const proofs = [
    {
      title: "Documentation system, not a one-pager",
      body: "EchoBench work sample: manual, quick guide, TSGs, release notes, UI microcopy, and sprint process under one product world.",
      tag: "Proof",
    },
    {
      title: "Three altitudes, one ledger",
      body: "Audience Adaptation Matrix keeps engineer, PM, and leadership pages factually aligned. Contradiction is treated as a defect.",
      tag: "Method",
    },
    {
      title: "Honest about AI quality risk",
      body: "Gate and flake runbooks tell teams to classify failures before re-running. No pretend guarantee of perfect model behavior.",
      tag: "Responsible AI",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            Proof before
            <br />
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">fake quotes</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Template portfolios invent VP titles. Miraya shows inspectable artifacts instead. When real client
            permission exists, named testimonials can replace this block.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {proofs.map((item) => (
            <div
              key={item.title}
              className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all"
            >
              <Badge className="mb-4 w-fit">{item.tag}</Badge>
              <h3 className="text-xl font-bold mb-3 text-[#0B0B0B]">{item.title}</h3>
              <p className="text-[#393939] text-base leading-relaxed font-medium">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/work">
            <Button size="lg">Browse work samples</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
