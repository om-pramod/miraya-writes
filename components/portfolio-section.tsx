import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "EchoBench documentation system",
      description:
        "A full documentation system for a simulated LLM evaluation platform: user manual, quick guide, troubleshooting runbooks, release notes, multi-audience gate pack, UI microcopy, and sprint docs process. Built to show content systems, not isolated blog posts.",
      tag: "Documentation systems",
      proof: "Audience Adaptation Matrix (T / S / N) on release gates",
      bgColor: "bg-brand-purple",
      illustration: "/images/studio-workspace.svg",
      href: "/contact",
    },
    {
      title: "Support runbooks for AI quality gates",
      description:
        "Symptom-first TSGs for gate false fails, flaky LLM-judges, and offline runners, plus a support index so L1 can route without guessing. Emphasis on evidence headers, pin drift, and classify-before-re-run rituals.",
      tag: "Troubleshooting",
      proof: "Decision trees + severity + escalation bundles",
      bgColor: "bg-brand-blue",
      illustration: "/images/venture-workspace.svg",
      href: "/contact",
    },
    {
      title: "Miraya brand and editorial OS",
      description:
        "Canonical writing stack: technical standards, voice modes, Responsible AI content checklist, and prompt library with a resolved verdict-first structure rule. The operating system behind every client draft.",
      tag: "Brand systems",
      proof: "MIRAYA_CANON + RAI checklist",
      bgColor: "bg-[#FFC224]",
      illustration: "/images/product-design.svg",
      href: "/contact",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work samples that prove{" "}
            <span className="bg-brand-yellow text-black px-3 py-1 inline-block">content systems</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium max-w-2xl mx-auto">
            These are inspectable documentation and process artifacts for AI products. Ask for a walkthrough of the
            EchoBench package or a live docs audit on your stack.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-brutal transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <Badge variant={index === 0 ? "purple" : "secondary"} className="mb-6 w-fit">
                  {project.tag}
                </Badge>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-4 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <p className="text-sm md:text-base font-semibold text-[#0B0B0B] mb-8">Proof focus: {project.proof}</p>

                <Link
                  href={project.href}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  Request a sample walkthrough
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px]`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Audit my documentation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
