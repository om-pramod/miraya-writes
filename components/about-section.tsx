import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About Miraya illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who runs{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Miraya Intelligenza</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Omkar Hankare leads Miraya Intelligenza, the AI Technical Writer Hub. Background: B.Tech in Computer
              Science Engineering with specialization in Artificial Intelligence, plus an MBA in Analytics and Data
              Science. The work sits where engineering detail and reader understanding have to meet.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Engineering-first writing</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  I can interview engineers on architecture, evals, and failure modes without treating the product as
                  marketing theater. Accuracy first, then clarity.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Responsible AI as practice</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Every public or client deliverable can run a Responsible AI content checklist: provenance, honesty
                  about uncertainty, privacy, and audience fit. Ethics show up in process, not slogans.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FFC224] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Systems, not one-off posts</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Templates, taxonomies, multi-audience packs, and sprint-aligned doc plans so content still works after
                  the launch week ends.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <User className="w-5 h-5" />
              Request a strategy session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
