import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const AvailabilityBadge = ({ available = true, label = "Available for strategy sessions" }) => (
  <div
    className={`inline-flex items-center gap-3 border-[3px] border-black rounded-full px-5 py-2.5 shadow-brutal-sm transition-all hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${available ? "bg-brand-yellow" : "bg-[#EDEDED]"}`}
  >
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${available ? "bg-green-600" : "bg-gray-400"}`}
      />
      <span className={`relative inline-flex rounded-full h-3 w-3 ${available ? "bg-green-600" : "bg-gray-400"}`} />
    </span>
    <span className="font-bold text-sm text-black tracking-tight">{label}</span>
  </div>
)

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-0">
        <div className="space-y-6">
          <AvailabilityBadge />

          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] tracking-tight text-[#0B0B0B]">
            Connecting deep tech to{" "}
            <span className="bg-brand-coral text-white px-2 py-1 inline-block">human understanding</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            I am Omkar Hankare, founder of Miraya Intelligenza (AI Technical Writer Hub). I help Series A AI startups
            and EdTech founders turn dense ML systems into documentation, tutorials, and content systems that engineers
            trust and non-specialists can use.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:min-w-[240px]">
                <Mail className="w-5 h-5" />
                Request a strategy session
              </Button>
            </a>
            <a href="/work" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:min-w-[240px]">
                <FolderOpen className="w-5 h-5" />
                View documentation samples
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-brand-yellow border-[4px] border-black rounded-[32px] overflow-hidden shadow-brutal hover:-translate-y-2 transition-transform duration-300">
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
