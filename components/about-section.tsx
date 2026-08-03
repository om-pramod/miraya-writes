import { User, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { primaryLinks } from "@/lib/social-links"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About Omkar Hankare" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who runs{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Miraya Intelligenza</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Omkar Hankare is an AI engineer and technical writer based in Pune, India. Some people build models. Some
              explain them. He does both: design and document systems, then turn that work into learning experiences that
              stick. Affiliation: Manipal University Jaipur. Public research labels include artificial intelligence, AI
              agents, responsible and ethical AI, and LLMOps.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Published technical teaching</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Medium series on autoencoders, gradient descent, and hands-on AI tools (including Google Teachable
                  Machine). Goal: clear insights without burying the reader in jargon.
                </p>
                <a
                  href={primaryLinks.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold mt-2 text-[#0B0B0B] underline underline-offset-2"
                >
                  Read on Medium <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Research on the record</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Co-author on a 2025 AIP Conference Proceedings paper (Swift–AI approach for AI-generated lyrics,
                  portraits, and avatar dance imitation). Profiles on Google Scholar, ORCID, and ResearchGate.
                </p>
                <a
                  href={primaryLinks.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold mt-2 text-[#0B0B0B] underline underline-offset-2"
                >
                  Google Scholar <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FFC224] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Responsible AI as practice</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Public focus areas include responsible and ethical AI. Client and public deliverables can run a
                  Responsible AI content checklist: provenance, honesty about uncertainty, privacy, and human final
                  review.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[220px]">
                <User className="w-5 h-5" />
                Request a strategy session
              </Button>
            </Link>
            <a href={primaryLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-lg py-5 px-8 text-base md:text-lg font-semibold h-auto w-full sm:w-auto border-[3px] border-black"
              >
                LinkedIn profile
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
