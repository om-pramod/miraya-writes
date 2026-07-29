import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "AI product documentation systems",
      headline: "Manuals, guides, TSGs, and release notes that match how your product ships.",
      description: "I build documentation as infrastructure: information architecture, reusable templates, and release-aligned delivery. Typical deliverables:",
      bullets: [
        "User manuals and task-based how-tos",
        "Quick guides for first success",
        "Troubleshooting guides with decision trees",
        "Release notes with breaking changes and upgrade actions",
        "Repo and wiki patterns (Git, ADO, SharePoint-class workflows)",
      ],
      idealFor: "AI product teams whose engineers understand the system but support, PMs, and users do not.",
      cta: "Audit my documentation",
      image: "/images/product-design.svg",
    },
    {
      title: "Technical explainers and SEO articles",
      headline: "Search traffic that survives a specialist reader.",
      description: "Articles and tutorials on ML, LLMs, and data systems, written so a smart non-specialist can finish the piece and an engineer does not wince. Each piece is:",
      bullets: [
        "Keyword-researched for real search intent",
        "Fact-checked against primary sources or SME input",
        "Free of banned hype vocabulary and filler openers",
        "Closed with a concrete reader action, not a summary slogan",
      ],
      idealFor: "AI startups and EdTech teams that need organic traffic without thin, generic posts.",
      cta: "Start a content project",
      image: "/images/web-design.svg",
    },
    {
      title: "Website and landing page copy",
      headline: "Say what you build, who it is for, and what to do next.",
      description: "Service and product pages in Miraya service-copy mode: problem, offer, proof, CTA. I write copy that:",
      bullets: [
        "States the product in plain, direct language",
        "Speaks to founder, PM, and technical buyer concerns",
        "Pairs claims with process or credential proof",
        "Uses restrained CTAs (strategy session, docs audit), not vague Submit buttons",
      ],
      idealFor: "SaaS and AI companies launching, repositioning, or cleaning template site copy.",
      cta: "Discuss your site copy",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Audience Adaptation Matrix",
      headline: "One technical truth, three altitudes.",
      description: "I rewrite the same product fact for engineers (T), operators and PMs (S), and leadership (N) without changing the numbers. You get:",
      bullets: [
        "A shared fact ledger before prose starts",
        "T/S/N variants that stay consistent under review",
        "Stakeholder language for gates, risk, and ship decisions",
        "Fewer support loops caused by contradictory docs",
      ],
      idealFor: "Teams shipping AI features to mixed audiences from one content budget.",
      cta: "Apply the matrix to my product",
      image: "/images/user-research.svg",
    },
    {
      title: "EdTech and curriculum content",
      headline: "Learning design for AI and data science, not slide filler.",
      description: "Course outlines, module notes, and assessments that move learners from definition to application. Deliverables include:",
      bullets: [
        "Syllabus and module frameworks",
        "Technical explanations with worked examples",
        "Assignments and case-based exercises",
        "Instructional support materials for faculty or LMS teams",
      ],
      idealFor: "EdTech founders, training teams, and institutions building AI or data science programs.",
      cta: "Discuss academic content",
      image: "/images/motion-graphics.svg",
    },
    {
      title: "Edit, humanize, and brand-voice pass",
      headline: "Make existing drafts publishable under a real standard.",
      description: "I run Google technical writing discipline plus Miraya humanization: active voice, term lock, rhythm variation, and a Responsible AI content checklist. I edit for:",
      bullets: [
        "Clarity, structure, and answer-first paragraphs",
        "Removal of AI-flagged filler and hype terms",
        "Audience fit and stranger-test readability",
        "Consistency with your glossary and product truth",
      ],
      idealFor: "Teams with strong SME drafts that still read generated, vague, or off-brand.",
      cta: "Submit content for review",
      image: "/images/web-design.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Services for{" "}
              <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">AI and EdTech teams</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Content systems and technical writing that close the gap between engineering and everyone else who needs
              to ship, sell, support, or learn the product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col group"
              >
                <div className="mb-4 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-[22px] leading-[30px] font-bold mb-1 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[24px] font-semibold text-[#FF4A60] mb-3">{service.headline}</p>
                  <p className="text-[15px] leading-[24px] font-medium text-[#393939] mb-3">{service.description}</p>
                  <ul className="text-[14px] leading-[22px] text-[#393939] mb-4 space-y-1">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-2 text-[#FF4A60]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[14px] leading-[22px] text-[#666] italic mb-4">
                    <span className="font-semibold not-italic">Ideal for:</span> {service.idealFor}
                  </p>
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className="bg-black text-white hover:bg-black/90 rounded-[12px] px-6 py-3 font-medium text-[14px] w-full">
                        {service.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Not sure where to start?</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Bring your stack, content gaps, and one painful support or onboarding loop. We will map a documentation
                or content plan you can run in a sprint.
              </p>
              <Link href="/contact" className="w-full max-w-[340px]">
                <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full h-[64px]">
                  <Mail className="w-5 h-5 mr-2" />
                  Request a strategy session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
